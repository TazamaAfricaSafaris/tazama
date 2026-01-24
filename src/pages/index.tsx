/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-unescaped-entities */
import { HomeContactUs } from "~/components/HomeContactUs";
import SafariCarousel from "~/components/safari-carousel";
import PrimaryHeader from "~/components/PrimaryHeader";

import { getClient } from "~/sanity/lib/client";
import { token } from "~/sanity/lib/token";
import { POSTS_QUERY } from "~/sanity/lib/queries";
import BlogPosts from "~/components/BlogPosts";

import ContentSection, {
  type contentSectionData,
} from "~/components/ContentSection";
import { array } from "fast-web-kit";
import HeadSEO from "~/components/ui/Head";
import Link from "next/link";
import Image from "next/image";
import PartnersMarquee from "~/components/PartnersMarquee";
import HomeTrekkingCarousel from "~/components/HomeTrekkingCarousel";
import { SanityDocument } from "next-sanity";
import Carousel, { CarouselPrevious, CarouselContent, CarouselItem, CarouselNext } from "~/components/Carousel";

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

type PageProps = {
  posts: SanityDocument[];
  draftMode: boolean;
  token: string;
};

export default function Page(props: PageProps) {

  const slicedPosts = props.posts.slice(0, 6)

  return (
    <>
      <HeadSEO
        title="Tazama Africa Safaris - East Africa Safaris"
        keywords="African safaris, luxuruy safaris, personalized safaris, Serengeti, Kilimanjaro, memorable safaris"
        description="Tazama Africa Safaris is a leading provider of authentic and timeless African safaris. We offer personalized safaris, connecting you with the best of Africa. Whether you're a seasoned explorer or a first-timer, we have the perfect safari for you. Book your trip today!"
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
              slicedPosts.map((post, index) => (
                <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/3 mb-2 lg:mr-6 xl:mr-0">
                  <Link
                    key={post._id}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    href={`/blogs/${post.slug.current}`}
                    className="group p-0 mt-4"
                  >
                    <div className="w-full h-64 relative overflow-hidden p-0">
                      <Image
                        fill
                        objectFit="cover"
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="group-hover:scale-105 transition-transform object-cover w-full h-full"
                      />
                      <div className="absolute z-10 bottom-2 left-2 flex gap-1">
                        {post.categories.map((category: any, index: number) => (
                          <p
                            key={index}
                            className="bg-amber-50/80 border border-darker px-2 text-sm line-clamp-2 rounded-3xl"
                          >
                            {category.title}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 h-36 flex flex-col justify-between gap-3">
                      <h4 className="text-3xl line-clamp-2 text-dark">{post.title}</h4>
                      <p>By {post.author.name}</p>
                    </div>
                    {/* <div className="border border-darker w-1/3 mx-auto mt-2 group-hover:w-3/4 transition-all"></div> */}
                  </Link>
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

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return {
    props: {
      posts,
      draftMode,
      token: draftMode ? token : "",
    },
  };
};