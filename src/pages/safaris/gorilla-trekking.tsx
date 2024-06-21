import PrimaryHeader from "~/components/PrimaryHeader";

import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";

const Page = () => {
  return (
    <>
      <HeadSEO title="Gorilla Trekking" />
      <PrimaryHeader image={`chimps.webp`} title="Gorilla Trekking" />
      <div className="mx-auto  max-w-7xl px-4 md:px-8 py-10">
        <div className="mb-10">
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            One of the lesser known experiences of East Africa is the
            opportunity to be in close proximity to some of our closest living
            relatives- gorillas and chimpanzees. Watching them in their natural
            habitat provides a rare glimpse into the evolutionary connections
            between humans and our primate cousins. They are also located in
            some of the most breathtaking landscapes in the world, the wildlife
            viewing notwithstanding, the trekking is sure to give you memories
            to last a lifetime.
          </p>
          <h3 className="pt-5 text-4xl text-[#A87133]">Chimpanzee Trekking</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Within Tanzania, there are three national parks you can visit to
            track chimps. Mahale National Park for those looking for an
            exclusive and luxurious experience. Rubundo for those with limited
            amount of time and a flexible budget and Gombe for those with some
            time and limited budget. Chimpanzee tracking is ideal for wildlife
            enthusiasts seeking intimate encounters with these intelligent
            primates and immersing themselves in the wonders of the jungle.
          </p>

         
        </div>

        <div className="">
          <h3 className="text-4xl text-[#A87133]">Gorilla Tracking</h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Embark on a journey of discovery as you track endangered mountain
            gorillas in the misty mountains of Uganda and Rwanda. Trek through
            dense forests and rugged terrain, guided by our experienced trackers
            who will lead you to the heart of gorilla territory. Witness these
            magnificent creatures in their natural habitat, forging
            unforgettable connections amidst the towering trees and cascading
            waterfalls. Whether you choose to explore Uganda's Bwindi
            Impenetrable Forest or Rwanda's Volcanoes National Park, each
            destination offers a once-in-a-lifetime opportunity to observe these
            gentle giants up close. Gorilla tracking is perfect for adventurous
            travelers seeking a unique and immersive wildlife experience in some
            of Africa's most breathtaking landscapes.
          </p>

          <p className="mb-3 mt-5 text-3xl text-primary">
            Which Option Is Right for You?
          </p>
          <ul className="list-disc text-[#757371] space-y-5 text-xl pl-5">
            <li>
              Chimpanzee Tracking: Ideal for wildlife enthusiasts and nature
              lovers seeking intimate encounters with chimpanzees in their
              natural habitat. Suitable for travelers 11 years and older and a
              basic fitness level.
            </li>
            <li>
              Gorilla Tracking: Perfect for adventurous travelers and
              photography enthusiasts looking to observe endangered mountain
              gorillas in the wild. Requires a moderate level of fitness due to
              trekking through rugged terrain.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
