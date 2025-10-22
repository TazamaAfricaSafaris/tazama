/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FaCheck, FaWhatsapp, FaXmark } from "react-icons/fa6";
import CallToAction from "~/components/CallToAction";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import type { QueryParams, SanityDocument } from "next-sanity";
import type { GetStaticPaths } from "next";
import ItineraryAccordion from "~/components/itineraries/itinerary-accordion";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import { getClient } from "../../../sanity/lib/client";
import { token } from "../../../sanity/lib/token";
import { itineraryQueries } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import KilimanjaroItinerariesCallToAction from "~/components/kilimanjaro/itineraries-cta";
import ReasonsCallToActionKilimanjaro from "~/components/kilimanjaro/reasons-cta";
import { PiMountainsFill } from "react-icons/pi";
import { IoPawSharp } from "react-icons/io5";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "~/components/ui/dialog";

import Link from "next/link";

type PageProps = {
    itinerary: SanityDocument;
    params: QueryParams;
    draftMode: boolean;
    token: string;
};

// Helper: Convert Portable Text blocks to plain paragraphs (for Accordion)
function blocksToPlainParagraphs(blocks: any[] | undefined): string[] {
    if (!Array.isArray(blocks)) return [];
    return blocks
        .filter((b: any) => b?._type === "block")
        .map((b: any) => (Array.isArray(b.children) ? b.children.map((c: any) => c.text).join("") : ""));
}

// Optional: same image grouping as in blog Post.tsx
const customComponents = {
    types: {
        imageGroup: ({ value }: { value: any }) => {
            return (
                <div className="flex max-sm:flex-wrap gap-4 justify-center my-6 relative pb-6">
                    {value.images.map((image: any, index: number) => {
                        const { width, height } = getImageDimensions(image);
                        return (
                            <div key={index} className="w-full h-56 md:h-72 relative">
                                <Image
                                    src={urlFor(image).width(width).height(height).url()}
                                    alt={image?.alt ?? "Image"}
                                    fill
                                    className="rounded-lg w-full h-full object-cover"
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

function preprocessContent(content: any[]) {
    const grouped: any[] = [];
    let imageGroup: any[] = [];

    content?.forEach((block) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (block._type === "image") {
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
}

export default function Page(props: PageProps) {
    const itinerary = props.itinerary;

    if (!itinerary) {
        return <p className="mx-auto text-center mt-24">Loading...</p>;
    }

    const title: string = itinerary.itineraryName || "Itinerary";
    const subHeading: string | undefined = itinerary.subHeading;
    const zohoFormLink: string | undefined = itinerary.zohoFormLink;
    const coverImg = itinerary.coverImg;
    const description = itinerary.description;
    const itineraryDetails = itinerary.itineraryDetails || [];
    const includes: string[] = itinerary.includes || [];
    const excludes: string[] = itinerary.excludes || [];
    const itineraryType: string | undefined = itinerary.itineraryType;
    const location = itinerary.locationAndDuration?.location as string | undefined;
    const duration = itinerary.locationAndDuration?.duration as string | undefined;
    const price: string | undefined = itinerary.price as string | undefined;

    // PAX Table
    const paxTable = itinerary.paxTable;
    const paxRows = paxTable?.rows || [];

    const heroUrl = coverImg ? urlFor(coverImg).quality(80).url() : undefined;
    const processedDescription = Array.isArray(description) ? preprocessContent(description) : [];

    return (
        <>
            <HeadSEO
                title={title}
                keywords={base_keywords}
                description={subHeading || title}
            />

            {/* Dynamic hero header */}
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
                    {heroUrl ? (
                        <Image
                            fill
                            src={heroUrl}
                            className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                            alt={coverImg?.alt || title}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        />
                    ) : null}
                    <div className="container">
                        <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-5xl sm:px-12 lg:w-2/3 xl:text-6xl">
                            {title}
                        </h1>
                        {subHeading ? (
                            <h3 className="font-raleway absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-sm md:text-lg tracking-wide text-white">
                                {subHeading}
                            </h3>
                        ) : null}
                    </div>
                </div>
            </div>


            {/* Overview / Description */}
            <section className="mb-12 max-w-4xl mx-auto p-4 md:p-0">
                <div className="max-w-4xl mx-auto my-12">
                    <div className="border border-neutral-200 p-4 rounded-xl flex max-md:flex-col justify-between gap-4">
                        <div className="px-2 space-y-2 ">
                            <div>
                                <p className="text-xs text-neutral-500 max-md:text-center">
                                    Price starting from
                                </p>
                                <p className="text-neutral-700 font-bold text-xl max-md:text-center">${price?.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 max-md:flex-col">
                            <Link
                                href="https://wa.me/+255754922334"
                                target="_blank"
                                className="py-2 px-4 bg-green-600 w-fit rounded-xl flex items-center justify-center hover:bg-green-700 duration-200 transition-colors max-md:w-full"
                            >
                                <div className="flex items-center gap-2 text-white">
                                    <FaWhatsapp className="text-white" size={24} />
                                    <span className="">Chat with us on WhatsApp</span>
                                </div>
                            </Link>

                            {zohoFormLink && (
                                <ZohoFormButton link={zohoFormLink} title={title} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="">
                    <h3 className="mb-4 text-center text-5xl text-primary">
                        {title}
                    </h3>
                    {processedDescription?.length ? (
                        <div className="prose max-w-4xl text-black">
                            <PortableText value={processedDescription as any} components={customComponents as any} />
                        </div>
                    ) : null}
                </div>
            </section>

            {/* {
                itineraryType === "trekking" && (
                    <div className="max-w-4xl mx-auto">
                        <KilimanjaroItinerariesCallToAction />
                        <br /><br />
                    </div>
                )
            } */}

            {/* Trip itinerary + Side Price Card */}
            <section className="mx-auto max-w-4xl mb-20 px-4">
                <div className="flex flex-col relative">
                    <h4 className="mb-4 text-4xl text-primary">Detailed itinerary for {title}</h4>
                    <div className="flex flex-col gap-2">
                        {itineraryDetails.map((detail: any, idx: number) => (
                            <ItineraryAccordion
                                key={idx}
                                id={idx + 1}
                                day={detail?.day || `Day ${idx + 1}`}
                                totalDays={itineraryDetails.length}
                                descriptionPortable={detail?.description}
                                mealPlan={detail?.mealPlan}
                                accomodation={detail?.accommodation}
                                note={detail?.note}
                                tripType={`${itineraryType}`}
                                highlights={detail?.highlights}  // Use detail.highlights instead of global highlights
                                transferTime={detail?.transferTime}  // Add this line
                                distance={detail?.distance}  // Add this line
                                gallery={
                                    Array.isArray(detail?.accommodationGallery)
                                        ? detail.accommodationGallery.map((img: any) => ({
                                            src: urlFor(img).width(800).height(600).url(),
                                            alt: img?.alt,
                                            blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                                        }))
                                        : undefined
                                }
                                hotelDescription={detail?.hotelDescription}
                                amenities={detail?.amenities}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* PAX Table (if present) */}
            <div className="max-md:p-4">
                {paxRows.length > 0 && (
                    <section className="mx-auto max-w-4xl mb-20 border rounded-xl border-neutral-200">
                        <div className="px-4 py-3 md:py-6 md:px-8 flex max-md:flex-col gap-4 md:items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className={`${itineraryType === "trekking" ? "bg-teal-500" : "bg-lime-500"} w-10 h-10 flex items-center justify-center rounded-full`}>
                                    {
                                        itineraryType === "trekking" ?
                                            <PiMountainsFill className="text-white text-xl" /> :
                                            <IoPawSharp className="text-white text-xl" />
                                    }
                                </div>
                                <div>
                                    <p className="text-xl text-neutral-700 font-bold">{title}</p>
                                    <p className="text-neutral-700 text-sm">Price per person</p>
                                </div>
                            </div>

                            {zohoFormLink && (
                                <ZohoFormButton link={zohoFormLink} title={title} />
                            )}
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-separate border-spacing-0">
                                <thead>
                                    <tr className="border-b">
                                        {paxRows.map((row: any, idx: number) => (
                                            <th
                                                key={idx}
                                                className="px-6 py-2 text-center font-normal text-neutral-700 text-sm whitespace-nowrap border-b border-neutral-200 bg-neutral-100"
                                            >
                                                <p className="text-sm font-bold">
                                                    {row.paxLabel}
                                                </p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {paxRows.map((row: any, idx: number) => (
                                            <td
                                                key={idx}
                                                className="px-6 py-2 text-center  text-neutral-700 text-base whitespace-nowrap"
                                            >
                                                <p>
                                                    {row.price}
                                                </p>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {
                    itineraryType === "trekking" && (
                        <div className="max-w-4xl mx-auto">
                            <ReasonsCallToActionKilimanjaro />
                            <br /><br />
                        </div>
                    )
                }
            </div>

            {/* Includes / Excludes */}
            <section className="max-w-4xl mx-auto px-4 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <FaCheck color="#fff" />
                        </div>
                        <h5 className="text-3xl">Cost Includes</h5>
                    </div>
                    <ul className="list-inside list-disc flex flex-col gap-3">
                        {includes.map((item: string) => (
                            <li key={item} className="ml-4 list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <FaXmark color="#fff" />
                        </div>
                        <h5 className="text-3xl">Cost Excludes</h5>
                    </div>
                    <ul className="list-inside list-disc flex flex-col gap-3">
                        {excludes.map((item: string) => (
                            <li key={item} className="ml-4 list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CallToAction />
        </>
    );
}

export const getStaticProps = async ({ params = {}, draftMode = false }) => {
    const client = getClient(draftMode ? token : undefined);
    const itinerary = await client.fetch<SanityDocument>(itineraryQueries.bySlug, params);

    return {
        props: {
            itinerary,
            params,
            draftMode,
            token: draftMode ? token : "",
        },
    };
};

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getClient().fetch(
        `*[_type == "itinerary" && defined(slug.current)][]{
            "params": { "slug": slug.current }
        }`
    );

    return { paths, fallback: 'blocking' };
};

const ZohoFormButton = ({ link, title }: { link: string, title: string }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-dark transition-colors max-md:w-full">
                    Book this trip
                </button>
            </DialogTrigger>
            <DialogContent className="h-[75.5%] flex flex-col justify-center items-center overflow-hidden pt-4">
                <iframe
                    width="720"
                    height="720"
                    src={link}
                    title={`Book ${title}`}
                    aria-label={`Book ${title}`}
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full z-0 rounded-2xl"
                ></iframe>
            </DialogContent>
        </Dialog>
    )
}