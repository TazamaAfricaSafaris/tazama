import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";

import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <>
      <BlogLayout
        title="WHAT IS RIGHT FOR ME - PRIVATE VS GROUP TREK"
      >
        <section className="flex items-start lg:mx-0 lg:gap-10">
          <div className="mx-auto  lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <h3 className="mt-5 text-2xl text-primary">
                Embracing the Private Tour Experience
              </h3>
              <p className="mb-3 mt-5 text-[#757371]">
                For those seeking a more tailored adventure, Tazama offers
                luxurious private tours. These excursions offer the ultimate
                personalized experience, allowing climbers to set their pace,
                choose their path, and enjoy a journey designed around their
                preferences and needs. From solo adventurers to family groups,
                our private tours ensure that your Kilimanjaro climb is exactly
                as you envisioned, with all the luxury and attention to detail
                that sets Tazama apart.
              </p>{" "}
              <h3 className="mt-5 text-2xl text-primary">
                The Group Climb Advantage
              </h3>
              <p className="mb-3 mt-5 text-[#757371]">
                Group climbs on Kilimanjaro offer a unique blend of shared
                challenge and collective triumph. They're not just about
                reaching the summit; they're about the bonds formed on the way
                up. With Tazama, climbers enjoy the benefits of shared
                experiences, the joy of new friendships, and the support of a
                community, all while keeping costs accessible. Our group sizes
                are carefully managed to ensure safety and personal attention,
                making your climb both intimate and inclusive.
              </p>{" "}
              <h3 className="mt-5 text-2xl text-primary">
                Choosing Your Path with Tazama
              </h3>
              <p className="mb-3 mt-5 text-[#757371]">
                Whether you're drawn to the camaraderie of a group climb or the
                bespoke experience of a private tour, Tazama is here to make
                your Kilimanjaro dream a reality. We understand the importance
                of flexibility, support, and personal attention on such a
                monumental journey. Our commitment to luxury, safety, and
                bespoke experiences ensures that every climber, regardless of
                their choice to continue or descend, feels valued, supported,
                and part of the Tazama family.
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
              <h3 className="mt-5 text-2xl text-primary">
                Your Kilimanjaro Adventure Awaits
              </h3>
              <p className="mb-3 mt-5 text-[#757371]">
                Climbing Kilimanjaro is an invitation to challenge yourself,
                connect with nature, and become part of a community of
                adventurers. Whether in the solidarity of a group or the
                exclusivity of a private tour, Tazama is dedicated to providing
                a Kilimanjaro experience that is as fulfilling as it is
                unforgettable. Ready to take the first step on your Kilimanjaro
                journey? Reach out to Tazama, where your adventure begins with
                trust, care, and the promise of an extraordinary climb.
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
            href="/safaris/kilimanjaro/blogs/recovery-journey"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Recovery Journey</p>
              <p className="font-now text-sm">
                Recovery Journey After climbing Kilimanjaro: How many days it
                takes to recover from climbing kilimanjaro
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/blogs/preventing-injuries"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1632864792014-19793d73f8e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Preventing Injuries</p>
              <p className="font-now text-sm">
                Learn how you can prevent common Injuries while climbing
                Kilimanjaro.
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/blogs/best-sunglasses-for-kilimanjaro"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">
                Sunglasses for Kilimanjaro
              </p>
              <p className="font-now text-sm">
                Protect your eyes against the harsh UV lights in the mountain.
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
        </section>
      </BlogLayout>
    </>
  );
}
