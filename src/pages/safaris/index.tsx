import PrimaryHeader from "../../components/PrimaryHeader";
import { safaris } from "~/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";
import SafariTripadivsorReviews from "~/components/safari/safari-tripadivsor-reviews";
import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { POSTS_QUERY, itineraryQueries } from "~/sanity/lib/queries";
import { urlFor } from "~/sanity/lib/image";
import { ItineraryCard } from "../kilimanjaro/itineraries";
import CustomTripFormCallToAction from "~/components/safari/custom-trip-form-call-to-action";

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
          <br />
          <p>
            Tanzania is a land where nature still reigns wild and free. You won’t find paved roads or fences here, only endless savannas, ancient craters, and herds of animals moving with the rhythm of the seasons. From the golden plains of the Serengeti to the breathtaking Ngorongoro Crater and the quiet beauty of Tarangire, every park tells its own story.
          </p>
          <br />
          <p>
            At Tazama Africa, we curate safari experiences that go beyond the
            ordinary, allowing you to connect with nature in its purest form.
            Our expert guides will lead you on immersive game drives, where
            you&apos;ll have the chance to encounter the Big Five - lions, elephants,
            buffaloes, leopards, and rhinos - along with an array of other
            fascinating wildlife species.
          </p>
          <br />
          <p>
            At <strong>Tazama Africa</strong>, we design safaris that go beyond sightseeing. We want you to feel the heartbeat of the wild, to watch lions in the early light, hear the rumble of elephants across the plains, and see the sky turn gold as the sun sets behind the acacias. Our experienced guides know every track, sound, and scent of the bush, bringing you closer to the Big Five and beyond.
          </p>
          <br />
          <CustomTripFormCallToAction />
          <br />
          <p>
            What makes a safari with Tazama special is our philosophy, <strong>travel with purpose</strong>. Every journey we create supports conservation and local communities. By traveling with us, you become part of something meaningful: protecting Tanzania’s wilderness while empowering the people who call it home.
          </p>
          <br />
          <p>
            Whether you’re traveling as a couple, with family, friends, or solo, your safari will be custom-crafted to match your interests, wildlife, adventure, photography, or relaxation.
          </p>
          <br />
          <p>
            The below itineraries are a great starting point as you begin to explore the possibilities but please reach out to us directly to build your custom itinerary made just for you.
          </p>
        </div>

      </div>
      <br />

      <div className="mx-auto max-w-5xl px-4 md:px-8 my-20">
        <h3 className="text-5xl text-primary text-center">Featured Safaris Itineraries</h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(itineraries?.length ?? 0) > 0 ? (
            itineraries.slice(0, 6).map((itinerary) => (
              <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 mb-20">
        <SafariTripadivsorReviews />
      </div>
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

