"use client"

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { FaChevronDown, FaWifi, FaSpa, FaPlane, FaClock, FaRoute } from 'react-icons/fa6'
import { MdPool, MdLocalLaundryService, MdOutlineRestaurant } from 'react-icons/md'
import { IoFastFoodOutline, IoPawSharp } from "react-icons/io5";
import { GiElephant, GiPalmTree } from 'react-icons/gi';
import { PiMountainsFill, PiTreePalmFill } from "react-icons/pi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { getImageDimensions } from "@sanity/asset-utils"
import { dataset, projectId } from "../../sanity/env"

// Props interface
interface Props {
    id: number
    day: string;
    description?: string[];
    mealPlan?: string[];
    accomodation?: string;
    totalDays?: number;
    note?: string;
    gallery?: { src: string; alt?: string }[];
    hotelDescription?: string;
    amenities?: string[];
    descriptionPortable?: any[];
    highlights?: string;
    transferTime?: string;
    distance?: string;
    tripType?: string;
}

// Amenity chip icon mapping
const amenityIconMap: Record<string, React.ReactNode> = {
    "wifi": <FaWifi className="inline-block mr-1" />,
    "swimming pool": <MdPool className="inline-block mr-1" />,
    "laundry service": <MdLocalLaundryService className="inline-block mr-1" />,
    "wildlife area": <GiElephant className="inline-block mr-1" />,
    "spa": <FaSpa className="inline-block mr-1" />,
    "restaurant": <MdOutlineRestaurant className="inline-block mr-1" />,
    // Add more food-related amenities
    "breakfast": <IoFastFoodOutline className="inline-block mr-1" />,
    "lunch": <IoFastFoodOutline className="inline-block mr-1" />,
    "dinner": <IoFastFoodOutline className="inline-block mr-1" />,
    "all meals": <MdOutlineRestaurant className="inline-block mr-1" />,
    "snacks": <IoFastFoodOutline className="inline-block mr-1" />,
    "drinks": <IoFastFoodOutline className="inline-block mr-1" />,
};

// Inside the ItineraryAccordion component (function body start)
const ItineraryAccordion: React.FunctionComponent<Props> = ({
    day,
    description,
    mealPlan,
    accomodation,
    id,
    totalDays = 10,
    note,
    gallery,
    hotelDescription,
    amenities,
    descriptionPortable,
    highlights,
    transferTime,
    distance,
    tripType,
}) => {
    const [toggle, setToggle] = React.useState(true);
    const [hotelOpen, setHotelOpen] = React.useState(false);

    // Sanity image URL builder
    const builder = imageUrlBuilder({ projectId, dataset });
    function urlFor(source: any) {
        return builder.image(source);
    }

    // Custom Portable Text components and preprocessor
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
                                    className="w-full h-60 md:h-96 relative"
                                >
                                    <Image
                                        src={urlFor(image).width(width).height(height).url()}
                                        alt={image.alt ?? "Image"}
                                        fill
                                        className="rounded-xl w-full h-full object-cover"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        placeholder="blur"
                                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
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

    // Updated getActivityIcon function
    const getActivityIcon = (title: string, dayNumber: number, totalDays: number) => {
        // First and last day get plane icons with blue background
        if (dayNumber === 1 || dayNumber === totalDays) {
            return <FaPlane className="text-white md:text-xl" />;
        } else if (tripType === 'trekking') {
            return <PiMountainsFill className='text-white md:text-xl' />
        } else if (tripType === 'beach-holidays') {
            return <PiTreePalmFill className='text-white md:text-xl' />
        }
        // All other days get paw icons
        return <IoPawSharp className="text-white md:text-xl" />;
    };

    return (
        <div className="relative">
            {/* Header (clickable) */}
            <div
                className="flex flex-row justify-between items-center rounded-3xl cursor-pointer md:pl-3 md:p-2 gap-2"
                onClick={() => { setToggle(!toggle) }}
            >
                <div className="flex flex-row gap-1 md:gap-4 items-center w-full">
                    {/* Day badge and icon */}
                    <div className="flex gap-2 items-center">
                        <div className="relative">
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">
                                <span className="max-md:mb-1.5 text-sm md:text-lg">{id}</span>
                            </div>
                            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[0.6rem] leading-none bg-primary text-white rounded px-1 py-1 font-raleway">
                                Day
                            </span>
                        </div>
                        <div
                            className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center shadow-md 
                                ${(id === 1 || id === totalDays) ? 'bg-cyan-500' : tripType === 'trekking' ? 'bg-sky-700' : tripType === 'beach-holidays' ? 'bg-emerald-500' : 'bg-orange-500'
                                }`}
                        >
                            {getActivityIcon(day, id, totalDays)}
                        </div>
                    </div>
                    <h6 className="line-clamp text-2xl md:text-3xl p-2 flex-1">{day}</h6>
                </div>
            </div>

            <AnimatePresence>
                {toggle && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                    >
                        {/* Timeline rail */}
                        <div className="relative pl-4 md:pl-10">
                            <div className="absolute left-5 md:left-9 top-4 bottom-0 border-l-2 border-dashed border-primary" />
                            <div className="ml-8 md:ml-4 py-4 flex flex-col gap-5">
                                {/* Description */}
                                {(processedDescription ?? (Array.isArray(description) && description.length > 0)) && (
                                    <div className="flex flex-col gap-3 text-neutral-800">
                                        {processedDescription ? (
                                            <PortableText value={processedDescription} components={customComponents} />
                                        ) : (
                                            description?.map((item, index) => <p key={index}>{item}</p>)
                                        )}
                                    </div>
                                )}

                                {/* Transfer Time and Distance */}
                                {(transferTime ?? distance) && (
                                    <div className="flex flex-wrap gap-3 mb-2 items-center border-y py-7">
                                        {transferTime && (
                                            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                                                <FaClock className="text-blue-600" size={16} />
                                                <div>
                                                    <p className="text-xs text-blue-600 font-medium">
                                                        {
                                                            id === 1 ? "Transfer time" :
                                                                tripType === "trekking" ? "Trek time" : "Transfer time"
                                                        }
                                                    </p>
                                                    <p className="text-sm text-blue-800 font-semibold">{transferTime}</p>
                                                </div>
                                            </div>
                                        )}
                                        {distance && (
                                            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                                <FaRoute className="text-green-600" size={16} />
                                                <div>
                                                    <p className="text-xs text-green-600 font-medium">Distance</p>
                                                    <p className="text-sm text-green-800 font-semibold">{distance}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Highlights */}
                                {highlights && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <p className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full border border-yellow-300 shadow-sm">
                                            <span className='font-bold max-md:text-xs'>⭐Highlights</span>: {highlights}
                                        </p>
                                    </div>
                                )}

                                {/* Note */}
                                {note && (
                                    <div className='border-amber-200 bg-amber-50 p-4 rounded-lg border'>
                                        <div className="flex items-start gap-2 mb-2">
                                            <BsHouseFill className="text-amber-600" />
                                            <p className="text-sm text-amber-800 font-semibold">Note</p>
                                        </div>
                                        <p className='text-sm text-amber-800'>
                                            {note}
                                        </p>
                                    </div>
                                )}

                                {/* Accommodation */}
                                {accomodation && (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className='h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-neutral-700'>
                                                <BsHouseFill className="text-white text-sm" />
                                            </div>
                                            <p className="italic text-neutral-600 text-sm">Accommodation</p>
                                        </div>
                                        <p className="font-extrabold uppercase">{accomodation}</p>
                                    </div>
                                )}

                                {/* Gallery */}
                                {Array.isArray(gallery) && gallery.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {gallery.slice(0, 6).map((g, idx) => (
                                            <div key={idx} className="relative w-full h-40 md:h-48">
                                                <Image
                                                    src={g.src}
                                                    alt={g.alt ?? accomodation ?? `Gallery ${idx + 1}`}
                                                    fill
                                                    className="rounded-xl object-cover"
                                                    sizes="(max-width: 768px) 100vw, 600px"
                                                    placeholder="blur"
                                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Meal Plan */}
                                {Array.isArray(mealPlan) && mealPlan.length > 0 && (
                                    <div className="flex flex-col sm:flex-row items-center gap-2">
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
                )}
            </AnimatePresence>
        </div>
    )
}

export default ItineraryAccordion