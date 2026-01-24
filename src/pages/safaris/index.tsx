import PrimaryHeader from "../../components/PrimaryHeader";
import { safaris } from "~/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";

const Page = ({ itineraries }: { itineraries: SanityDocument[] }) => {
  return (
    <>
      <HeadSEO 
        title="Tanzania Safaris | Tazama Africa Safari Adventures" 
        keywords={`${base_keywords}, Tanzania safari, Serengeti safari, Ngorongoro Crater, wildlife viewing, Big Five, game drives, luxury safari, Tanzania national parks, African wildlife, safari experiences, Tarangire, sustainable safari`}
        description="Experience the ultimate Tanzania safari with Tazama Africa. Our expertly guided tours through Serengeti, Ngorongoro, and other iconic parks offer unforgettable wildlife encounters while supporting conservation and local communities."
      />
      <PrimaryHeader
        image={`maasai.webp`}
        title="Unique Tailored Safaris"
      />
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div id="offers" className="mt-20 py-8">
          <h3 className="text-5xl text-primary text-center">
            Explore the Heartbeat of the Wild.
          </h3>
          <p className="mb-3 mt-5">
            Tanzania is renowned for its stunning landscapes, rich biodiversity,
            and abundant wildlife, making it the ultimate destination for safari
            enthusiasts. You won’t find paved roads or fences in our national
            parks. Some of the most iconic wildlife sceneries call Tanzania
            home. From the Serengeti to Ngorongoro Crater to the hidden gems of
            Tarangire and Selous (Nyerere National Park), Tanzania's national
            parks offer a kaleidoscope of experiences waiting to be explored.
          </p>
          <p className="mb-3 mt-5">
            At Tazama Africa, we curate safari experiences that go beyond the
            ordinary, allowing you to connect with nature in its purest form.
            Our expert guides will lead you on immersive game drives, where
            you&apos;ll have the chance to encounter the Big Five - lions, elephants,
            buffaloes, leopards, and rhinos - along with an array of other
            fascinating wildlife species.
          </p>
          <p className="mb-3 mt-5">
            What sets a safari experience with Tazama apart is our commitment to
            responsible and sustainable tourism. We prioritize conservation and
            community engagement, ensuring that our safaris leave a positive
            impact on the environment and local communities. With Tazama Africa,
            you'll not only witness the wonders of Tanzania's wilderness but
            also contribute to its preservation for future generations to enjoy.
          </p>

          <p className="mb-3 mt-5">
            We invite you to explore the different options below to discover
            where an adventure with Tazama might take you. Whether you're drawn
            to the vast savannas of the Serengeti, the lush forests of
            Tarangire, or the remote wilderness of Selous, there's a safari
            experience waiting to capture your imagination and leave you with
            memories to last a lifetime.
          </p>
          <p className="mb-3 mt-5">
            The below itineraries are a great starting point as you begin to
            explore the possibilities but please reach out to us directly to
            build your custom itinerary made just for you.
          </p>
        </div>

      </div>
      <br />

      <div className="mx-auto max-w-5xl px-4 md:px-8 my-20">
        <h3 className="text-5xl text-primary text-center">Featured Safaris Itineraries</h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(itineraries?.length ?? 0) > 0 ? (
            itineraries.map((itinerary) => (
              <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <CallToAction />
    </>
  );
};

export default Page;

export async function getStaticProps({ draftMode = false }) {
  const client = getClient(draftMode ? token : undefined);
  const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byType, {
    type: 'safaris-and-tours'
  });

  return {
    props: {
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
  };
}

