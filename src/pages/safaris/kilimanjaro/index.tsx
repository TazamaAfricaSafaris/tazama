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
import { allBlogs } from "~/blogs/all-blogs";
import { Blog } from "~/pages/blogs";
import { kilimanjaroRoutes } from "~/data/kilimanjaro-routes";

import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { POSTS_QUERY } from "~/sanity/lib/queries";

type PostsType = {
  posts: SanityDocument[];
  draftMode: boolean;
  token: string;
};

const Page = ({ images, posts }: { images: ImageProps[], posts: SanityDocument[] }) => {
  const trekkingBlogs = posts.filter((blog) =>
    blog.categories &&
    (Array.isArray(blog.categories)
      ? blog.categories.some(category => category.title === "Trekking")
      : blog.categories.title === "Trekking")
  );

  return (
    <>
      <HeadSEO title="Kilimanjaro" keywords={Kilimanjaro_keywords} />
      <PrimaryHeader
        image={`mount-kilimanjaro.webp`}
        title="Mount Kilimanjaro"
      />
      <div className="mx-auto  max-w-5xl px-4 md:px-8 ">
        <div className="mt-20 py-8">
          <h3 className="text-5xl text-[#A87133]">
            The tallest Summit in Africa{" "}
          </h3>
          <p className="mb-3 mt-5">
            Welcome to Tazama's Kilimanjaro Treks - where the spirit of
            adventure meets the majesty of Africa's highest peak. Prepare to
            embark on an extraordinary journey through the heart of Tanzania's
            wilderness, where every step brings you closer to the summit of
            Kilimanjaro
          </p>
          <p className="mb-3 mt-5">
            As you set foot on Kilimanjaro's slopes, you'll be stepping into a
            world of unparalleled natural beauty and untamed wilderness. From
            dense rainforests teeming with life to rugged alpine deserts, the
            landscapes you'll encounter on your trek are as diverse as they are
            breathtaking.
          </p>

          <p className="mb-3 mt-5">
            At Tazama, we offer treks on five of Kilimanjaro's most renowned
            routes: Machame, Lemosho, Rongai, Umbwe and the Northern Circuit.
            Each route presents its own unique challenges and rewards, ensuring
            that every adventurer finds the perfect path to the summit.
          </p>

          <p className="mb-3 mt-5 ">
            The{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/machame">
                Machame route
              </Link>
            </span>
            , known affectionately as the "Whiskey Route," beckons with its
            stunning scenery and rugged terrain. Trekkers on this route navigate
            through ancient forests, rocky ridges, and sweeping moorlands,
            culminating in the thrilling ascent to the summit.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <CloudinaryImage
                public_id={images[11]!.public_id}
                format={images[11]!.format}
                blurDataUrl={images[11]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <CloudinaryImage
                public_id={images[10]!.public_id}
                format={images[10]!.format}
                blurDataUrl={images[10]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="mb-3 mt-5">
            For those seeking a more gradual ascent, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/lemosho">
                Lemosho route
              </Link>
            </span>{" "}
            offers a scenic journey through pristine wilderness areas. With
            ample time for acclimatization, trekkers can immerse themselves
            fully in the awe-inspiring beauty of Kilimanjaro.
          </p>
          <p className="mb-3 mt-5">
            For the ultimate Kilimanjaro experience, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/northern-circuit">
                Northern Circuit route
              </Link>
            </span>{" "}
            awaits, offering unparalleled panoramic views and a sense of remote
            wilderness. This lesser-traveled route promises solitude and
            serenity as you traverse the northern slopes of the mountain.
          </p>
          <p className="mb-3 mt-5">
            The{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/rongai">
                Rongai route
              </Link>
            </span>
            , originating from the north, offers a quieter and less congested
            path to the summit. Trekkers on this route enjoy stunning vistas of
            the Kenyan plains and the chance to witness Kilimanjaro's
            awe-inspiring sunrise.
          </p>
          <p className="mb-3 mt-5">
            Meanwhile, the{" "}
            <span className="font-bold text-primary">
              <Link href="/safaris/kilimanjaro/routes/umbwe">Umbwe route</Link>
            </span>
            , known for its steep and challenging terrain, attracts seasoned
            adventurers seeking a more direct ascent to the summit. With its
            rugged beauty and thrilling ascent, the Umbwe route offers a true
            test of endurance and determination.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center space-y-5">
            <div className="relative h-[400px] w-full ">
              <CloudinaryImage
                public_id={images[13]!.public_id}
                format={images[13]!.format}
                blurDataUrl={images[13]!.blurDataUrl!}
              />
            </div>
          </div>
          <p className="mb-3 mt-5">
            No matter which route you choose, Tazama ensures an unforgettable
            experience with our seasoned guides, top-quality equipment, and
            personalized service. From the moment you arrive in Tanzania until
            you stand triumphantly atop the summit, our team is committed to
            ensuring your safety, comfort, and enjoyment every step of the way.
          </p>

          <p className="mb-3 mt-5">
            Embark on the adventure of a lifetime with Tazama's Kilimanjaro
            Treks and experience the thrill of conquering Africa's highest peak.
            Are you ready to write your own chapter in the story of Kilimanjaro?
            Join us and let the journey begin.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-4xl text-[#A87133]">Why Trek with Tazama</h3>
          <p className="">
            When it comes to embarking on the adventure of a lifetime, we
            understand that choosing the right trekking company is crucial.
            Here's why Tazama stands out from the rest:
          </p>
          <ul className=" list-outside text-lg mt-4">
            <li className="font-bold text-primary">Safety First</li>
          </ul>
          <ul className="list-inside list-disc pl-5">
            <li>Guides certified as Wilderness First Responders</li>
            <li>Twice daily health monitoring</li>
            <li>Pulse oximeters and emergency oxygen on every climb</li>
            <li>
              Experienced guides and comprehensive emergency plans ensure
              safety.
            </li>
          </ul>

          <ul className=" list-outside pt-5 text-lg">
            <li className="font-bold text-primary">Responsible Travel:</li>
          </ul>
          <ul className="list-inside list-disc pl-5">
            <li>Adherence to Leave No Trace principles.</li>
            <li>Fair and ethical treatment of all mountain crew</li>
          </ul>

          <ul className=" list-outside pt-5 text-lg">
            <li className="font-bold text-primary">High-Quality Equipment:</li>
          </ul>
          <ul className="list-inside list-disc pl-5">
            <li>4 season expedition sleeping tents</li>
            <li>Dining tents with durable tables and chairs</li>
            <li>Hygienic private toilets</li>
            <li>4-season sleeping bags</li>
          </ul>

          <ul className=" list-outside pt-5 text-lg">
            <li className="font-bold text-primary">Professional Team:</li>
          </ul>
          <ul className="list-inside list-disc pl-5">
            <li>
              Experienced guides with extensive knowledge of Kilimanjaro's
              terrain and ecosystems.
            </li>
            <li>
              Certified in Wilderness First Aid and trained in emergency
              response procedures.
            </li>
            <li>
              Passionate about sharing the mountain's history, culture, and
              biodiversity.
            </li>
            <li>
              Dedicated porters and support staff committed to ensuring a
              seamless trekking experience.
            </li>
            <li>
              Multilingual team members capable of providing assistance and
              guidance in various languages.
            </li>
          </ul>

          <ul className=" list-outside pt-5 text-lg">
            <li className="font-bold text-primary">Personalized Service:</li>
          </ul>
          <ul className="list-inside list-disc pl-5">
            <li>
              Tailored service catering to individual needs and preferences .
            </li>
            <li>
              Customized itineraries to ensure a dream trekking experience.
            </li>
          </ul>
        </div>

        <div className="mt-24 mb-20">
          <h3 className="text-4xl text-primary">Kilimanjaro Routes</h3>
          <p>
            Ready to explore the diverse routes that lead to the Roof of Africa? Tazama offers expertly guided adventures on Kilimanjaro’s most iconic trails. Whether you're drawn to the scenic Lemosho, the challenging Machame, or the historic Marangu Route, each path offers a unique journey to the summit. Our dedication to safety, personalized service, and environmental care ensures that every climber experiences Kilimanjaro in a meaningful way. Choose your route, answer the call of the mountain, and conquer Kilimanjaro with Tazama.
          </p>
          <br />
          <br />
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              kilimanjaroRoutes.map((route, index) => (
                <Link href={route.href} key={index}>
                  <div className='w-full relative h-fit'>
                    <div className='w-full h-80 md:h-96 overflow-hidden group'>
                      <img
                        src={`${route.imageSrc}`}
                        alt={route.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-150'
                      />
                    </div>
                    <div className="absolute bottom-0 px-2 py-4 text-white bg-gradient-to-t via-neutral-900/70 from-neutral-900/70 w-full">
                      <p className='text-xl'>{route.title}</p>
                      <p className="line-clamp-2 text-sm text-white/80">{route.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>

          <br />
          <br />

          <p>
            Choose Tazama Africa for your Kilimanjaro trek and embark on a
            journey of a lifetime with confidence and peace of mind. With our
            unwavering commitment to safety, responsible travel, high-quality
            equipment, and professional team, we guarantee an experience you'll
            never forget.
          </p>
        </div>

        <h4 className="mt-0 text-4xl text-primary">Our Guides and Blogs</h4>
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
        </section>

        <div className="my-10">
          <h4 className="text-4xl text-primary">Our Gallery</h4>
          <Gallery images={images} />
        </div>

      </div>
    </>
  );
};

export default Page;


export async function getStaticProps({ draftMode = false }) {
  const images = await useFetchImages({ folderName: "kilimanjaro" });
  const client = getClient(draftMode ? token : undefined);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return {
    props: {
      images,
      posts,
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