/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";
import useFetchImages from "~/hooks/useFetchImages";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import CallToAction from "~/components/CallToAction";
import { base_keywords } from "~/lib/constants";
import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { itineraryQueries } from "~/sanity/lib/queries";
import { ItineraryCard } from "~/pages/kilimanjaro/itineraries"
import ContentSection from "~/components/ContentSection";

const Page = ({ itineraries, images }: { itineraries: SanityDocument[], images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO title="Mount Meru" keywords={base_keywords} />
      <PrimaryHeader image={`mount-meru.webp`} title="Mount Meru" />
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mt-20 py-8">
          <h3 className="text-5xl text-primary">
            Welcome to Mount Meru: Tanzania's Hidden Gem
          </h3>
          <br />
          <p>
            Often standing quietly in the shadow of Mount Kilimanjaro, Mount Meru rises 4,566 meters above sea level inside the beautiful Arusha National Park. It may be Tanzania’s second-highest mountain, but for many who climb it, it’s their first real connection to Africa’s wild soul.
          </p>
          <br />
          <p>
            Mount Meru offers something that few mountains do, a blend of adventure, scenery, and wildlife. The journey begins in lush rainforest alive with birdsong, monkeys leaping through the trees, and giraffes grazing in the distance. As you climb higher, the forest fades into open moorland and volcanic ridges. From the top, you’ll watch the sun rise behind Kilimanjaro, one of Africa’s most breathtaking views.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-80 w-full lg:w-[50%] rounded-xl overflow-hidden">
              <CloudinaryImage
                public_id={images[4]!.public_id}
                format={images[4]!.format}
                blurDataUrl={images[4]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-80 w-full lg:w-[50%] rounded-xl overflow-hidden">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>
      </div>


      <section>
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h3 className="text-5xl text-primary mt-20">
            Why Climb Mount Meru
          </h3>
          <br />
          <p>
            Mount Meru is perfect for trekkers who want a shorter, quieter, and more intimate climb. It’s a moderate trek that still gives you the thrill of reaching a major African summit, without the crowds. The climb takes just three to four days, which makes it ideal for those with limited time or for anyone preparing for Kilimanjaro.
          </p>
          <br />
          <p>

            Many climbers use Meru as an acclimatization hike before tackling Kilimanjaro. Its altitude helps the body adjust, increasing your chances of success on the higher peak. But even on its own, Meru is incredibly rewarding, the landscapes, wildlife, and sense of solitude make it unforgettable.
          </p>
        </div>

        <div className="grid gap-24 mt-24">
          <ContentSection
            title="A Wildlife Experience on Foot"
            description="Because Mount Meru lies inside a national park, the climb begins surrounded by wildlife. It’s not uncommon to see buffalo, giraffes, bushbucks, and even colobus monkeys along the lower slopes. To ensure safety, an armed ranger joins every trek, especially on the first day. This unique mix of hiking and safari is part of what makes Meru so special, you’re literally walking through an African wilderness before rising above it."
            image="https://res.cloudinary.com/drhl0yu7y/image/upload/v1708504469/meru/ziqisp2ftbmqnjl10vfo.png"
            reverse
          />

          <ContentSection
            title="The Scenery"
            description={
              [
                "Every section of Meru tells its own story. The lower slopes are draped in dense rainforest and waterfalls. Midway up, heather and wildflowers color the trails. Near the top, the volcanic ridges reveal dramatic views of the crater and beyond. On clear mornings, Kilimanjaro glows on the horizon, a distant reminder of where you stand in Africa.",
                "At the summit, Socialist Peak (4,566 m) offers a sunrise you’ll never forget, light spilling across the plains, clouds swirling below, and silence stretching endlessly."
              ]
            }
            image="https://res.cloudinary.com/drhl0yu7y/image/upload/v1762857871/meru/mount_meru_d0q59d.jpg"
            reverse={false}
          />

          <ContentSection
            title="Preparation & Safety"
            description={
              [
                "Mount Meru doesn’t require technical climbing skills, but fitness and preparation help you enjoy it more. Light training, such as long walks or hiking, two months before your trip is ideal. The climb is led by our professional Tazama guides, all trained in first aid and altitude response, ensuring you’re in good hands throughout.",
                "All trekkers stay in mountain huts, which are basic but clean and comfortable. Meals are freshly prepared by our mountain chefs, and our team makes sure you’re safe, warm, and well-fed each day."
              ]
            }
            image="https://res.cloudinary.com/drhl0yu7y/image/upload/v1762857871/meru/mount_meru_d0q59d.jpg"
            reverse
          />
        </div>

        <br />

        <div className="mt-20 mx-auto max-w-5xl px-4 md:px-8">
          <h3 className='text-primary text-5xl'>
            Why Climb with Tazama Africa
          </h3>
          <br />
          <p>
            At Tazama Africa, every climb is personal. We believe in small-group or private treks that focus on your pace, comfort, and safety. Our goal isn’t just to get you to the summit, but to help you connect deeply with the mountain and the people who make the journey possible.
          </p>
          <br />
          <p>
            Choosing Tazama means traveling responsibly. Your trek supports local guides, porters, and communities while helping preserve the mountain’s fragile environment for generations to come.
          </p>
        </div>
      </section>

      <section className="mt-20 mx-auto max-w-5xl px-4 md:px-8">
        <h3 className="text-5xl text-primary text-center">Featured Meru Itineraries</h3>
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
      </section>
      <br /><br /><br />
      <CallToAction />
    </>
  );
};

export default Page;

export async function getStaticProps({ draftMode = false }) {
  const images = await useFetchImages({ folderName: "meru" });
  const client = getClient(draftMode ? token : undefined);
  const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationContains, { pattern: "*mount meru*" });

  return {
    props: {
      images,
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
    revalidate: 60
  };
}
