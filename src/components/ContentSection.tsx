"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "lib/gsap";
import { useGSAP } from "@gsap/react"

export type contentSectionData = {
  rank: number;
  image: string;
  title: string;
  action?: string;
  reverse: boolean;
  description: string | string[];
  actionTitle?: string;
};

const ContentSection = (props: contentSectionData) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const renderDescription = (description: string | string[]) => {
    if (typeof description === "string") {
      return description.split("\n").map((line, index) => (
        <p key={index} className="mb-4">{line}</p>
      ));
    } else if (Array.isArray(description)) {
      return description.map((line, index) => (
        <p key={index} className="mb-4">{line}</p>
      ));
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
      ease: "power1.inOut",
    });

    tl.from(imageRef.current, {
      y: 150,
      opacity: 0,
    });

    tl.fromTo(textRef.current, {
      y: -100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
    });

  }, [containerRef, imageRef, textRef])

  return (
    <>
      <div
        className={`flex flex-col ${props.reverse ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:items-start lg:mt-0 mt-10`}
        ref={containerRef}
      >
        <div
          ref={textRef}
          className="w-full px-8 md:px-10 lg:py-20 lg:px-32"
        >
          <h3
            className="text-5xl mb-4 font-light font-serif capitalize text-primary">
            {props.title}
          </h3>
          {renderDescription(props.description)}
          {
            props.action && (
              <>
                <Link href={props.action} className="border border-primary rounded-md px-4 lg:px-6 py-2 mt-4 md:text-lg text-xl font-raleway text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                  {props.actionTitle}
                </Link>
                <br />
                <br />
              </>
            )
          }
        </div>
        <div
          className={`w-full scroll-up h-72 md:h-96 lg:h-[95vh] xl:h-[85vh] overflow-hidden`}
        >
          <img
            ref={imageRef}
            src={`${props.image}`}
            alt=""
            className={`w-full h-full object-cover ${props.reverse ? "ml-8 md:ml-16b lg:ml-0" : "-ml-8 md:-ml-16b lg:ml-0"}`}
          />
        </div>
      </div>
    </>
  );
};

export default ContentSection;