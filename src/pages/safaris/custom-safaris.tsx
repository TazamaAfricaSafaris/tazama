/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import CustomSafarisForm from "~/components/forms/all-forms/CustomSafaris";

export default function Page() {
  return (
    <BlogLayout
      title="Welcome to Your Dream African Safari!"
      bookingPage="/safaris/custom-safaris/#customTrip"
      coverImg="/assets/images/gallery/family-safari.jpeg"
    >
      <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="text-3xl text-[#A87133] lg:text-4xl">
              Personalise your safari based on your preferences: from $2,500 per
              person
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Our safari is not just about wildlife – it's about you. Tailor
              your journey to your desires, whether it's a romantic honeymoon
              escape, an adrenaline-fueled adventure, or a tranquil beach
              retreat in Zanzibar. With us, your dreams come first.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Our exclusive safari experience offers the chance to witness the
              iconic Big 5 wildlife and explore Tanzania's breathtaking national
              parks. From the majestic Serengeti to the awe-inspiring Ngorongoro
              Crater, every moment promises awe and wonder.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Starting from just $2,500 per person, our personalized safaris
              cater to every budget and aspiration. From migration safaris to
              cultural excursions, the possibilities are endless. Book now and
              let us create the safari of your dreams.
            </p>
            <Link href="/safaris/custom-safaris/#customTrip">
              <Button className="mt-[50px] w-full  py-5 text-xl tracking-wide text-white lg:hidden">
                Book Your Trip
              </Button>
            </Link>
            <div className="relative mt-[20px] h-[400px] w-full lg:hidden lg:w-[50%]">
              <Image
                src="/assets/images/gallery/lion.jpeg"
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
              />
            </div>
          </div>
        </div>

        <section className="mb-10 hidden space-y-5 py-8 lg:block">
          <Link href="/safaris/custom-safaris/#customTrip">
            <Button className="w-full py-9  text-2xl tracking-wide text-white">
              Book Your Trip
            </Button>
          </Link>

          <div className="relative h-[600px] w-full lg:w-[400px]">
            <Image
              src="/assets/images/gallery/lion.jpeg"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>
        </section>
      </section>

      <CustomSafarisForm />
    </BlogLayout>
  );
}
