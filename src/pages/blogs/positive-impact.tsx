import React, { useEffect } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { setPageTitle } from "~/helpers";
import Image from "next/legacy/image";

const ItenaryPage = () => {
  useEffect(() => {
    setPageTitle("Positive Impact");
  }, []);

  return (
    <>
      <PrimaryHeader image={`zanzibar.jpg`} title="Our Positive Impact" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            After sunset – the magic of twilight in the bush
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <Image
                src="/assets/images/gallery/honey-moon-trip.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <Image
                src="/assets/images/gallery/classic-safaris.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>
          </div>
        </div>

        <div className="py-8">
          <h3 className="text-4xl text-[#A87133]">Sundowners in nature</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full ">
              <Image
                src="/assets/images/gallery/about.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>
          </div>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>
        </div>

        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            After sunset – the magic of twilight in the bush
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full ">
              <Image
                src="/assets/images/gallery/honey-moon-trip.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/assets/images/gallery/classic-safaris.webp"
                className="object-cover"
                layout="fill"
                alt="cover-img"
              />
            </div>
          </div>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            There’s something about the end of the day, as the sun starts to
            dip, when a magical atmosphere descends over the bush. The light
            softens to a golden glow, scents and sounds seem to amplify and the
            landscape comes to life.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            In addition to the gentle mood of this time of day, it is often also
            the best time to observe wildlife in all its forms. As the heat
            dissipates, many birds and animals (large and small) who have
            sheltered out of sight, gradually emerge – to drink, graze or hunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItenaryPage;
