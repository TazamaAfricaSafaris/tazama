/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";
import useFetchImages from "~/hooks/useFetchImages";
import HeadSEO from "~/components/ui/Head";
import { Kilimanjaro_keywords } from "~/lib/constants";
import Image from "next/image";

import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/Carousel";

import Link from "next/link";
import { kilimanjaroRoutes } from "~/data/kilimanjaro-routes";

import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { POSTS_QUERY, itineraryQueries } from "~/sanity/lib/queries";
import { urlFor } from "~/sanity/lib/image";
import CallToAction from "~/components/CallToAction";
import ReasonsCallToActionKilimanjaro from "~/components/kilimanjaro/reasons-cta";
import KilimanjaroItinerariesCallToAction from "~/components/kilimanjaro/itineraries-cta";
import { FaTripadvisor } from "react-icons/fa";
import KiliTripadivsorReviews from "~/components/kilimanjaro/kili-tripadivsor-reviews";

const Page = ({ posts, itineraries }: { posts: SanityDocument[], itineraries: SanityDocument[] }) => {
  const trekkingBlogs = posts.filter((blog) =>
    blog.categories &&
    (Array.isArray(blog.categories)
      ? blog.categories.some(category => category.title === "Trekking")
      : blog.categories.title === "Trekking")
  );

  return (
    <>
      <HeadSEO title="Tazama Africa Safaris | Climbing Mount Kilimanjaro" keywords={Kilimanjaro_keywords} />
      <PrimaryHeader
        image={`mount-kilimanjaro.webp`}
        title="Climb Kilimanjaro with Tazama"
      />
      <div className="mx-auto  max-w-5xl px-4 md:px-8 ">
        <div className="mt-20 py-8">
          <h3 className="text-5xl text-primary text-center">
            The Roof of Africa Awaits
          </h3>
          <br />
          <p>
            Kilimanjaro stands at 5,895 meters above sea level, the highest mountain in Africa and the tallest free-standing peak in the world. For many, reaching the summit is a once-in-a-lifetime dream. The beauty of Kilimanjaro is that you don’t need ropes or technical climbing skills, what you need is determination, a healthy level of fitness, and the right support team to guide you safely to the top.
          </p>
          <br />
          <p>
            At Tazama, we have been guiding adventurers since 2017. Over the years, we’ve learned that climbing Kilimanjaro is not just about getting to the summit, but about how you get there: the safety measures, the food you eat, the people who walk beside you, and the memories you take home. That’s why we design our climbs around safety, comfort, and responsible practices that ensure both our guests and our crew are well cared for.
          </p>

          <div className="mt-20 flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 relative">
            <div className="w-full md:sticky top-4">
              <h3 className='text-primary text-5xl'>
                Safety First
              </h3>
              <br />
              <p>
                The number one question most climbers ask is whether the climb is safe. The challenge of Kilimanjaro is not its trails but its altitude. At Tazama, we take this seriously. Our guides are Wilderness First Responder certified and trained in mountain rescue. Every day, your health is checked, oxygen levels, pulse rate, and hydration, to make sure your body is adjusting well. We carry medical kits and portable oxygen on every trek, and we maintain private portable toilets so you are never exposed to unhygienic camp facilities.
              </p>
              <br />
              <p>
                We also design our itineraries to give your body time to acclimatize. Walking slowly, eating nutritious meals, and resting properly are simple steps that make a huge difference. Safety isn’t just a promise for us, it’s the reason our guests consistently reach the summit with confidence.
              </p>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759228990/kilimanjaro/main-page/clients/WhatsApp_Image_2025-09-30_at_10.15.01_1_ppkopg.jpg"
                alt="Safety First"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <br /><br />
          <KilimanjaroItinerariesCallToAction />

          <div className="mt-16 flex flex-col-reverse space-y-5 md:flex-row md:space-x-5 md:space-y-0 relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759228982/kilimanjaro/main-page/clients/WhatsApp_Image_2025-09-30_at_10.14.55_1_cwngiy.jpg"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full md:sticky top-4">
              <h3 className='text-primary text-5xl'>
                How Hard Is It Really?
              </h3>
              <br />
              <p>
                Many people are surprised to hear that Kilimanjaro is accessible to beginners. The real challenge is the altitude, not the terrain. Most days involve long walks of 5 to 8 hours, and the final push to the summit can take 10 to 12 hours. If you are reasonably fit, able to hike 10–15 kilometers in a day or run a few kilometers without much difficulty, you are already well on your way.
              </p>
              <br />
              <p>
                The most important factor is choosing the right route. That’s why Tazama recommends the Lemosho route. It is one of the most beautiful approaches to the mountain, with changing landscapes that range from rainforest to high alpine desert, and it gives climbers the best possible chance to acclimatize slowly and steadily. This route balances scenery, comfort, and safety, making it ideal for first-time climbers and seasoned hikers alike.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-primary text-5xl text-center">What’s Included in a Tazama Climb?</h3>
          <br />
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229205/kilimanjaro/main-page/kilimanjaro19_lpdch6.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <br />
          <p>
            We believe in transparency. With us, there are no hidden surprises. From the moment you arrive, we make sure you are taken care of. Your climb includes airport transfers, park fees, and all the permits you need. Before and after your trek, we arrange for you to stay in top-notch accommodations so you can relax and recover in comfort.
          </p>
          <br />
          <p>
            On the mountain, you will be supported by a team of professional guides, chefs, and porters. You’ll sleep in quality tents with proper sleeping mats, eat nutritious meals prepared to suit all dietary needs, from vegan to gluten-free, and enjoy the comfort of private dining tents. We also carry portable toilets for hygiene and peace of mind. Safety equipment, including oxygen and medical kits, is always on hand, and you will receive continuous support in planning your climb, from training advice to packing lists.
          </p>
          <br />
          <p>
            The only things not included are your international flights, visa fees, travel insurance, personal gear, and crew tips. Everything else is organized so that you can focus on the climb itself.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">Why We Cost More, and Why It Matters</h3>
          <br />
          <p>
            You may find cheaper climbs online, but lower prices almost always mean corners are cut. This could mean underpaid porters, poor food, old tents, or rushed itineraries that increase the risk of altitude sickness. At Tazama, we refuse to compromise on safety or dignity.
          </p>
          <br />
          <p>
            We pay our crew above industry standards, and we feed them the same quality meals that you enjoy. We provide professional chefs, private toilets, and the best equipment because these are not luxuries, they are essentials for a safe and enjoyable climb. Our higher summit success rate is a direct result of these choices. When you book with Tazama, you’re investing not just in your own experience, but in the wellbeing of the people who make it possible.
          </p>
        </div>

        <br /><br />
        <ReasonsCallToActionKilimanjaro />

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">How Much Does It Cost to Climb Kilimanjaro?</h3>
          <br />
          <p>
            The cost of climbing Kilimanjaro depends on your route, group size, and accommodation before and after the trek. At Tazama, we focus mostly on <strong className="text-darker">private climbs</strong>, and not mixing with strangers.
          </p>
          <br />
          <p>
            For a 7days to 8days trek  <i>(9 to 10days tour)</i>, prices range from <strong className="text-darker">$1,788 to $4,664 per person</strong>, with the average around <strong className="text-darker">$2,700 USD</strong>. About <strong className="text-darker">35% of this goes directly to park fees</strong>, and a large share covers taxes (18% VAT and 30% income tax). We run transparently, paying all required fees and wages above industry standards.
          </p>
          <br />
          <div className="border-amber-200 bg-amber-50 p-4 rounded-lg border">
            <p className="text-amber-800">
              👉 <span className="font-semibold">Tip</span>: If you book for two people or more, your cost per person drops by about 23% compared to climbing solo.
            </p>
          </div>
          <br />
          <p>
            Be cautious of operators charging less than $1,700. Low prices almost always mean underpaid porters, poor food, unsafe equipment, and shortcuts that put climbers at risk. With Tazama, you know your money supports safety, fair pay, and a quality experience from start to finish.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229199/kilimanjaro/main-page/kilimanjaro11_hyxmwe.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229197/kilimanjaro/main-page/kilimanjaro12_h4dou2.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229190/kilimanjaro/main-page/kilimanjaro4_wclu5t.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">Ethical and Responsible Travel</h3>
          <br />
          <p>
            We are proud to run our climbs in a way that respects both people and the environment. Our guides and porters are fairly paid, properly equipped, and cared for. We follow KPAP standards (Kilimanjaro Porters Assistance Project) to ensure our team is never exploited.
          </p>
          <br />
          <p>
            On the mountain, we have a strict “no plastic” policy, providing refillable bottles instead of single-use plastics. We also operate on a “trash in, trash out” system, ensuring we leave the mountain cleaner than we found it. When you climb with Tazama, you are part of a sustainable model of tourism where everyone benefits.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">Understanding the Routes</h3>
          <br />
          <p>
            Most people have heard of Kilimanjaro but don’t know there are different routes to the summit. Each route offers a different experience, and here’s what you should know in simple terms:
          </p>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              kilimanjaroRoutes.map(route => (
                <div
                  key={route.title}
                  className="bg-primary p-6 h-64 text-primary-foreground flex flex-col justify-center items-center text-center gap-2 cursor-default"
                >
                  <p className="text-xl font-semibold">{route.title}</p>
                  <p className="text-lightest text-sm">{route.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-full sticky top-4">
              <h3 className="text-5xl text-primary">Best Time to Climb</h3>
              <br />
              <p>
                Kilimanjaro can be climbed year-round, but the best months are January to March and June to October. These seasons offer the most stable weather, with clearer skies and less rain. Other months are possible, but climbers should be prepared for wetter conditions.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229199/kilimanjaro/main-page/kilimanjaro14_oflla1.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row-reverse mt-12 md:mt-20">
            <div className="w-full sticky top-4">
              <h3 className="text-5xl text-primary">Your Role in Planning</h3>
              <br />
              <p>
                We make the process simple for you. From the moment you book, we provide a detailed preparation pack with training advice, packing lists, and visa information. Our team stays in touch via WhatsApp and email to answer your questions at any stage. Before you arrive, we confirm your meal preferences, medical needs, and special requests, so that everything is in place for a smooth start. Your role is to prepare physically and mentally, we handle the rest.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229190/kilimanjaro/main-page/kilimanjaro5_y8r9ru.webp"
                alt="How Hard Is It Really?"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl text-primary text-center">Why Trust Tazama?</h3>
          <br />
          <p>
            We have been operating since 2017, guiding hundreds of clients to the summit. We have weathered challenges like the pandemic and come out stronger, with a reputation built on safety, integrity, and personalized service. Our summit success rate on the Lemosho route is over 95%, and our guests consistently return home with not just photos, but stories of genuine care and unforgettable moments.
          </p>
          <br />
          <p>
            With Tazama, you are not just booking a climb. You are joining a journey where every detail is designed for your safety, your success, and your experience of Africa’s greatest mountain.
          </p>
        </div>

        <br />


        <KiliTripadivsorReviews />
        <br /><br /><br />

        <div>
          <div className='w-full h-[30rem] relative rounded-2xl overflow-hidden'>
            <div className='z-10 absolute bottom-[5%] md:bottom-[10%] max-w-3xl left-[5%]'>
              <h3 className='text-white text-4xl md:text-5xl mb-2'>Kilimanjaro Routes with Tazama</h3>
              <p className='text-[#f5f1eb] text-sm md:text-base'>
                Climbing Kilimanjaro is not a one-size-fits-all experience. There are eight official routes to the summit, each with its own character, challenges, and highlights. Learn more about the routes we at Tazama use for your experience
              </p>
              <br />
              <Link href='/kilimanjaro/routes' className="border border-white rounded-md px-4 lg:px-6 py-2 mt-4 text-sm md:text-base font-raleway text-white hover:bg-white/90 hover:text-darker transition-colors duration-200">
                See More
              </Link>
            </div>
            <Image
              layout='fill'
              className='object-cover brightness-50'
              src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1724412906/home/harshil-gudka--2qN2QQwT8s-unsplash_sjlhig.jpg'
              alt='Mount Meru'
            />
          </div>
        </div>

        <br />
        <hr />
        <div className="mt-10">
          <h3 className="text-5xl text-primary text-center">Featured Kilimanjaro Itineraries</h3>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(itineraries?.length ?? 0) > 0 ? (
              itineraries.slice(0, 6).map((itinerary) => (
                <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
            )}
          </div>
        </div>
        <hr />
        <br />

        <h3 className="mt-20 text-5xl text-primary">Our Guides and Blogs</h3>
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
                          src={post?.mainImage?.asset?.url ?? "/assets/images/gallery/adventure.webp"}
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
      <CallToAction />
    </>
  );
};

function ItineraryCard({ itinerary }: { itinerary: SanityDocument }) {
  const title: string = itinerary?.itineraryName ?? "Safari Itinerary";
  const days: number | undefined = itinerary?.locationAndDuration?.duration as number | undefined;
  const price: number | undefined = itinerary?.price as number | undefined;
  const slug: string | undefined = itinerary?.slug?.current;
  const imageAsset = itinerary?.coverImg;
  const imageUrl: string = (imageAsset ? urlFor(imageAsset).width(800).height(600).url() : "/assets/images/gallery/adventure.webp") as string;
  const altText: string = imageAsset?.alt || title;

  return (
    <Link href={slug ? `/tours/${slug}` : "#"} className="block">
      <div className="h-96 rounded-xl relative overflow-hidden group">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 p-4 right-4 text-white bg-gradient-to-b from-black/35 w-full">
          <div className="flex flex-col gap-0.5">
            <p className="text-xl font-bold line-clamp-2">{title}</p>
            {typeof days === "number" && <p className="text-sm">{days} days</p>}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 text-white p-4 w-full flex items-center justify-between bg-gradient-to-t from-black/35">
          <div className="flex flex-col">
            <p>Starting from</p>
            <p className="text-2xl font-bold">${typeof price === "number" ? `${price.toLocaleString()}` : "Contact us"}</p>
          </div>
          <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-primary transition-colors'>See more</button>
        </div>
      </div>
    </Link>
  );
}

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
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
  };
}

/*

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

*/