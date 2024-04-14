import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Why you should climb mount Kilimanjaro">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Climbing Mount Kilimanjaro is more than an adventure; it's a
              profound exploration of personal limits and a testament to the
              human spirit's resilience. At Tazama, we've witnessed countless
              adventurers transform through this journey, each with their unique
              motivation, but all united in the quest for that exhilarating
              moment of triumph atop Africa's highest peak. Let's delve into why
              Kilimanjaro beckons and how it has become a pivotal chapter in the
              lives of many.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Kilimanjaro
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Mount Kilimanjaro stands as a beacon for those yearning to conquer
              one of the world's Seven Summits. Its allure lies not just in its
              majestic height but in its accessibility. Kilimanjaro challenges
              yet welcomes adventurers with open arms, requiring no technical
              climbing experience. The mountain offers various routes, each
              presenting its own set of vistas and challenges, allowing climbers
              to choose their path based on ability and desire for adventure.
              With Tazama, you embark on a journey tailored to your spirit of
              adventure, ensuring an unforgettable ascent.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              A Microcosm of the World's Beauty
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Ascending Kilimanjaro is like traversing the globe's climates
              within a single trek. From lush rainforests buzzing with life to
              the haunting beauty of the alpine desert, each zone is a world
              unto itself, culminating in the icy splendor of the summit. This
              natural marvel promises a kaleidoscope of breathtaking landscapes,
              immortalized in the photographs and memories of those who venture
              through its realms.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Wildlife and Wilderness
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Kilimanjaro is not only a climber's paradise but a sanctuary for
              diverse wildlife and unique flora. The mountain's unique
              ecosystems host species that enchant nature enthusiasts and add an
              extraordinary dimension to the climb. Imagine trekking through the
              habitat of majestic elephants or marveling at the Kilimanjaro
              tree's surreal silhouette against the sky – these are moments that
              connect you deeply with the earth's wonders.
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
            <h3 className="mt-5 text-2xl font-bold text-primary">
              The Triumph of Personal Achievement
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Climbing Kilimanjaro is a celebration of personal milestones and
              human endurance. It's a quest that people undertake to mark
              significant life events or to challenge their own limits. Reaching
              the summit is a personal victory, a testament to one's strength,
              perseverance, and courage. It's an experience that reshapes
              perspectives, inspires new beginnings, and imprints a sense of
              achievement that lasts a lifetime.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Contributing to the Conservation and Community
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              By choosing Kilimanjaro as your adventure, you contribute to the
              conservation of this magnificent mountain and the well-being of
              the local community. Tazama's commitment to sustainable tourism
              means that your journey supports environmental preservation
              efforts and the livelihoods of the incredible Kilimanjaro porters,
              guides, and local businesses. Your climb becomes a part of a
              larger story of positive impact.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Your Kilimanjaro Journey with Tazama
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              With Tazama, climbing Kilimanjaro is not just about reaching the
              summit; it's about embracing each step, each breath, and each
              moment of this life-changing journey. Our luxury expeditions
              ensure that your adventure is enveloped in comfort, safety, and
              unparalleled personal care, allowing you to focus fully on the
              beauty and challenge of the climb.
              <br />
              <br />
              Kilimanjaro beckons not just as a mountain to be conquered but as
              a journey to be lived. It's an invitation to step beyond the
              familiar, to test the boundaries of what you believe is possible,
              and to discover the strength that lies within. Are you ready to
              answer the call? Join us at Tazama for an expedition that
              transcends the ordinary, transforming your dream of climbing
              Kilimanjaro into a reality wrapped in luxury and personal
              achievement.
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
          href="/safaris/kilimanjaro/blogs/summit-night"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Summit Night</p>
            <p className="font-now text-sm">
              As you prepare to conquer Mount Kilimanjaro, the pinnacle of your
              adventure awaits during the enigmatic summit night.
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/blogs/kilimanjaro-tipping-ceremony"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Tipping Ceremony</p>
            <p className="font-now text-sm">
              Learn about the tipping culture in climbing the tallest mountain
              in Africa.
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/blogs/recovery-journey"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1677519917377-118338dd2ed1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Recovery Journey</p>
            <p className="font-now text-sm">
              Recovery Journey After climbing Kilimanjaro: How many days it
              takes to recover from climbing kilimanjaro
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
      </section>
    </BlogLayout>
  );
}
