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
import PartnersMarquee from "~/components/PartnersMarquee";
import { Blog } from "./blogs";
import HomeTrekkingCarousel from "~/components/HomeTrekkingCarousel";

export const homePageContentData: contentSectionData[] = [
  {
    rank: 1,
    reverse: true,
    action: "/about",
    image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1720014575/home/lioness_o9ed35.webp",
    actionTitle: "Our Story",
    title: "Why Travel with Tazama",
    description: `Our outstanding guides and staff are experts who ensure your trip is seamless from start to finish. We offer authentic safaris, giving you up an up-close glimpse of these incredible ecosystems at the pace you'd prefer. We partner with outfitters that share our passion of environmentally sustainable business practices and commit to buying local, organic and women-owned where possible. Whether it's on the slopes of Kilimanjaro or the plains of the Serengeti, we promise to deliver an experience that is authentic, adventurous, and awe-inspiring! We can't wait to share our home with you.`,
  },
  {
    rank: 2,
    reverse: false,
    image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1720014575/home/maasai_umc8z9.webp",
    title: "Locally Owned & Operated",
    description:
      "When you travel with us, we'll be with you every step of the way. From the minute you touch down on the runway our talented, dedicated, and passionate staff are there to make sure you have the trip of a lifetime. We can't wait to share our home with you.",
  },
];

export default function Page() {
  const homeBlogPosts = allBlogs.slice(-6)

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
            className="mb-4 text-4xl lg:text-5xl text-primary"
          >
            Authentic & timeless adventures
          </h3>
          <p
            className="font-raleway"
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
      {/* <div className="px-4 xl:px-8 my-20 bg-[#ece6dc86] py-10 lg:py-20 bg-fixed">
        <div className="mx-auto max-w-6xl px-4 xl:px-8">
          <div className="mb-8 w-full px-4 py-4 ">
            <h3
              className="mb-4 text-4xl lg:text-5xl text-primary"
            >
              Ascending Africa's Summits
            </h3>
            <p
              className="font-raleway"
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
      </div> */}
        <HomeTrekkingCarousel />
      <br />
      <br />
      <div className="mb-16">
        <div className="mx-auto max-w-6xl px-4 xl:px-8 mb-2">
          <div className="mx-auto mb-8 w-full px-4 py-4">
            <h3
              className="mb-3 text-4xl lg:text-5xl text-primary"
            >
              Our Partners
            </h3>
            <p
              className="font-raleway"
            >
              We at Tazama Africa Safaris pride ourselves on collaborating with top-tier partners to ensure our guests receive the best experiences Africa has to offer.
            </p>
          </div>
        </div>
        <PartnersMarquee />
      </div>
      <br />
      <br />
      <br />
      <div className="mt-10 max-w-6xl mx-auto px-4 xl:px-8 mb-20">
        <div className="flex justify-between flex-col md:flex-row mx-auto items-center md:items-end mb-4">
          <div className="">
            <h3
              className="text-4xl lg:text-5xl mb-3 text-primary"
            >
              Latest From Tazama Africa
            </h3>
            <p className="max-w-2xl">Catch up to the latest posts we got for you, from packing lists, to tips on trekking.</p>
          </div>
          <br />
          <Link href="/blogs" className="text-primary underline underline-offset-2 font-raleway">See more posts from Tazama</Link>
        </div>
        <Carousel
          opts={{
            align: "start"
          }}
          className="w-full max-w-5xl mx-auto lg:max-w-none"
        >
          <CarouselPrevious />
          <CarouselContent>
            {
              homeBlogPosts.map((post, index) => (
                <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/3 mb-2 lg:mr-6 xl:mr-0">
                  <Blog name={post.name} link={post.url} imgUrl={post.imgUrl} shortDescription={post.shortDescription} category={post.category} />
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
      <br />
      <HomeContactUs />
    </>
  );
}