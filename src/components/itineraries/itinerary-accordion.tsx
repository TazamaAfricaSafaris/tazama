/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Top-level imports in itinerary-accordion.tsx
"use client"

import React from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { FaChevronDown, FaWifi, FaSpa } from 'react-icons/fa6'
import { MdPool, MdLocalLaundryService, MdOutlineRestaurant } from 'react-icons/md'
import { IoFastFoodOutline } from "react-icons/io5";
import { GiElephant } from 'react-icons/gi'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Props interface
interface Props {
    id: number
    day: string;
    description?: string[]; // made optional to keep compatibility
    mealPlan?: string[];
    accomodation?: string;

    // New optional props to reach parity with the provided design
    note?: string;
    gallery?: { src: string; alt?: string }[];
    hotelDescription?: string;
    amenities?: string[]; // e.g. ["WiFi", "Swimming Pool", "Laundry service", "Wildlife area", "Spa", "Restaurant"]

    // NEW: portable text body for the description (preferred if present)
    descriptionPortable?: any[];
}

// Amenity chip icon mapping
const amenityIconMap: Record<string, React.ReactNode> = {
    "wifi": <FaWifi className="inline-block mr-1" />,
    "swimming pool": <MdPool className="inline-block mr-1" />,
    "laundry": <MdLocalLaundryService className="inline-block mr-1" />,
    "wildlife area": <GiElephant className="inline-block mr-1" />,
    "spa": <FaSpa className="inline-block mr-1" />,
    "restaurant": <MdOutlineRestaurant className="inline-block mr-1" />,
};

// Inside the ItineraryAccordion component (function body start)
const ItineraryAccordion: React.FunctionComponent<Props> = ({
    day,
    description,
    mealPlan,
    accomodation,
    id,
    note,
    gallery,
    hotelDescription,
    amenities,
    descriptionPortable, // NEW
}) => {
    const [toggle, setToggle] = React.useState(true);
    const [hotelOpen, setHotelOpen] = React.useState(false);

    // Sanity image URL builder (same as Post.tsx)
    const builder = imageUrlBuilder({ projectId, dataset });
    function urlFor(source: any) {
        return builder.image(source);
    }

    // Custom Portable Text components and preprocessor (same behavior as Post.tsx)
    const customComponents = {
        types: {
            imageGroup: ({ value }: { value: any }) => {
                return (
                    <div className="flex max-sm:flex-wrap gap-4 justify-center my-4 relative">
                        {value.images.map((image: any, index: number) => {
                            const { width, height } = getImageDimensions(image);
                            return (
                                <div
                                    key={index}
                                    className="w-full h-48 md:h-60 relative"
                                >
                                    <Image
                                        src={urlFor(image).width(width).height(height).url()}
                                        alt={image.alt ?? "Image"}
                                        fill
                                        className="rounded-xl w-full h-full object-cover"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            },
        },
    };

    const preprocessContent = (content: any[]) => {
        const grouped: any[] = [];
        let imageGroup: any[] = [];

        content.forEach((block) => {
            if (block?._type === "image") {
                imageGroup.push(block);
            } else {
                if (imageGroup.length > 0) {
                    grouped.push({ _type: "imageGroup", images: imageGroup });
                    imageGroup = [];
                }
                grouped.push(block);
            }
        });

        if (imageGroup.length > 0) {
            grouped.push({ _type: "imageGroup", images: imageGroup });
        }

        return grouped;
    };

    const processedDescription = Array.isArray(descriptionPortable)
        ? preprocessContent(descriptionPortable)
        : null;

    // Normalize amenity labels for icon mapping
    const renderAmenityChip = (label: string, idx: number) => {
        const key = label.trim().toLowerCase();
        const icon = amenityIconMap[key];
        return (
            <span
                key={`${label}-${idx}`}
                className="inline-flex items-center gap-1 rounded-full bg-lighter text-darker text-xs px-3 py-1 border border-dark/50 font-raleway"
                title={label}
            >
                {icon ? icon : null}
                {label}
            </span>
        );
    };

    return (
        <div className="relative">
            {/* Header (clickable) */}
            <div
                className="flex justify-between items-center rounded-3xl cursor-pointer pl-3 p-2"
                onClick={() => { setToggle(!toggle) }}
            >
                <div className="flex flex-row gap-4 items-center">
                    {/* Day badge with small DAY label */}
                    <div className="relative">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">
                            <span className="text-lg">{id}</span>
                        </div>
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[0.6rem] leading-none bg-primary text-white rounded px-1 py-1 font-raleway">
                            Day
                        </span>
                    </div>
                    <h6 className="line-clamp-1 text-lg md:text-3xl p-2">{day}</h6>
                </div>
            </div>

            <AnimatePresence>
                {
                    toggle && (
                        <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                        >
                            {/* Timeline rail */}
                            <div className="relative pl-6 md:pl-10">
                                <div className="max-md:hidden absolute left-9 top-4 bottom-0 border-l-2 border-dashed border-primary" />
                                <div className="ml-2 md:ml-4 py-4 flex flex-col gap-5">

                                    {/* Description paragraphs */}
                                    {(processedDescription ?? (Array.isArray(description) && description.length > 0)) && (
                                        <div className="flex flex-col gap-3 text-neutral-800">
                                            {processedDescription ? (
                                                <PortableText value={processedDescription} components={customComponents} />
                                            ) : (
                                                description?.map((item, index) => <p key={index}>{item}</p>)
                                            )}
                                        </div>
                                    )}

                                    {/* Note */}
                                    {note && (
                                        <div className='border-amber-200 bg-amber-50 p-3 rounded-lg border'>
                                            <div className="flex items-start gap-2 mb-2">
                                                <BsHouseFill className="text-amber-600" />
                                                <p className="text-sm text-amber-800 font-semibold">Note</p>
                                            </div>
                                            <p className='text-sm text-amber-800'>{note}</p>
                                        </div>
                                    )}

                                    {/* Accommodation */}
                                    {accomodation && (
                                        <div className="flex flex-col gap-2">
                                            <p className="italic text-neutral-600">Accommodation</p>
                                            <p className="font-extrabold uppercase">{accomodation}</p>
                                        </div>
                                    )}

                                    {/* Gallery */}
                                    {Array.isArray(gallery) && gallery.length > 0 && (
                                        <div className="grid grid-cols-2 gap-3">
                                            {gallery.slice(0, 6).map((g, idx) => (
                                                <div key={idx} className="relative w-full h-40 md:h-48">
                                                    <Image
                                                        src={g.src}
                                                        alt={g.alt ?? accomodation ?? `Gallery ${idx + 1}`}
                                                        fill
                                                        className="rounded-xl object-cover"
                                                        sizes="(max-width: 768px) 100vw, 600px"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Meal Plan */}
                                    {Array.isArray(mealPlan) && mealPlan.length > 0 && (
                                        <div className="flex items-center gap-2">
                                            <IoFastFoodOutline size={22} className="text-neutral-700" />
                                            <div className="flex gap-1 items-center flex-wrap">
                                                <p className="italic text-neutral-600 mr-1">Meal Plan:</p>
                                                {mealPlan.map((food, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-lighter text-darker text-xs py-1 px-2 rounded-full border border-dark/50 font-raleway"
                                                    >
                                                        {food}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Hotel's Description dropdown */}
                                    {hotelDescription && (
                                        <div className="border border-dark/50 rounded-xl">
                                            <button
                                                onClick={() => setHotelOpen(v => !v)}
                                                className="w-full text-left px-4 py-2 text-sm flex items-center justify-between"
                                            >
                                                <span>Hotel&apos;s Description</span>
                                                <span className={`transition-transform ${hotelOpen ? 'rotate-180' : ''}`}>
                                                    <FaChevronDown size={14} className='text-dark/50' />
                                                </span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {hotelOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        className="px-4 pb-3 text-sm text-neutral-700 font-raleway"
                                                    >
                                                        {hotelDescription}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}

                                    {/* Amenities */}
                                    {Array.isArray(amenities) && amenities.length > 0 && (
                                        <div className="mb-2">
                                            <p className="italic text-neutral-600">Amenities:</p>
                                            <div className="flex flex-wrap gap-1 text-raleway">
                                                {amenities.map((a, i) => renderAmenityChip(a, i))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div >
    )
}

export default ItineraryAccordion


import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { getImageDimensions } from "@sanity/asset-utils"
import { dataset, projectId } from "../../sanity/env"