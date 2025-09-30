/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";
import useFetchImages from "~/hooks/useFetchImages";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { Kilimanjaro_keywords } from "~/lib/constants";
import Image from "next/image";

import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/Carousel";

import Link from "next/link";
import { kilimanjaroRoutes } from "~/data/kilimanjaro-routes";

import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { itineraryQueries, POSTS_QUERY } from "~/sanity/lib/queries";
import CallToAction from "~/components/CallToAction";
import { Tabs, Tab } from "~/components/Tabs";
import ReasonsCallToActionKilimanjaro from "~/components/kilimanjaro/reasons-cta";
import KilimanjaroItinerariesCallToAction from "~/components/kilimanjaro/itineraries-cta";

const Page = ({ images, posts }: { images: ImageProps[], posts: SanityDocument[] }) => {
  const trekkingBlogs = posts.filter((blog) =>
    blog.categories &&
    (Array.isArray(blog.categories)
      ? blog.categories.some(category => category.title === "Trekking")
      : blog.categories.title === "Trekking")
  );

  const routes = [
    {
      link: "lemosho",
      title: "Lemosho Route",
      description: "The Lemosho Route is a classic trail that has earned its reputation as the most beautiful path up Kilimanjaro",
      img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229199/kilimanjaro/main-page/kilimanjaro11_hyxmwe.webp",
    },
    {
      link: "machame",
      title: "Machame Route",
      description: "Known as the “Whiskey Route,” Machame is one of the most popular trails on Kilimanjaro.",
      img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229204/kilimanjaro/main-page/kilimanjaro17_li5ca1.webp",
    },
    {
      link: "marangu",
      title: "Marangu Route",
      description: "The Marangu Route, often called the “Coca-Cola Route,” is the only trail on Kilimanjaro with hut accommodation, making it a comfortable and straightforward option",
      img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229205/kilimanjaro/main-page/kilimanjaro18_nlxory.webp",
    },
  ]

  return (
    <>
      <HeadSEO title="Tazama Africa Safaris | Our Routes And Prices" keywords={Kilimanjaro_keywords} />
      <PrimaryHeader
        imageUrl="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229198/kilimanjaro/main-page/kilimanjaro13_k3dfjk.webp"
        title="Our Routes And Prices"
      />
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">
            Finding the Right Path to the Roof of Africa
          </h3>
          <br />
          <p>
            Climbing Kilimanjaro is not a one-size-fits-all experience. There are eight official routes to the summit, each with its own character, challenges, and highlights. Some are known for breathtaking scenery, others for their quiet solitude, while some have faster ascents or even hut accommodation.
          </p>
          <br />
          <p>
            At <Link href='/about-us' className="underline underline-offset-2 font-bold text-darker">Tazama</Link>, we focus on <span className="font-bold text-darker">five of the best routes</span>: Lemosho, Machame, Rongai, Umbwe, and the Northern Circuit. Each is carefully chosen to give you the safest, most rewarding trek. Our team will guide you in selecting the route that matches your fitness level, goals, and expectations.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">
            Our Recommended Route: Lemosho
          </h3>
          <br />
          <p>
            The <span className="font-bold text-darker">Lemosho Route</span> is our top choice, and the one we recommend for most of our guests. Why? Because it has the best balance of everything: stunning scenery, excellent acclimatization, fewer crowds at the start, and the highest success rates of any route on the mountain.
          </p>
          <br />
          <p>
            You begin in the west, walking through untouched rainforest where colobus monkeys leap through the trees. Then you cross the wide-open Shira Plateau, climb past the dramatic Barranco Wall, and trek through alpine desert before reaching the arctic summit zone. The Lemosho is gradual and steady, giving your body the time it needs to adjust to the altitude. This is the reason our summit success rate is above 95% here.
          </p>
          <br />
          <p>
            For first-time climbers, families, or anyone who wants the best possible chance of standing on Uhuru Peak, <span className="font-bold text-darker">the Lemosho is simply unbeatable.</span>
          </p>
          <br />
          <ReasonsCallToActionKilimanjaro />
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary mb-4">
            Other Kilimanjaro routes
          </h3>
          <Tabs defaultTab="Machame Route" orientation="vertical">
            <Tab label="Machame Route">
              <div>
                <h4 className="text-4xl mb-4">Machame Route</h4>
                <p>
                  Nicknamed the “Whiskey Route,” Machame is one of the most popular trails. It offers dramatic and varied landscapes, from lush rainforest to volcanic ridges, and the famous scramble up the Barranco Wall. Because of its popularity, Machame tends to be busier than other routes, but the scenery makes it worth it.
                </p>
                <br />
                <p>
                  This trail has a good acclimatization profile, though it is slightly more physically demanding with steeper sections. It’s a great choice for those seeking a balance of challenge, beauty, and adventure in a group atmosphere.
                </p>
              </div>
            </Tab>
            <Tab label="Rongai Route">
              <div>
                <h4 className="text-4xl mb-4">Rongai Route</h4>
                <p>
                  The <span className="font-bold text-darker">Rongai Route</span> approaches Kilimanjaro from the quieter northern side, near the Kenyan border. It passes through pine forests and moorlands, offering a completely different perspective of the mountain compared to the southern approaches.
                </p>
                <br />
                <p>
                  Rongai is less crowded, making it ideal for trekkers looking for a more peaceful climb. While the scenery is gentler and less varied than Lemosho or Machame, the route is steady and has a high success rate. It’s especially good during the rainy season since the northern side receives less rainfall.
                </p>
              </div>
            </Tab>
            <Tab label="Umbwe Route">
              <div>
                <h4 className="text-4xl mb-4">Umbwe Route</h4>
                <p>
                  The <span className="font-bold text-darker">Umbwe Route</span> is the steepest and most direct trail to the summit. It cuts quickly through the rainforest and ascends rapidly to the higher camps. This makes it the shortest way up, but it also offers the poorest acclimatization profile.
                </p>
                <br />
                <p>
                  Umbwe is only recommended for highly experienced and physically fit trekkers who are used to altitude. It is beautiful and wild, but it demands stamina and determination. For most climbers, it is not the safest choice.
                </p>
              </div>
            </Tab>
            <Tab label="Northern Circuit">
              <div>
                <h4 className="text-4xl mb-4">Northern Circuit</h4>
                <p>
                  The <span className="font-bold text-darker">Northern Circuit</span> is the longest trail on Kilimanjaro, circling around the mountain before approaching the summit from the west. It offers solitude, 360-degree views, and excellent acclimatization thanks to its gradual pace.
                </p>
                <br />
                <p>
                  The Northern Circuit is a wonderful choice for those who have the time and want to experience the mountain from every angle. The downside is that it skips some iconic features like the Barranco Wall, but the payoff is unmatched scenery and the quietest route of them all.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="my-20 ">
          <h3 className="text-5xl text-primary mb-4 text-center">
            How to Choose the Right Route
          </h3>
          <p>
            If you’re unsure where to start, don’t worry. Most climbers come to us only knowing “Kilimanjaro,” not the details of its routes. That’s exactly why we’re here. Our team listens to your goals, fitness level, and expectations before recommending the route that gives you the best chance of success.
          </p>
          <ul className="list-disc mt-4">
            <li className="ml-8">
              <span className="font-bold text-darker">First-time climbers:</span> Choose Lemosho for comfort, scenery, and summit success.
            </li>
            <li className="ml-8">
              <span className="font-bold text-darker">Adventurers who want challenge:</span> Machame offers dramatic landscapes and physical excitement.
            </li>
            <li className="ml-8">
              <span className="font-bold text-darker">Quiet, off-the-beaten-path:</span> Rongai gives you peace and solitude.
            </li>
            <li className="ml-8">
              <span className="font-bold text-darker">Hardcore climbers:</span> Umbwe is steep, direct, and only for the most experienced.
            </li>
          </ul>
        </div>

        <KilimanjaroItinerariesCallToAction />

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">
            Why Routes Matter
          </h3>
          <br />
          <p>
            The route you take can make the difference between reaching the summit and turning back early. Routes with more days and gradual ascents dramatically improve your acclimatization and safety. That’s why we guide our clients away from short, rushed itineraries.
          </p>
          <br />
          <p>
            At Tazama, we believe the journey is just as important as the summit. The right route gives you time to adapt, to take in the beauty around you, and to enjoy every step toward the Roof of Africa.
          </p>

        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary mb-4 text-center">
            Kilimanjaro Routes
          </h3>
          <br />
          <div className="relative grid grid-cols-3 gap-4">
            {
              routes.map((route, index) => (
                <Link
                  key={index}
                  href={`/safaris/kilimanjaro/routes/${route.link}`}
                  className="h-96 relative overflow-hidden rounded-xl group"
                >
                  <Image
                    src={route.img}
                    alt="How Hard Is It Really?"
                    layout="fill"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 px-4 py-6 bg-gradient-to-t from-black/75">
                    <h4 className="text-white text-4xl">{route.title}</h4>
                    <p className="text-white text-sm line-clamp-2">
                      {route.description}
                    </p>
                    <br />
                    <button
                      className="border-2 font-semibold border-white rounded-full px-4 lg:px-6 py-2 font-raleway text-white group-hover:text-black group-hover:bg-white transition-colors duration-200 cursor-pointer">
                      See more
                    </button>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>

        <div className="my-16 border border-neutral-200"></div>

        <div>
          <h3 className="text-5xl text-primary">Our Guides and Blogs</h3>
          <section className="mx-auto mt-5 mb-28 w-full items-center gap-4 lg:flex-row  lg:items-start lg:gap-4">
            <Carousel
              opts={{
                align: "start"
              }}
              className="w-full max-w-5xl mx-auto lg:max-w-none"
            >
              <CarouselPrevious />
              <CarouselContent>
                {
                  trekkingBlogs.map((post, index) => (
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
                          <h3 className="text-3xl line-clamp-2 text-dark">{post.title}</h3>
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
          </section>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Page;


export async function getStaticProps({ draftMode = false }) {
  const images = await useFetchImages({ folderName: "kilimanjaro" });
  const client = getClient(draftMode ? token : undefined);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationContains, { pattern: "*mount kilimanjaro*" });

  return {
    props: {
      images,
      posts,
      draftMode,
      token: draftMode ? token : "",
    },
  };
}
