import PrimaryHeader from "../../components/PrimaryHeader";
import { safaris } from "~/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";

const Page = () => {
  return (
    <>
      <HeadSEO title="Safaris" />
      <PrimaryHeader
        image={`maasai.webp`}
        title="Unique Tailored Safaris
"
      />
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div id="offers" className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            Explore the Heartbeat of the Wild.
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Tanzania is renowned for its stunning landscapes, rich biodiversity,
            and abundant wildlife, making it the ultimate destination for safari
            enthusiasts. You won’t find paved roads or fences in our national
            parks. Some of the most iconic wildlife sceneries call Tanzania
            home. From the Serengeti to Ngorongoro Crater to the hidden gems of
            Tarangire and Selous (Nyerere National Park), Tanzania's national
            parks offer a kaleidoscope of experiences waiting to be explored.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            At Tazama Africa, we curate safari experiences that go beyond the
            ordinary, allowing you to connect with nature in its purest form.
            Our expert guides will lead you on immersive game drives, where
            you'll have the chance to encounter the Big Five - lions, elephants,
            buffaloes, leopards, and rhinos - along with an array of other
            fascinating wildlife species.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            What sets a safari experience with Tazama apart is our commitment to
            responsible and sustainable tourism. We prioritize conservation and
            community engagement, ensuring that our safaris leave a positive
            impact on the environment and local communities. With Tazama Africa,
            you'll not only witness the wonders of Tanzania's wilderness but
            also contribute to its preservation for future generations to enjoy.
          </p>

          <p className="mb-3 mt-5 text-xl text-[#757371]">
            We invite you to explore the different options below to discover
            where an adventure with Tazama might take you. Whether you're drawn
            to the vast savannas of the Serengeti, the lush forests of
            Tarangire, or the remote wilderness of Selous, there's a safari
            experience waiting to capture your imagination and leave you with
            memories to last a lifetime.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            The below itineraries are a great starting point as you begin to
            explore the possibilities but please reach out to us directly to
            build your custom itinerary made just for you.
          </p>
          <hr className="mt-4 border" />
        </div>

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safaris.map((safari, index) => (
            <motion.div
              initial={{
                opacity: 0,
                translateY: 20,
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
              }}
              key={index}
            >
              <Link href={safari.href} className="relative cursor-pointer">
                <>
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={`/assets/images/gallery/${safari.img}`}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-[#A87133] sm:text-sm md:text-base">
                    {safari.name}
                  </p>
                </>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
