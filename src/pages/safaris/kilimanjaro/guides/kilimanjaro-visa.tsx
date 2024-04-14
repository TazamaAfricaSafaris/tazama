import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Do you need visa to climb Kilimanjaro">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Kilimanjaro Visa: Your Gateway to Adventure
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Embarking on a journey to Mount Kilimanjaro, the crown jewel of
              Tanzania and Africa's highest peak, is a dream for many
              adventurers and trekkers worldwide. Before setting foot on this
              majestic mountain, there's a crucial step every traveler must
              navigate: obtaining the necessary Kilimanjaro visa. Tazama, your
              trusted partner in luxury and personalized trekking experiences,
              is here to guide you through this essential process, ensuring your
              adventure starts smoothly and stress-free.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Do You Need a Visa to Climb Kilimanjaro?
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Absolutely, yes. As Mount Kilimanjaro graciously stands in the
              northern part of Tanzania, most foreign nationals are required to
              obtain a visa for entry into Tanzania. This is a non-negotiable
              prerequisite for anyone planning to conquer Kilimanjaro, requiring
              a passport valid for at least six months beyond your entry date,
              with at least one blank page for stamps.
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
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Securing Your Visa: Options and Processes
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              For those embarking from afar, the Kilimanjaro Visa On Arrival
              (VOA) presents a convenient option, allowing trekkers to obtain
              their visa directly at Tanzania’s Kilimanjaro International
              Airport [JRO]. While this might seem the easier route, it's
              essential to be aware of potential delays or issues that could
              arise. To ensure a seamless start to your adventure, Tazama
              recommends securing your visa in advance through the online
              application process, providing peace of mind as you prepare for
              your journey.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Online Visa Application: What You Need to Know
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The Tanzanian government has streamlined the visa application
              process, allowing travelers to apply online. This process involves
              filling out a form, making a payment, and submitting your
              application for review. Notification of acceptance or rejection is
              conveniently sent via email, with the option to track your
              application status online. Required documents include a valid
              passport, a passport-sized photo, and, in some cases, an
              invitation letter or proof of accommodation in Tanzania.
              <br />
              <br />
              For the online visa application, visit: Tanzania Immigration
              Services Website.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Kilimanjaro Visa Requirements at a Glance:
            </h3>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                <span className="text-primary">Valid Passport:</span> Must be
                valid for six months beyond your travel date, with at least one
                blank page.
              </li>
              <li>
                <span className="text-primary">Yellow Fever Certificate:</span>{" "}
                Required if arriving from a yellow fever-endemic country.
              </li>
              <li>
                <span className="text-primary">Passport Size Photo</span> Two
                photos are needed for a Visa on Arrival.
              </li>
              <li>
                <span className="text-primary">
                  Invitation Letter and Proof of Residency
                </span>{" "}
                For Visa on Arrival, showing your accommodation details.
              </li>
              <li>
                <span className="text-primary">Email Address:</span> For e-Visa
                verification and notification.
              </li>
              <li>
                <span className="text-primary">Payment Method:</span> Online
                payments accepted via credit/debit cards and PayPal.
              </li>
            </ul>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Tanzania Visa Costs and Processing Times:
            </h3>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                U.S. Citizens: Multiple-entry e-Visa, standard to super rush
                processing, USD 100.00.
              </li>
              <li>
                North Korean Citizens: Volunteer e-Visa, standard to super rush
                processing, USD 100.00.
              </li>
              <li>
                Other Nationalities: Tourist e-Visa, standard to super rush
                processing, USD 100.00.
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
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Where to Obtain Your Visa:
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Online, at any Tanzanian Embassy, High Commission, or specific
              entry points to Tanzania, including international airports and
              border crossings.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Elevating Your Kilimanjaro Experience
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              At Tazama, we understand that the journey to Kilimanjaro's summit
              begins long before you set foot on the mountain. Our commitment to
              your seamless adventure extends beyond the trek itself, ensuring
              every logistical detail, including the visa process, is handled
              with the utmost care and expertise. With Tazama, you're not just
              embarking on a trek; you're indulging in a fully catered, luxury
              experience that prioritizes your safety, comfort, and personal
              preferences.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Ready to Start Your Kilimanjaro Adventure?
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Let Tazama be your guide to not only conquering Africa's highest
              peak but also navigating the essential steps before your journey
              begins. With our expert knowledge, personalized service, and
              commitment to luxury and safety, your Kilimanjaro trek will be an
              unforgettable adventure from start to finish. Contact Tazama
              today, and let's start planning your climb with the peace of mind
              that every detail, including your Kilimanjaro visa, is in expert
              hands.
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
          href="/safaris/kilimanjaro/guides/kilimanjaro-facts"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage
              src="
            https://images.unsplash.com/photo-1635865897833-38bc0f8aee44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww"
            />
          </div>

          <div className="p-3">
            <p className=" text-primary">Kilimanjaro Facts</p>
            <p className=" text-sm">
              Mount Kilimanjaro, a marvel of nature, stands as a beacon of
              adventure for climbers worldwide.
            </p>
            <Button className="mt-5 text-lg text-white">View More</Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/guides/kilimanjaro-vaccinations"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Kilimanjaro Vaccinations</p>
            <p className="font-now text-sm">
              Be sure you understand how an anti-malarial may affect your sleep,
              appetite and exposure to sun before you begin,
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
