import Image from "next/legacy/image";
import useFetchImages from "~/hooks/useFetchImages";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO
        title="Arusha National Park Safari Tours | Tazama Africa Safaris"
        keywords={base_keywords}
      />
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <Image
            alt="tazama gallery photos"
            className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
            style={{
              transform: "translate3d(0, 0, 0)",
              imageRendering: "crisp-edges",
            }}
            placeholder="blur"
            blurDataURL={images[1]!.blurDataUrl!}
            src={`https://res.cloudinary.com/${
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/${images[1]!.public_id}.${images[1]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Arusha National Park
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Arusha National Park</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            We’ll pick you up from your accommodation in Arusha (Moshi is also
            possible at a small supplement) in the morning and drive for about
            45 min – 1 hour before we reach the entrance of Arusha National
            Park. Today you’ll spend half the day discovering the park by jeep,
            and the other half is dedicated to a walking safari. Yes, you read
            that right! Arusha National Park is one of the few parks to offer
            this option, and we highly recommend it as it allows you to get
            close to the animals. The departure time of your walking safari
            depends on the park’s planning but the walk always takes around 4
            hours. If you wish to skip the walking, we can also arrange a
            full-day game drive for you, please just let us know during your
            reservation.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            You’ll almost certainly see zebras, giraffes, baboons, buffalos, and
            colobus monkeys, and with a bit of luck maybe you’ll even spot an
            elephant or a leopard. The landscapes are stunning as well, with the
            Momella lakes and the Ngurdoto crater as absolute highlights. Around
            the lakes, you’ll also be able to see hundreds or thousands of
            flamingos.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            After lunch You will spend the Rest of the day at Lake duluti
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <CloudinaryImage
              public_id={images[2]!.public_id}
              format={images[2]!.format}
              blurDataUrl={images[2]!.blurDataUrl!}
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <CloudinaryImage
              public_id={images[1]!.public_id}
              format={images[1]!.format}
              blurDataUrl={images[1]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Activities: Walking and canoes
            <br />
            <br />
            Lake Duluti is formed inside a volcanic crater and has water
            throughout the year, mainly from groundwater and seasonal rainfall.
            The Wameru tribe of the area named it Duluti, The crater is a
            subsidiary vent to Mount Meru (4566m) that towers over the lake.
            <br />
            <br />
            The depth of the lake is unconfirmed, but locals estimate it at
            around 700m deep. Lake Duluti is about 1100m across and covers an
            area of 63ha. The walls of the crater – up to 200m high – are mostly
            covered in a thick forest. These thick forests are home to many
            reptiles as it provides a suitable environment for hunting and
            nesting. In fact, on a recent visit to the crater, we were rewarded
            with a sighting of an eastern green mamba, who unfortunately did not
            hang around long enough for a photo. Monitor lizards, some of which
            can be as big as 2m, can be seen basking on old broken trees.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The lake itself also provides the perfect habitat for water birds
            and Duluti is claimed to have up to 130 different species. The most
            common birds that can be seen include grey herons, fish eagles,
            cormorants, ospreys, egrets and kingfishers.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The lake has abundant fish proven by many groups of cormorants that
            hang out together to fish. Many locals come to the lake at night to
            fish, which of course is making competition for food among the wild
            animals harder. You need a permit to fish…
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Visitors to Lake Duluti can go canoeing to explore the lake for a
            different perspective. This is a great way to explore the marsh
            areas of the lake. Here, huge papyrus plants are a noisy, colourful
            nesting ground for many of the birds. Usually a canoe trip around
            the lake takes around 2-3 hours.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            If walking is your thing, then the hike around the crater is a
            ‘must’. A small path leads through the forest that provides enough
            shade that you can do the walk even in the hottest time of the day.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="mt-10 lg:mt-[10px] ">
          {/* @ts-ignore */}
          <Gallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "best_of_tanzania" });
  return {
    props: {
      images,
    },
  };
}
