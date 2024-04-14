import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import Image from "next/legacy/image";
import { safaris } from "~/data/data";
import Link from "next/link";

function DestinationImage({
  imgSrc,
  caption,
  href
}: {
  imgSrc: string;
  caption: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className=" h-[300px] w-[300px] ">
        <Image
          src={imgSrc}
          alt="carousel Img"
          className="object-cover opacity-30 "
          layout="fill"
        />
        <p className="h-[300px] w-[300px] translate-y-[150px] text-center text-2xl text-white">
          {caption}
        </p>
      </div>
    </Link>
  );
}

export default function SafariCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm lg:max-w-none"
    >
      <CarouselPrevious />
      <CarouselContent>
        {safaris.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center bg-black p-6">
                  <DestinationImage
                    imgSrc={`/assets/images/gallery/${data.img}`}
                    caption={data.name}
                    href={data.href}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
}
