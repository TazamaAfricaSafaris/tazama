import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";

export default function Page() {
  return (
    <main className="font-now mt-[6rem]  pb-10 md:flex md:items-center md:justify-center">
      <>
        <HeadSEO title="Tazama Africa and Safaris" />
        <section className="flex flex-col items-center md:flex-row  md:justify-center md:gap-[3rem] xl:gap-[6rem]">
          <div className="flex flex-col items-center md:w-[450px] md:items-start xl:w-[550px]">
            <h3 className="text-2xl md:text-4xl">
              Thank you for choosing Tazama
            </h3>

            <p className="mt-5 text-center tracking-wide text-gray-900 md:text-left md:text-xl md:tracking-wider">
              A member of our team will contact you soon and plan your memorable
              experience with us
            </p>
          </div>
          <div className="relative mt-5 h-[500px] w-[350px] md:mt-0 md:w-[490px]">
            <Image
              src="/assets/images/gallery/family-trip.webp"
              layout="fill"
              className="rounded-sm object-cover"
            />
          </div>
        </section>
      </>
    </main>
  );
}
