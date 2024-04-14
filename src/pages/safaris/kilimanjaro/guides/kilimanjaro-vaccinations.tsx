import Image from "next/legacy/image";
import Link from "next/link";
import BlogLayout from "~/components/ui/BlogLayout";
import BlurImage from "~/components/ui/BlurImage";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";


export default function Page() {
  return (
    <BlogLayout title="Vaccination for Kilimanjaro">
      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
          <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Vaccinations: Your Shield Against Diseases
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Conquering Mount Kilimanjaro, the tallest freestanding mountain
                in the world, is an exhilarating experience that demands
                meticulous preparation, especially when it comes to health and
                safety. Tazama is here to ensure that your adventure is not only
                memorable but also safeguarded against any health risks that
                might arise due to high altitude and the tropical environment of
                Tanzania.
              </p>{" "}
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Vaccinations play a crucial role in protecting trekkers from
                various diseases that can be encountered while climbing
                Kilimanjaro. These vaccines prime your immune system to fight
                off pathogens, ensuring you remain healthy and focused on your
                trek.
              </p>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                  placeholder="blur"
                  blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
                />
              </div>
              <p className="mt-5 text-2xl font-bold text-primary">
                Essential Vaccinations for Kilimanjaro
              </p>
              <ul className="list-disc pl-10 text-lg text-[#757371]">
                <li>
                  <span className="text-primary">Yellow Fever: </span> Mandatory
                  for travelers coming from or transiting through a yellow
                  fever-endemic area. It provides protection against this
                  mosquito-borne virus, which can have severe consequences.
                </li>
                <li>
                  <span className="text-primary">Hepatitis A and B: </span>{" "}
                  Recommended to prevent these liver infections transmitted
                  through contaminated food, water, or bodily fluids.
                </li>
                <li>
                  <span className="text-primary">Typhoid: </span> Advised for
                  travelers to Tanzania, as it can be contracted through
                  contaminated food and water.
                </li>
                <li>
                  <span className="text-primary">
                    Tetanus, Diphtheria, and Polio:{" "}
                  </span>{" "}
                  These booster shots are crucial to prevent infections that can
                  be life-threatening.
                </li>
                <li>
                  <span className="text-primary">Rabies: </span> Recommended for
                  trekkers who might be exposed to wild or domestic animals.
                </li>
                <li>
                  <span className="text-primary">Meningitis: </span> Especially
                  for those who might stay longer or visit rural areas.
                </li>
                <li>
                  <span className="text-primary">
                    Measles, Mumps, and Rubella (MMR):{" "}
                  </span>{" "}
                  Given the outbreaks in some regions, this vaccine is advised.
                </li>
              </ul>
              <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
                <Image
                  src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
                  className="object-cover"
                  layout="fill"
                  alt="cover-img"
                  blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
                  placeholder="blur"
                />
              </div>
              <p className="mt-5 text-2xl font-bold text-primary">
                Malaria Prevention
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Malaria is a concern in Tanzania, including the lower slopes of
                Kilimanjaro. Anti-malarial medication is recommended, alongside
                measures to prevent mosquito bites, such as using insect
                repellent and wearing long sleeves and pants.
                <br />
                <br />
                Be sure you understand how an anti-malarial may affect your
                sleep, appetite and exposure to sun before you begin,
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Altitude Sickness: Awareness and Prevention
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Altitude sickness is a significant concern on Kilimanjaro.
                Tazama emphasizes the importance of acclimatization and adopting
                a slow pace ("pole pole" in Swahili) to reduce the risk. Our
                guides are trained to recognize symptoms of altitude sickness
                early and take necessary actions, including descending if
                conditions worsen.
                <br />
                <br />
                You can also consider taking diamox which can help prevent
                altitude sickness.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Stay Hydrated and Nourished
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Hydration and proper nutrition are key to a successful summit.
                Tazama provides ample clean water and nutritious meals to keep
                you energized and hydrated throughout your climb.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Tazama's Commitment to Your Safety
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Choosing Tazama means opting for a partner who prioritizes your
                safety above all. Our team, equipped with the necessary medical
                knowledge and evacuation plans, ensures you have a safe and
                enjoyable trekking experience.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Preparing for Your Trek
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                <span className="text-primary">
                  Consult with a healthcare provider{" "}
                </span>
                to determine the vaccinations and medications you'll need based
                on your health history and the specifics of your trip. Start the
                vaccination process early, as some vaccines require multiple
                doses or need to be administered well in advance of your travel
                date.
              </p>
              <p className="mt-5 text-2xl font-bold text-primary">
                Embark With Confidence
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                With Tazama, embark on your Kilimanjaro adventure with the
                confidence that you're fully prepared for the physical and
                health challenges ahead. Our comprehensive care and support
                system is designed to ensure you can focus on the journey and
                the joy of reaching the roof of Africa safely.
              </p>
            </div>
          </div>

          <section className="mb-10 hidden space-y-5 py-8 lg:block">
            <div className="relative h-[600px] w-full lg:w-[400px]">
              <Image
                src={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.jpg`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/glossugv7zlnlgp3oie4.blurDataUrl`}
              />
            </div>

            <div className="relative h-[300px] w-full lg:w-[400px]">
              <Image
                src={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.png`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/uva3xbqf8xr2dn1cgwzd.blurDataUrl`}
                placeholder="blur"
              />
            </div>
          </section>
        </section>

        <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/kilimanjaro-facts"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage
                src="
            https://images.unsplash.com/photo-1635865897833-38bc0f8aee44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww"
              />
            </div>

            <div className="p-3">
              <p className=" text-primary">Kilimanjaro Facts</p>
              <p className=" text-sm">
                Mount Kilimanjaro, a marvel of nature, stands as a beacon of
                adventure for climbers worldwide.
              </p>
              <Button className="mt-5 text-lg text-white">View More</Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/kilimanjaro-vaccinations"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Kilimanjaro Vaccinations</p>
              <p className="font-now text-sm">
                Be sure you understand how an anti-malarial may affect your
                sleep, appetite and exposure to sun before you begin,
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/training-for-kilimanjaro"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Training for Kilimanjaro</p>
              <p className="font-now text-sm">
                Climbing Mount Kilimanjaro is an intimate and bonding experience
                with your team, but privacy is paramount,
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
        </section>
      </section>
    </BlogLayout>
  );
}
