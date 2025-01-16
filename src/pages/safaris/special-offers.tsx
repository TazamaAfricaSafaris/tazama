/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "../../components/PrimaryHeader";
import { safaris } from "~/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeadSEO from "~/components/ui/Head";
import CallToAction from "~/components/CallToAction";
import { base_keywords } from "~/lib/constants";
import ContentSection from "~/components/ContentSection";
import {
  trekkingOffers,
  trekkingOffersIncludes,
  trekkingOffersExcludes,
  safariOffers,
  safariOffersIncludes,
  safariOffersExcludes,
  services
} from "~/data/specialOffers"

const Page = () => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return (
    <>
      <HeadSEO title="Tazama Special Offers" keywords={base_keywords} />
      <PrimaryHeader
        image={`adventure.webp`}
        title={`Special Offer for International Symposium on Artemisia attendees`}
      />

      <div className="grid gap-16 md:gap-24 mt-24">
        <ContentSection
          rank={0}
          image={"https://res.cloudinary.com/drhl0yu7y/image/upload/v1736412081/special-offers/kilimanjaro_scr60f.jpg"}
          title={"About Tazama"}
          reverse={false}
          description={`
            Tazama Africa is a luxurious and personalized travel company based in Arusha, Tanzania, renowned for offering bespoke safari experiences that transcend the ordinary. With over a decade of expertise in the safari industry, we specialize in curating unique journeys that intimately connect our clients with the stunning landscapes and rich cultural tapestry of East Africa
            \n\n
            Our commitment extends beyond exceptional travel experiences to encompass environmental stewardship and community empowerment. We operate with a deep-seated respect for local cultures, ecosystems and sustainability ensuring every adventure with us is not only exhilarating but also responsible and enriching. At Tazama Africa, we don't just plan trips; we craft memories that last a lifetime, all while contributing positively to the preservation of our beautiful planet and the well-being of local communities
          `}
        />
      </div>

      <div className="max-w-5xl mx-auto mt-14 mb-28 max-lg:px-4 grid grid-cols-1 w-full">
        <h3
          className="text-6xl mx-auto text-center text-primary w-full flex justify-center items-center gap-4 before:border before:border-dark/75 before:max-w-20 before:w-full before:bg-dark/75 after:border after:border-dark/75 after:max-w-20 after:w-full after:bg-dark/75"
        >
          Our Services
        </h3>
        <div className="flex flex-row gap-4 justify-center mt-8 max-md:flex-wrap">
          {
            services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0, opacity: 1,
                  transition: {
                    duration: 0.5 * index
                  }
                }}
                viewport={{
                  once: false
                }}
                className="bg-primary w-full max-w-40 h-40 rounded-full flex items-center justify-center p-4"
              >
                <h6 className="text-center text-white text-xl leading-6">{service}</h6>
              </motion.div>
            ))
          }
        </div>
      </div >

      <h2
        className="text-center px-4 text-6xl text-primary mt-40 flex justify-center items-center gap-4 before:border before:border-dark/75 before:max-w-36 before:w-full before:bg-dark/75 after:border after:border-dark/75 after:max-w-36 after:w-full after:bg-dark/75"
      >
        Our Special Offers
      </h2>

      <div className="max-w-5xl mx-auto my-20 max-lg:px-4 mt-20">
        <h3
          className="my-4 text-5xl text-primary flex items-center md:gap-4 gap-2 after:border after:border-dark/75 after:max-w-14 md:after:max-w-24  after:w-full after:bg-dark/75"
        >
          Our Trekking Offers
        </h3>
        <p>
          Prepare to embark on an extraordinary journey through the heart of Tanzania's wilderness, where every step brings you closer to the summit of Kilimanjaro
          <br /><br />
          As you set foot on Meru and Kilimanjaro's slopes, you'll be stepping into a world of unparalleled natural beauty and untamed wilderness. From dense rain forests teeming with life to rugged alpine deserts, the landscapes you'll encounter on your trek are as diverse as they are breathtaking.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="h-72 bg-gray-400 relative overflow-hidden">
            <Image
              src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1736412634/special-offers/pexels-balazsimon-15994016_tmxkxd.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-72 bg-gray-400 relative overflow-hidden">
            <Image
              src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1736412784/special-offers/209117334517meru_pkcssc.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <br />
        <h4 className="text-primary text-4xl mb-2">Trekking options with prices</h4>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="font-raleway text-center bg-primary text-lightest">
              <th className="border border-dark/40 p-4 w-[70%]">Trek</th>
              <th className="border border-dark/40 p-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              trekkingOffers.map((offer, index) => (
                <tr className={`${index % 2 === 0 ? "" : "bg-lighter/20"} font-raleway`} key={index}>
                  <td className="border border-dark/40 p-4">{offer.offer}</td>
                  <td className="border border-dark/40 p-4">{USDollar.format(offer.price)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <p className="text-center mx-auto w-full mt-4">Prices are per person in USD based on a private trek</p>
        <Link href="https://forms.gle/6uWCYUxxd7QPQUEa9" className="border border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-colors font-raleway mx-auto flex items-center text-center w-fit mt-4">
          Book this Trip
        </Link>

        <div className="grid gap-4 md:grid-cols-2 mt-16">
          <div>
            <h4 className="text-primary text-3xl">Includes</h4>
            <ul className="list-disc list-inside max-lg:pl-4">
              {
                trekkingOffersIncludes.map(include => <li key={include}>{include}</li>)
              }
            </ul>
          </div>
          <div>
            <h4 className="text-primary text-3xl">Excludes</h4>
            <ul className="list-disc list-inside max-lg:pl-4">
              {
                trekkingOffersExcludes.map(include => <li key={include}>{include}</li>)
              }
            </ul>
          </div>
        </div>

        <div className=" mt-20">
          <h3 className="my-4 text-5xl text-primary flex items-center md:gap-4 gap-2 after:border after:border-dark/75 after:max-w-24 after:w-full after:bg-dark/75">Our Safari Offers</h3>

          <div className="flex flex-col gap-8">
            {
              safariOffers.map((safari, index) => (
                <div className="border border-dark/40 p-6 relative bg-white rounded-xl" key={index}>
                  <h4 className="text-primary mb-6 text-4xl">{safari.title}</h4>
                  <div className="grid gap-4 md:gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                      {
                        safari.days.map(day => (
                          <div key={day.title}>
                            <p className="text-dark text-xl mb-1">{day.title}</p>
                            <p>{day.description}</p>
                          </div>
                        ))
                      }
                    </div>
                    <div className="bg-gray-400 w-full h-64 md:h-72 sticky top-2 rounded-xl overflow-hidden">
                      <Image
                        src={safari.image}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="border border-dark/40 my-8 w-1/5 mx-auto"></div>

                  <div className="flex gap-4 max-md:flex-wrap justify-between items-center">
                    <p>
                      <span className="text-primary text-4xl font-serif">
                        {USDollar.format(safari.price)}
                      </span>
                      <span className="font-raleway text-base text-black"> Price per person joining group</span>
                    </p>
                    <div>
                      <Link href="https://forms.gle/xv2Htjwphgca7wGr6" className="border border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-colors font-raleway">
                        Book this Trip
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-16">
            <div>
              <h4 className="text-primary text-3xl">Includes</h4>
              <ul className="list-disc list-inside max-lg:pl-4">
                {
                  safariOffersIncludes.map(include => <li key={include}>{include}</li>)
                }
              </ul>
            </div>
            <div>
              <h4 className="text-primary text-3xl">Excludes</h4>
              <ul className="list-disc list-inside max-lg:pl-4">
                {
                  safariOffersExcludes.map(include => <li key={include}>{include}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br /> <br />
      <CallToAction />
    </>
  );
};

export default Page;
