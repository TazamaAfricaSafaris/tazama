import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Electronic Gadgets for Kilimanjaro">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Essential Electronic Gadgets for Your Kilimanjaro Adventure
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              In the majestic realm of Mount Kilimanjaro, where every step
              brings you closer to the roof of Africa, ensuring you're
              well-equipped is paramount. Tazama understands the essence of
              being prepared, especially when it comes to electronic gadgets
              that can transform your climb into a more comfortable and
              memorable experience.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Your journey to the summit is a blend of endurance, marvel, and a
              touch of modern convenience, provided by the right gadgets. Here
              are the essentials:
            </p>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                <span className="text-primary">Smartphone:</span> Your gateway
                to the world below as you ascend. A smartphone not only keeps
                you connected but also serves as a versatile device for photos,
                navigation, and even as a digital journal.
              </li>
              <li>
                <span className="text-primary">Digital Camera:</span> While
                smartphones do a great job, a digital camera can elevate your
                photography with superior zoom, image quality, and durability
                under extreme conditions. A dust-proof and waterproof case is a
                must to protect it from the elements. A small heat pack may also
                help to preserve battery life at high altitudes.
              </li>
              <li>
                <span className="text-primary">Power Bank/Solar Charger: </span>{" "}
                The absence of charging stations along the trek makes a
                high-capacity power bank or a solar charger indispensable. Opt
                for models designed for outdoor use, capable of handling cold
                temperatures and providing multiple charges.
              </li>
            </ul>
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
            <h3 className="mt-5 text-2xl font-bold text-primary">
              8 Gadgets to Enhance Your Climb
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              This one is for our gadget lovers who don’t want to leave tech
              behind. Beyond the essentials, these gadgets can enhance your
              climbing experience:
            </p>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                <span className="text-primary">Headlamp: </span>
                Essential for those pre-dawn summit attempts, ensuring you have
                a hands-free source of light.
              </li>
              <li>
                <span className="text-primary">
                  Comfortable Sport Headphones:{" "}
                </span>
                For those moments when you need the motivational boost of your
                favorite tunes or the calm of a podcast.
              </li>
              <li>
                <span className="text-primary">Rugged Phone Case: </span>
                Protect your smartphone from drops, dust, and moisture.
              </li>
              <li>
                <span className="text-primary">Outdoor Video Camera: </span>
                Capture the dynamic landscapes and your personal journey in high
                definition.
              </li>
              <li>
                <span className="text-primary">
                  Portable Hydration System:{" "}
                </span>
                Staying hydrated is easier when your water supply is accessible
                on the go.
              </li>
              <li>
                <span className="text-primary">GPS Watch: </span>
                Track your progress, altitude, and route with precision.
              </li>
              <li>
                <span className="text-primary">E-Reader: </span>
                Wind down after a day’s climb with your favorite books at your
                fingertips
              </li>
            </ul>
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
          href="/safaris/kilimanjaro/guides/attitude-sickness"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className=" text-primary">Attitude Sickness</p>
            <p className=" text-sm">
              The key to a successful summit isn't just physical fitness but how
              well you adapt to the altitude.
            </p>
            <Button className="mt-5 text-lg text-white">View More</Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/guides/kilimanjaro-solo-climb"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Kilimanjaro Solo Climb</p>
            <p className="font-now text-sm">
              Does Solo Climbing Mean You're Alone?...
              <br />
              <br />
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/guides/training-for-kilimanjaro"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Training for Kilimanjaro</p>
            <p className="font-now text-sm">
              Climbing Mount Kilimanjaro is an intimate and bonding experience
              with your team, but privacy is paramount,
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
