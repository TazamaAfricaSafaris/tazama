import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";

import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Kilimanjaro facts">
      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
          <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Mount Kilimanjaro, a marvel of nature, stands as a beacon of
                adventure for climbers worldwide. Located in Tanzania, this
                giant isn't just any mountain; it's Africa's highest peak and
                the world's tallest free-standing mountain, offering unique
                challenges and breathtaking beauty. Tazama brings you closer to
                understanding this majestic summit with essential Mount
                Kilimanjaro facts, ensuring you're well-prepared for your
                ascent.
              </p>{" "}
              <p className="mt-5 text-lg font-bold text-primary">
                Kilimanjaro Geography and Altitude:
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Nestled in the northern circuit of Tanzania, Kilimanjaro is not
                just a mountain; it's a geological wonder formed by the eruption
                of three volcanic cones: Shira, Kibo, and Mawenzi. Kibo houses
                the summit, Uhuru Peak, which rises to a staggering 5,895 meters
                (19,341 ft) above sea level. Despite its dormant status, with
                the last significant eruption occurring over 360,000 years ago,
                Kilimanjaro continues to captivate with its ash pit, a reminder
                of its volcanic nature.
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
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                <span className="text-primary">
                  Kilimanjaro Weather and Climatic Zones: {"  "}
                </span>
                Kilimanjaro's weather is a complex interplay of trade winds,
                creating diverse ecological systems across its slopes. The
                mountain experiences two main seasons: a wet season, bringing
                daily rains in March, and a dry season from April to October,
                characterized by strong anti-trade winds. These climatic
                variations give rise to five distinct ecological zones - from
                the cultivated lower slopes through the rainforest, heath and
                moorland, alpine desert, to the arctic summit. Each zone offers
                unique flora, fauna, and challenges, making the climb a journey
                through contrasting worlds.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Kilimanjaro Climbing Routes{" "}
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Choosing the right path is crucial for a successful summit, and
                Tazama offers guidance on Kilimanjaro's various routes. Each
                route offers a different experience, from the scenic vistas of
                the Machame and Lemosho routes to the gradual ascent of the
                Rongai. Understanding the routes' specifications is key to
                maximizing your summit success chances, emphasizing the "climb
                high, sleep low" strategy for optimal acclimatization.
              </p>
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
              <p className="mt-5 text-lg font-bold text-primary">
                Kilimanjaro Summit Success Rate
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
                Success on Kilimanjaro is closely linked to the chosen route and
                the number of days spent on the mountain. Longer itineraries
                significantly increase success rates, allowing more time for
                acclimatization. Tazama's expertise shines here, advising on the
                best routes and strategies to ensure you're among the successful
                climbers who reach Uhuru Peak. With proper preparation and
                Tazama's support, climbers can enjoy success rates as high as
                95% on extended treks.
              </p>{" "}
              <p className="mt-5 text-lg font-bold text-primary">
                Kilimanjaro Preparation and Acclimatization
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
                Climbing Kilimanjaro doesn't require technical skills, but it
                demands respect for altitude and proper acclimatization. The
                "sleep low, trek high" principle is essential, as is choosing a
                route that allows your body to adjust to higher elevations
                gradually. Tazama emphasizes the importance of selecting the
                right itinerary, with longer routes offering higher success
                rates and a more enjoyable climb.
              </p>{" "}
              <p className="mt-5 text-lg font-bold text-primary">FACTS:</p>
              <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
                Mount Kilimanjaro, the towering peak that stands as Africa's
                highest mountain, holds a wealth of fascinating facts and
                stories that captivate climbers and adventurers from around the
                globe. Here's a closer look at some of these intriguing aspects
                of Kilimanjaro:
              </p>{" "}
              <p className="mt-5 text-lg font-bold text-primary">
                The Real Meaning of Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                The name 'Kilimanjaro' is a blend of the Swahili word 'Kilima'
                (meaning "mountain") and 'Njaro,' interpreted as "whiteness."
                There are various theories about the name's origin. Some suggest
                it's a European pronunciation of a KiChagga phrase translating
                to "we failed to climb it," highlighting the mountain's daunting
                presence. Others believe the local Swahili communities referred
                to it as the "mountain of greatness" or "Mountain of Caravans,"
                pointing to its historical significance in trade routes.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Kilimanjaro Fastest Ascent
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                In 2014, Swiss climber Karl Egloff set a world record for the
                fastest ascent and descent of Kilimanjaro, completing the
                challenge in just 6 hours and 42 minutes. His remarkable
                achievement was made possible through extensive high-altitude
                training, allowing his body to adjust to the thin air and
                rigorous demands of the climb. This feat underscores the
                importance of preparation and acclimatization for anyone
                considering the climb, affirming that Kilimanjaro can be safely
                ascended by beginners with the right approach.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Highest Cricket Match
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                September 2014 witnessed a unique event on Kilimanjaro - the
                highest game of cricket ever recorded. A team of 30 players and
                officials embarked on the journey to Kilimanjaro's crater camp
                to play, merging the spirit of adventure with the love of sport,
                showcasing the mountain's versatility as a venue for
                extraordinary human endeavors
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Highest Pizza Delivery
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Pizza Hut took pizza delivery to new heights in May 2016 by
                setting a Guinness World Record for the highest altitude pizza
                delivery on land when they delivered a pizza to the top of
                Kilimanjaro. This lighthearted stunt not only highlighted the
                brand's innovative spirit but also the mountain's accessibility
                and the diverse experiences climbers can have.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Africa’s Tallest Tree
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Kilimanjaro is home to Africa's tallest tree, an Entandrophragma
                excelsum species, standing at an impressive height of 81.5
                meters. Approximately 600 years old, this towering tree is a
                testament to the mountain's rich biodiversity and the wonders
                that await explorers.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                Golf On Kilimanjaro
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Though it's not officially confirmed who made the longest golf
                shot on Kilimanjaro, there are stories of golf being played from
                Uhuru Peak to the crater rim. These anecdotes add a whimsical
                element to the mountain's lore, illustrating the playful human
                spirit amidst nature's grandeur.
              </p>
              <p className="mt-5 text-lg font-bold text-primary">
                A Mountain of Natural Wonders
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Mount Kilimanjaro is a treasure trove of natural wonders,
                offering dramatic scenic views across its various climbing
                routes. From lush rainforests to alpine deserts and the icy
                summit, Kilimanjaro presents a microcosm of the earth's
                ecological diversity. Its unique climate zones, flora, and fauna
                make each step of the climb a discovery, promising an
                unforgettable adventure for those who seek to conquer it.
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Embark on the journey of a lifetime with Tazama Africa, your
                trusted companion on the majestic slopes of Mount Kilimanjaro.
                As you've discovered, Kilimanjaro is not just a mountain; it's a
                tapestry of awe-inspiring facts, records, and natural wonders
                that beckon adventurers from across the globe. With Tazama
                Africa, you're choosing more than just a climb; you're selecting
                an experience that promises safety, unparalleled support, and a
                deep connection with the natural world.
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Our expert guides and meticulously planned itineraries are
                designed to offer you the highest chances of success, whether
                you're aiming to set new records or simply wish to bask in the
                breathtaking beauty of Africa's highest peak. We understand the
                mountain's challenges and delights and are committed to making
                your journey as rewarding as it is memorable.
              </p>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Join us at Tazama Africa, where your dream of conquering
                Kilimanjaro becomes our mission. Trust in our experience, revel
                in the beauty of nature, and achieve what few dare to imagine.
                <br />
                Let's make your Kilimanjaro adventure unforgettable. Contact us
                today to start planning your journey to the roof of Africa.
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
            href="/safaris/kilimanjaro/guides/attitude-sickness"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className=" text-primary">Attitude Sickness</p>
              <p className=" text-sm">
                The key to a successful summit isn't just physical fitness but
                how well you adapt to the altitude.
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
