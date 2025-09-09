/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { aboutPageContentData } from "~/data/about-data";
import ContentSection, {
  type contentSectionData,
} from "~/components/ContentSection";
import { array } from "fast-web-kit";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import Link from "next/link";
import { HomeContactUs } from "~/components/HomeContactUs";

const AboutPage = () => {
  return (
    <>
      <PrimaryHeader
        image="about.webp"
        title="About Tazama"
      />
      <HeadSEO
        title="About Tazama Africa Safari | Luxury Safari Experiences in Tanzania"
        keywords={`${base_keywords}, Tanzania safari company, luxury safari, Kilimanjaro trekking, safari experts, sustainable tourism, Tanzania travel, African safari experience, safari guides, wildlife adventures, eco-friendly safaris`}
        description="Discover Tazama Africa Safari - Tanzania's premier safari company with over 15 years of expertise in crafting luxury, personalized wildlife adventures and Kilimanjaro treks. Our exceptional guides and sustainable practices ensure unforgettable African experiences."
      />
      <div className="mx-auto mt-20 max-w-5xl px-4 pt-[2rem]">
        <div>
          <h3 className="text-5xl text-[#A87133]">Design Your Dream Safari Experience</h3>
          <p className="mb-3 mt-5 ">
            TAZAMA specializes in curating unforgettable memories that will have
            you reminiscing with your loved ones for years to come. Boasting
            over 15 years of expertise in the safari industry, we've mastered
            the art of crafting seamless journeys.
          </p>

          <p className="mb-3 mt-5 ">
            Our exceptional guides and dedicated staff are seasoned experts,
            ensuring every aspect of your trip is flawlessly executed. Because
            every trip is as unique as you, a journey with us brings you up
            close to these extraordinary ecosystems at your desired pace. We
            forge partnerships with suppliers who echo our commitment to
            environmentally sustainable practices and prioritize local, organic,
            and women-owned businesses whenever possible.
          </p>

          <p className="mb-3 mt-5 ">
            Whether you're conquering the slopes of Kilimanjaro or exploring the
            vast Serengeti plains, we pledge an experience that is genuine,
            thrilling, and awe-inspiring! Join us as we eagerly unveil the
            beauty of our home to you.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <Image
              src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1728461374/about/IMG_0561_ykqjjm.jpg"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <Image
              src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1728461701/about/classic-safaris_whilv4.webp"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 ">
            At Tazama, we don't just offer safaris; we deliver bespoke
            adventures tailored to the dreams of each traveler. With over 15
            years of experience under our belt, we have perfected the recipe for
            luxury and personalized experiences that resonate with the soul of
            Africa. Our journeys are more than travel; they're a passage into
            the heart of wilderness luxury.
            <br />
            <br />
            From the moment you step into Tanzania's vibrant landscapes, our
            exceptional guides—true connoisseurs of the wild—will lead you
            through an intimate dance with nature. Our staff, meticulous in
            their craft, attend to every detail, ensuring your adventure unfolds
            with the precision of a leopard's pounce. Personalization is not
            just a word to us; it's a promise. Your aspirations shape our
            itineraries, and your pace becomes the rhythm of your exploration.
            The whispers of the Serengeti, the challenges of Kilimanjaro, and
            the serenity of the Ngorongoro Crater await your presence.
            <br />
            <br />
            In harmony with our luxurious ethos, we choose partners who share
            our vision of sustainability and community. By embracing local,
            organic, and women-owned businesses, we ensure that your journey
            with Tazama enriches not just your memories but also the lands and
            lives you touch.
            <br />
            <br />
            Join us for an authentic, thrilling, and awe-inspiring voyage into
            the beauty of our homeland. Tazama is more than a safari company—we
            are your gateway to a Tanzania you've never imagined, where luxury
            meets the untamed, and every moment is a story waiting to be told.
          </p>
          <h3 className="pt-[12px] text-3xl text-[#A87133]">
            Partnering with SafariBookings.com
          </h3>
          <p className="mb-3 mt-1 ">
            Tazama Africa is represented on SafariBookings.com.
            <br />
            For reviews and
            and feedback you can visit{" "}
            <Link
              className="cursor-pointer text-primary"
              target="_blank"
              href="https://www.safaribookings.com"
            >
              www.safaribookings.com
            </Link>
          </p>
        </div>
      </div>
      <br />
      <br />
      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <br />
      <br />
      <div className="flex flex-col gap-12 lg:mt-0">
        {array
          .sort(aboutPageContentData, "asc", "rank")
          .map((content: contentSectionData, index: number) => (
            <section key={index}>
              <ContentSection
                rank={content.rank}
                title={content.title}
                image={content.image}
                action={content.action}
                reverse={content.reverse}
                actionTitle={content.actionTitle}
                description={content.description}
              />
            </section>
          ))}
      </div>

      {/* <div className="max-w-6xl mx-auto lg:text-center my-24 px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non aspernatur, dicta aliquid exercitationem voluptatum? Quos nulla pariatur consequuntur sapiente id ullam quisquam, laboriosam non harum! Aliquam autem dolor ratione.
        </p>
      </div> */}

      <br />
      <br />
      <HomeContactUs />
    </>
  );
};

export default AboutPage;
