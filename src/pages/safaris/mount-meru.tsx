import PrimaryHeader from "~/components/PrimaryHeader";
import useFetchImages from "~/hooks/useFetchImages";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO title="Mount Meru" />
      <PrimaryHeader image={`mount-meru.webp`} title="Mount Meru" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className=" py-8">
          <h3 className="text-4xl text-[#A87133]">
            Welcome to Mount Meru: Tanzania's Hidden Gem
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Embark on a journey to Mount Meru, Tanzania's lesser-known but
            equally captivating peak. Nestled in the heart of Arusha National
            Park, Mount Meru offers a thrilling trekking experience amidst
            breathtaking landscapes and diverse wildlife.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            As the second highest mountain in Tanzania, standing proudly at 4565
            m / 14,977 ft, Mount Meru offers a captivating trekking experience
            that's second to none. Serving as an ideal acclimatization trek
            before ascending Mount Kilimanjaro or as a standalone adventure,
            Mount Meru promises a journey filled with unparalleled beauty and
            adventure.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <CloudinaryImage
                public_id={images[4]!.public_id}
                format={images[4]!.format}
                blurDataUrl={images[4]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>

        <div className="pb-10">
          {/* <h3 className="text-4xl text-[#A87133]">Sundowners in nature</h3> */}
          <p className="mb-3 text-xl text-[#757371]">
            Completed in either 3 or 4 days, the experience offers a diverse
            range of landscapes, flora and fauna. Accompanied by a park ranger,
            it’s a trekking experience that is physically challenging and truly
            unique.
          </p>
        </div>
        {/* @ts-ignore */}
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "meru" });
  return {
    props: {
      images,
    },
  };
}
