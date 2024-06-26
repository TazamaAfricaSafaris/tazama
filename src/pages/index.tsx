/* eslint-disable react/no-unescaped-entities */
import { HomeContactUs } from "~/components/HomeContactUs";
import SafariCarousel from "~/components/safari-carousel";
import PrimaryHeader from "~/components/PrimaryHeader";

import ContentSection, {
  contentSectionData,
} from "~/components/ContentSection";
import Image from "next/legacy/image";
import { array } from "fast-web-kit";
import HeadSEO from "~/components/ui/Head";
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/Carousel";
import { allBlogs } from "~/blogs/all-blogs";
import Link from "next/link";

export const homePageContentData: contentSectionData[] = [
  {
    rank: 1,
    reverse: true,
    action: "/about",
    image: "lioness.webp",
    actionTitle: "Our Story",
    title: "Why Travel with Tazama",
    description: `Our outstanding guides and staff are experts who ensure your trip is seamless from start to finish. We offer authentic safaris, giving you up an up-close glimpse of these incredible ecosystems at the pace you'd prefer.\n
        We partner with outfitters that share our passion of environmentally sustainable business practices and commit to buying local, organic and women-owned where possible.\n
        Whether it's on the slopes of Kilimanjaro or the plains of the Serengeti, we promise to deliver an experience that is authentic, adventurous, and awe-inspiring! We can't wait to share our home with you.`,
  },
  {
    rank: 2,
    reverse: false,
    image: "maasai.webp",
    title: "Locally Owned & Operated",
    description:
      "When you travel with us, we'll be with you every step of the way. From the minute you touch down on the runway our talented, dedicated, and passionate staff are there to make sure you have the trip of a lifetime. We can't wait to share our home with you.",
  },
];

export default function Page() {
  return (
    <>
      <HeadSEO
        title="Tazama Africa Safaris - East Africa Safaris"
        keywords="African safaris, luxuruy safaris, personalized safaris, Serengeti, Kilimanjaro, memorable safaris"
      />
      <PrimaryHeader
        image="home.webp"
        title="Your Next Adventure Awaits"
        subTitle="connect, celebrate & create memories"
      />

      <div className="my-20 flex flex-col gap-y-8 lg:gap-y-14">
        {array
          .sort(homePageContentData, "asc", "rank")
          .map((content: contentSectionData, index: number) => (
            <section className="" key={index}>
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
      <br />
      <br />
      <br />
      <div className="mx-auto max-w-6xl px-4 xl:px-8 ">
        <div className="mb-8 w-full px-4 py-4">
          <h3
            className="mb-4 text-4xl lg:text-5xl"
          >
            Authentic & timeless adventures
          </h3>
          <p
            className="font-raleway text-lg"
          >
            Start exploring some of sample itineraries and see where an
            adventure with Tazama Africa can take you.
          </p>
        </div>
        <section className="flex flex-col items-center justify-center">
          <SafariCarousel />
        </section>
      </div>
      <br />
      <br />
      <br />
      <div className="px-4 xl:px-8 my-20 bg-[#e2dacd] py-10 lg:py-20 bg-fixed">
        <div className="mx-auto max-w-6xl px-4 xl:px-8">
          <div className="mb-8 w-full px-4 py-4 ">
            <h3
              className="mb-4 text-4xl lg:text-5xl text-dark"
            >
              Ascending Africa's Summits
            </h3>
            <p
              className="font-raleway text-lg text-text-darker"
            >
              Explore the summits of Africa with Tazama Africa Safaris as you climb the mountains Kilimanajaro and Meru to fulfill your desire to know what it's like to be at the top
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 max-w-6xl px-4 mx-auto">
            <Link href={'/safaris/kilimanjaro'} className="w-full border border-white overflow-hidden rounded-md h-72 relative group">
              <Image src={"/assets/images/gallery/mount-kilimanjaro.webp"} layout="fill" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-105" alt="Travel to Mount Kilimanjaro" />
              <p className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-orange-950/35 to-transparent text-white p-4 text-xl">Mount Kilimanjaro</p>
            </Link>

            <Link href={'/safaris/mount-meru'} className="w-full border border-white overflow-hidden rounded-md h-72 relative group">
              <Image src={"/assets/images/gallery/mount-meru.webp"} layout="fill" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-105" alt="Travel to Mount Kilimanjaro" />
              <p className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-orange-950/35 to-transparent text-white p-4 text-xl">Mount Meru </p>
            </Link>
          </div>
        </div>
      </div>
      <HomeContactUs />
    </>
  );
}