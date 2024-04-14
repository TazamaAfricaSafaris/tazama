import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Umbwe Route">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mt-5 text-xl font-bold text-primary">
              The Ultimate Test: Conquering Kilimanjaro via the Umbwe Route
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              The Umbwe Route, known for its steep, direct climb to the summit
              of Mount Kilimanjaro, stands as the most challenging path among
              the various routes up the mountain. This route is tailored for
              adventurers seeking a rigorous trek and rapid ascent without the
              gradual acclimatization stages offered by other paths.
            </p>{" "}
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Originating from the south, the Umbwe Route quickly gains
              altitude, presenting a steep journey through breathtaking
              rainforests before emerging into the alpine desert. Its direct
              approach leads adventurers to Barranco Camp, where it joins the
              Southern Circuit, offering awe-inspiring views beneath
              Kilimanjaro’s Southern Ice Field, before making the final ascent
              from Barafu Camp. The descent is navigated via the Mweka Route,
              completing a full circle of memorable experiences.
            </p>{" "}
            <p className="mt-5 text-xl font-bold text-primary">
              Why Embark on the Umbwe Route with Tazama?
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Tazama offers this route as a unique 6 or 7-day private climb,
              with the 7-day option including a crucial acclimatization day at
              Barranco Camp. This additional day significantly enhances the
              success rate and overall trekking experience, allowing climbers to
              adjust to the altitude and enjoy the stunning vistas and unique
              flora.
            </p>
            <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
              <Image
                src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
              />
            </div>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              <span className="text-primary">
                Key Details: <br />{" "}
              </span>
              Distance: Approximately 53 km (32 miles). <br />
              Duration: 6 or 7 days, with the latter recommended for better
              acclimatization. <br />
              Difficulty: The Umbwe Route is the most strenuous on Kilimanjaro.
              It's designed for strong, experienced hikers who can adapt quickly
              to high altitudes. Success Rates: While challenging, the success
              rates for the Umbwe Route can be as high as 70% with proper
              preparation and the extended itinerary.
            </p>
            <p className="mt-5 text-xl font-bold text-primary">
              What Will You Experience?
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              This route not only tests your endurance but also rewards you with
              less trafficked paths, intimate encounters with Kilimanjaro's
              ecosystems, and unparalleled serenity. You'll trek through lush
              forests, witness exotic wildlife, and gaze upon the icy expanse of
              Kilimanjaro’s summit, all contributing to an unforgettable
              adventure.
            </p>
            <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
              <Image
                src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
                placeholder="blur"
              />
            </div>
            <p className="mt-5 text-xl font-bold text-primary">
              Begin Your Kilimanjaro Journey with Tazama
            </p>
            <p className="mb-3 mt-5 text-xl text-[#757371]">
              Are you ready to take on Kilimanjaro's toughest challenge? Choose
              Tazama for your Umbwe Route climb and discover why this path
              captivates the hearts of true adventurers. With Tazama's expert
              guidance, top-notch safety protocols, and dedication to
              responsible trekking, your journey to the Roof of Africa will be
              as rewarding as it is exhilarating. Contact us to start planning
              your climb and embrace the adventure of a lifetime.
            </p>
          </div>
        </div>

        <section className="mb-10 hidden space-y-5 py-8 lg:block">
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

          <div className="relative h-[300px] w-full lg:w-[400px]">
            <Image
              src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
              className="object-cover"
              layout="fill"
              alt="cover-img"
              blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
              placeholder="blur"
            />
          </div>
        </section>
      </section>

      <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/lemosho"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className=" text-primary">Lemosho Route</p>
            <p className=" text-sm">
              The Lemosho Route, starting from the west at Londorossi Gate,
              unfolds a breathtaking ascent to Kilimanjaro...
            </p>
            <Button className="mt-5 text-lg text-white">View More</Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/machame"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Machame Route</p>
            <p className="font-now text-sm">
              The Machame Route, affectionately known as the "Whiskey Route," is
              not just a path to the summit of Kilimanjaro—it's...
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/marangu"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Marangu Route</p>
            <p className="font-now text-sm">
              While Marangu might be the most accessible route, it requires
              careful preparation...
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
      </section>
    </BlogLayout>
  );
}
