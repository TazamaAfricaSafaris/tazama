import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Is Kilimanjaro Safe">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto  lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Is Climbing Mt Kilimanjaro even safe?
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Embarking on a journey to conquer Mount Kilimanjaro brings with it
              a whirlwind of excitement, anticipation, and, for many, a hint of
              apprehension, particularly when it comes to safety. The paramount
              question, "Is climbing Kilimanjaro safe?" is one we at Tazama
              encounter frequently. The straightforward answer is a resounding
              yes, especially when you're in the capable hands of a tour
              operator that not only prioritizes your safety but also elevates
              your climbing experience with a touch of luxury and a deep
              commitment to personalization.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Why Tazama Guarantees a Safe and Luxurious Kilimanjaro Experience
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary ">Expertise and Safety:</span>{" "}
              Climbing the world-renowned Kilimanjaro, standing majestically at
              5,895 meters, demands not just physical readiness but a
              comprehensive safety net that can only be guaranteed by
              experienced professionals. Tazama's team of guides isn't just
              seasoned in navigating the terrains of Kilimanjaro; they're
              trained wilderness first responders, equipped with pulse oximeters
              and emergency oxygen, ensuring your safety every step of the way.
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
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">
                Luxury and Comfort on the Mountain:{" "}
              </span>
              The notion that conquering a mountain must be a Spartan experience
              is dispelled with Tazama. Our luxury campsites redefine what it
              means to trek Kilimanjaro. Imagine gourmet meals prepared by
              dedicated chefs, top-notch equipment, and eco-friendly practices
              ensuring a comfortable ascent without compromising the mountain's
              pristine beauty.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">
                Personalization at Its Best:{" "}
              </span>
              Tazama understands that every climber's dream and capability are
              unique. Whether you're embarking on this adventure solo, with
              loved ones, or a group of friends, our bespoke treks are designed
              to cater to your preferences, ensuring that your journey to the
              roof of Africa is as personalized as it is memorable.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">
                Commitment to Responsible Travel:{" "}
              </span>
              As stewards of this magnificent mountain, we're committed to its
              preservation for generations to come. Our eco-conscious approach
              ensures that your trek is not just an adventure but also a step
              towards sustainable travel.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Quick Emergency Services: </span>
              While we pride ourselves on our preventative measures and
              comprehensive health monitoring, we also offer peace of mind with
              readily available evacuation off the mountain should you need.
              Stretchers are on every trip.
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
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Your Kilimanjaro Journey with Confidence
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Choosing Tazama for your Kilimanjaro trek means opting for an
              experience that combines the thrill of adventure with the
              assurance of safety, the comfort of luxury, and the warmth of
              personalized service. With our expert team, state-of-the-art
              equipment, and unwavering dedication to your safety and comfort,
              we invite you to take on Kilimanjaro with the confidence that
              you're in the best hands.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Ready to conquer Kilimanjaro with the perfect blend of adventure,
              safety, and luxury? Contact Tazama today to discover how we can
              turn your dream of reaching the summit into a reality, ensuring a
              safe, unforgettable, and enriching experience on Africa's highest
              peak.
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
