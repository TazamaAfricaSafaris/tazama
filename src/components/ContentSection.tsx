/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image"

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
  const renderDescription = (description: string | string[]) => {
    if (typeof description === "string") {
      return description.split('\n').map((line, index) => (
        <p key={index} className="mb-4">{line}</p>
      ));
    } else if (Array.isArray(description)) {
      return description.map((line, index) => (
        <p key={index} className="mb-4">{line}</p>
      ));
    }
  };

  return (
    <>
      <div className={`flex flex-col ${props.reverse ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:items-start lg:mt-0 mt-10`}>
        <div className="w-full px-10 md:px-20 lg:py-12 lg:px-32 sticky lg:top-1">
          <h3 className="text-5xl mb-4 font-light font-amiora capitalize">{props.title}</h3>
          {renderDescription(props.description)}
          {
            props.action && (
              <>
                <Link href={props.action} className="border border-primary rounded-md px-6 py-2 mt-4 text-xl font-raleway text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                  {props.actionTitle}
                </Link>
                <br />
                <br />
              </>
            )
          }
        </div>
        <div className={`w-full scroll-up h-72 md:h-96 lg:h-[95vh] xl:h-[85vh] overflow-hidden`}>
          <Image width={300} src={`/assets/images/gallery/${props.image}`} alt="" className={`w-full h-full object-cover ${props.reverse ? "ml-10 md:ml-20 lg:ml-0" : "-ml-10 md:-ml-20 lg:ml-0"}`} />
        </div>
      </div>
    </>
  );
};

export default ContentSection;