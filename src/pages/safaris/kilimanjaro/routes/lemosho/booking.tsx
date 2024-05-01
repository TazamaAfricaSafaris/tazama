import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import LenoshoItenary from "~/components/itenaries/LemoshoItienary";
import { Includes } from "~/data/lemosho";
import LemoshoForm from "~/components/forms/all-forms/Lemosho";
import PlanMyTrip from "~/components/forms/all-forms/plan-my-trip";

export default function Page() {
  return (
    <>
      {/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
      <BlogLayout title="Lemosho Route">
        <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
          <div className="mx-auto lg:mx-0 lg:text-justify">
            <div className="mb-10 py-8">
              <h3 className="text-3xl text-[#A87133] lg:text-4xl">
                MOUNT KILIMANJARO SAFE & LUXURY CLIMB - 7 days Lemosho route
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                7-day luxury climb up Kilimanjaro's Lemosho Route with Tazama.
                Explore stunning landscapes, personalized for you, with safety
                ensured by our expert local team.
              </p>{" "}
              <p className="mt-5 text-lg font-bold text-primary">
                Trip Itienary
              </p>
              <LenoshoItenary />
              <Link href="/safaris/kilimanjaro/routes/lemosho/booking/#bookTrip">
                <Button className="mt-[50px] w-full  py-5 text-xl tracking-wide text-white lg:hidden">
                  Book Your Trip
                </Button>
              </Link>
              <div className="relative mt-[20px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                  placeholder="blur"
                  blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
                />
              </div>
              {/* <LemoshoForm /> */}
            </div>
          </div>

          <section className="mb-10 hidden space-y-5 py-8 lg:block">
            <Link href="/safaris/kilimanjaro/routes/lemosho/booking/#bookTrip">
              <Button className="w-full py-9  text-2xl tracking-wide text-white">
                Book Your Trip
              </Button>
            </Link>

            <div className="relative h-[600px] w-full lg:w-[400px]">
              <Image
                src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
              />
            </div>
            {/* <div className="relative h-[300px] w-full lg:w-[400px]">
            <Image
              src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
              className="object-cover"
              layout="fill"
              alt="cover-img"
              blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
              placeholder="blur"
            />
          </div> */}
          </section>
        </section>
        <section className="mt-10 lg:grid lg:grid-cols-2 lg:space-x-1">
          <div>
            <h3 className="mt-5 text-lg text-primary lg:text-2xl">Includes</h3>
            <ul className="list-disc">
              {Includes[0]?.data.map((data, inx) => (
                <li className="ml-5 lg:text-lg" key={inx}>
                  {data}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mt-5 text-lg text-primary lg:text-2xl">Excludes</h3>
            <ul className="list-disc">
              {Includes[1]?.data.map((data, inx) => (
                <li className="ml-5 lg:text-lg" key={inx}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <LemoshoForm />
      </BlogLayout>
    </>
  );
}
