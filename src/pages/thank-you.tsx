import CallToAction from "~/components/CallToAction";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";

export default function Page() {
  return (
    <>
      <main className="font-now mt-[6rem]  pb-10 md:flex md:items-center md:justify-center">
        <HeadSEO title="Tazama Africa and Safaris | Thank You" keywords={base_keywords} />
        <section className="flex flex-col items-center md:flex-row  md:justify-center md:gap-[3rem] xl:gap-[6rem]">
          <div className="flex flex-col items-center max-w-3xl text-center my-20">
            <h3 className="text-2xl md:text-7xl text-primary">
              Thank you for choosing Tazama
            </h3>

            <p className="mt-5 tracking-wide text-gray-900 md:text-xl md:tracking-wider">
              A member of our team will contact you soon and plan your memorable
              experience with us
            </p>
          </div>
          {/* <div className="relative mt-5 h-[500px] w-[350px] md:mt-0 md:w-[490px]">
            <Image
              src="/assets/images/gallery/family-trip.webp"
              layout="fill"
              className="rounded-sm object-cover"
              alt="Tazama Africa and Safaris"
            />
          </div> */}
        </section>
      </main>
      <CallToAction />
    </>
  );
}
