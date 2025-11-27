/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import Link from "next/link";
import { HomeContactUs } from "~/components/HomeContactUs";
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/Carousel";
import ReasonsCallToActionKilimanjaro from "~/components/kilimanjaro/reasons-cta";

const trekExperiences = [
    {
        image: "https://images.unsplash.com/photo-1464908394256-327852e6539a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Kilimanjaro Trekking",
        description: "Climbing Mount Kilimanjaro is one of the world’s greatest trekking achievements.",
        link: "/kilimanjaro"
    },
    {
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1708504712/chimp_trekking/iscrqp7sdqdetsykfkts.jpg",
        title: "Gorilla Trekking",
        description: "Step into the misty jungles of Uganda or Rwanda for a once-in-a-lifetime encounter with endangered mountain gorillas.",
        link: "/east-africa/uganda"
    },
    {
        image: "/assets/images/gallery/mount-meru.webp",
        title: "Meru Trekking",
        description: "Mount Meru, located in Arusha National Park, is a beautiful and less crowded alternative to Kilimanjaro.",
        link: "/mount-meru"
    },
    {
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1763712822/01TNHC-IM0001-ngorongoro-highlands-camp_dlq3v5.jpg",
        title: "Ngorongoro Highlands Trekking",
        description: "The Ngorongoro Highlands offer one of the most unique trekking experiences in East Africa.",
        link: "/kilimanjaro"
    },
]

const TrekkingPage = () => {
    return (
        <>
            <HeadSEO
                title="Tazama Africa Safaris | Trekking"
                keywords={`${base_keywords}, Tanzania safari company, luxury safari, Kilimanjaro trekking, safari experts, sustainable tourism, Tanzania travel, African safari experience, safari guides, wildlife adventures, eco-friendly safaris`}
                description="Discover Tazama Africa Safaris - Tanzania's premier trekking company with over 15 years of expertise in crafting luxury, personalized trekking adventures. Our exceptional guides and sustainable practices ensure unforgettable African experiences."
            />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/50 text-white">
                    <Image
                        layout="fill"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1763709981/kilimanjaro/daniel-vargas-ZYtdVrR4WNI-unsplash_mbodby.jpg"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover"
                        alt="A view in the mountains"
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                    />
                    <div className="container">
                        <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-5xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Trekking
                        </h1>
                    </div>
                </div>
            </div>

            <section className="mx-auto mt-24 max-w-5xl px-4 lg:px-8">
                <div>
                    <h3 className="text-5xl text-primary text-center">Our Trekking Experiences</h3>
                    <br />
                    <p>
                        Discover Africa’s most breathtaking landscapes with our expertly guided trekking adventures. From the iconic slopes of Mount Kilimanjaro to the lush forests of Uganda and Rwanda, each journey is crafted to immerse you in nature, culture, and unforgettable moments. Whether you’re an experienced climber or a first-time trekker, we offer safe, well-organized, and memorable expeditions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-16">
                    {
                        trekExperiences.map((experience, index) => (
                            <Link
                                key={index}
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                                href={`/blogs/${experience.link}`}
                                className="w-full h-96 flex items-end justify-end relative overflow-hidden rounded-2xl group"
                            >
                                <div className="p-8 flex flex-col justify-between gap-3 z-10">
                                    <h4 className="text-5xl line-clamp-2 text-white">{experience.title}</h4>
                                    <p className="text-white line-clamp-2">{experience.description}</p>
                                </div>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src={experience.image}
                                    alt={experience.title}
                                    className="group-hover:scale-105 transition-transform object-cover w-full h-full brightness-[0.65]"
                                />
                            </Link>
                        ))
                    }
                </div>

                <div className="mt-24">
                    <ReasonsCallToActionKilimanjaro />
                </div>
            </section >
            <br />
            <HomeContactUs />
        </>
    );
};

export default TrekkingPage;
