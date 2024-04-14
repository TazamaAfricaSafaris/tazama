import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Machame Route">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto  lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="text-4xl text-[#A87133]">
              Experience the Machame Route with Tazama: Your Gateway to the
              Summit Kilimanjaro with Tazama: A Journey to Africa's Highest Peak
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The Machame Route, affectionately known as the "Whiskey Route," is
              not just a path to the summit of Kilimanjaro—it's a journey
              through some of the most breathtaking landscapes that Tanzania has
              to offer. Starting from Kilimanjaro's southern base, this route
              challenges and rewards you, crossing stunning ice fields on your
              way to the peak. It's a favorite among climbers who seek more than
              just a climb; they seek an adventure.
            </p>{" "}
            <p className="mt-5 text-lg font-bold text-primary">
              Why Choose the Machame Route with Tazama
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The Machame Route stands out for its scenic diversity and the
              robust challenge it offers, making it a magnet for adventurers.
              Its popularity stems from the enchanting views, diverse
              landscapes, and the opportunity to immerse yourself in the
              mountain's natural beauty. As you ascend, you'll encounter lush
              rainforests, alpine deserts, and sweeping moorlands, each
              ecosystem offering its unique allure.
            </p>
            <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
              <Image
                src={`${CLOUDINARY_URL}kilimanjaro/lgh2fwz5va3kxih34jek.jpg`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                placeholder="blur"
                blurDataURL={`${CLOUDINARY_URL}kilimanjaro/lgh2fwz5va3kxih34jek.blurDataUrl`}
              />
            </div>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Tazama ensures your journey on the Machame Route is unforgettable,
              providing camp-based accommodations that promise comfort amidst
              the wilderness. The path may be crowded at times, but the
              camaraderie among climbers and the sheer beauty of the
              surroundings make every step worth it.
            </p>{" "}
            <p className="mt-5 text-lg font-bold text-primary">
              How Challenging is the Machame Route?
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The Machame Route offers a moderate challenge, striking a balance
              between the Lemosho and Northern Circuit routes' difficulty levels
              and the easier Marangu route. Known affectionately as the "Whiskey
              Route," it's recognized for its more demanding nature. This
              nickname contrasts with the Marangu route, often referred to as
              the "Coca-Cola Route," highlighting the Machame route's increased
              physical demands and its appeal to those seeking a more
              adventurous climb.
            </p>
            <div className="relative mt-[50px] h-[400px] w-full lg:hidden lg:w-[50%]">
              <Image
                src={`${CLOUDINARY_URL}/kilimanjaro/xcchlu7mvfosvlbuqswy.png`}
                className="object-cover"
                layout="fill"
                alt="cover-img"
                blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/xcchlu7mvfosvlbuqswy.blurDataUrl`}
                placeholder="blur"
              />
            </div>
            <p className="mt-5 text-lg font-bold text-primary">
              Choosing Your Machame Adventure: 6 Days vs. 7 Days
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
              Tazama offers both 6-day and 7-day treks along the Machame Route,
              allowing you to choose based on your preference and readiness for
              acclimatization. The 7-day option is highly recommended, as it
              provides an extra day for your body to adjust to the altitude,
              enhancing your chances of a successful summit. Both options take
              you through iconic landmarks like the Shira Plateau, Lava Tower,
              and the Barranco Wall, with the main difference being the pace and
              time for acclimatization.
            </p>{" "}
            <p className="mt-5 text-lg font-bold text-primary">
              Journey Details
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The Machame Route spans approximately 63 km from gate to gate.
              It's a journey that tests your endurance but rewards you with
              unparalleled views and personal triumphs. The trek takes you from
              Machame Gate through various camps, culminating in the
              exhilarating summit at Uhuru Peak, followed by a descent to Mweka
              Camp and exit through Mweka Gate.
            </p>
            <p className="mt-5 text-lg font-bold text-primary">
              WHAT YOU WILL SEE ON MACHAME ROUTE
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              On the Machame Route, trekkers are treated to a spectacular array
              of sights and natural wonders, making each step of the journey an
              unforgettable experience. Here's what you'll see on the Machame
              Route as you ascend Kilimanjaro with Tazama:
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Rainforests: </span>
              The trek begins in lush, montane rainforests, where the dense
              canopy shelters a vibrant ecosystem. Expect to hear the calls of
              exotic birds and perhaps catch glimpses of monkeys and other
              wildlife. The verdant greenery and the fresh scent of the earth
              set the stage for the adventure ahead.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Shira Plateau: </span>
              As you emerge from the rainforest, you'll find yourself on the
              expansive Shira Plateau. This high-altitude plateau offers
              stunning views and the first real sense of the vastness of the
              African landscape beneath you. The plateau's flat expanse is a
              stark contrast to the dense forest you've just passed through.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Lava Tower: </span>
              The Lava Tower, a prominent volcanic rock formation, stands as a
              testament to Kilimanjaro's fiery past. This stop is not only a
              great place for acclimatization but also offers a unique landscape
              feature that adds to the diversity of the trek.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Barranco Wall: </span>
              Perhaps one of the most memorable parts of the Machame Route, the
              Barranco Wall presents a thrilling scramble. Climbing this steep,
              rocky face is a challenge, but the sense of achievement and the
              panoramic views from the top are unparalleled.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Alpine Deserts: </span>
              As you ascend further, the landscape shifts to an alpine desert.
              Here, the vegetation is sparse, and the terrain is rugged,
              offering a moon-like appearance. The stark beauty of this zone is
              mesmerizing, with wide-open skies and the mountain's slopes
              stretching out into the distance.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Snow-Capped Summit: </span>
              Nearing the summit, the temperature drops, and the landscape once
              again transforms, this time into icy glaciers and snow fields. The
              contrast of the equatorial sun on the snow and ice creates a
              surreal environment, culminating in the awe-inspiring view from
              Uhuru Peak—the highest point in Africa.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Stellar Night Skies: </span>
              Throughout the trek, the absence of light pollution allows for
              some of the most spectacular stargazing opportunities. The clarity
              of the night sky, filled with countless stars, is a sight to
              behold and a highlight for many trekkers.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Fauna and Flora: </span>
              While the focus is often on the dramatic landscapes, the Machame
              Route also offers the chance to see Kilimanjaro's unique
              high-altitude plants, such as the giant groundsels and lobelias,
              as well as birds and, if you're lucky, some of the larger wildlife
              that roam the lower slopes.
            </p>
            <p className="mt-5 text-lg font-bold text-primary">
              Climb with Confidence
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Ready to conquer the Roof of Africa with the perfect blend of
              challenge and beauty? The Machame Route, affectionately known as
              the "Whiskey Route," offers an invigorating trek filled with
              breathtaking views and diverse landscapes. It's a journey that
              tests your limits while rewarding you with the unparalleled beauty
              of Mount Kilimanjaro.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              At Tazama, we're dedicated to making your Kilimanjaro dream a
              reality. Our expert guides, personalized services, and commitment
              to eco-friendly practices ensure a safe, memorable, and fulfilling
              adventure. Whether you're a seasoned hiker or looking to
              accomplish a bucket-list challenge, the Machame Route with Tazama
              is your gateway to an epic adventure.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Don't wait any longer to make your Kilimanjaro dreams come true.
              Contact Tazama today to book your Machame Route trek and step into
              the adventure that awaits you on Africa's highest peak.
            </p>
          </div>
        </div>

        <section className="mb-10 hidden space-y-5 py-8 lg:block">
          <div className="relative h-[600px] w-full lg:w-[400px]">
            <Image
              src={`${CLOUDINARY_URL}kilimanjaro/lgh2fwz5va3kxih34jek.jpg`}
              className="object-cover"
              layout="fill"
              alt="cover-img"
              placeholder="blur"
              blurDataURL={`${CLOUDINARY_URL}kilimanjaro/lgh2fwz5va3kxih34jek.blurDataUrl`}
            />
          </div>

          <div className="relative h-[300px] w-full lg:w-[400px]">
            <Image
              src={`${CLOUDINARY_URL}/kilimanjaro/xcchlu7mvfosvlbuqswy.png`}
              className="object-cover"
              layout="fill"
              alt="cover-img"
              blurDataURL={`${CLOUDINARY_URL}/kilimanjaro/xcchlu7mvfosvlbuqswy.blurDataUrl`}
              placeholder="blur"
            />
          </div>
        </section>
      </section>

      <section className="mx-auto mt-5 flex w-full flex-col items-center  space-y-1  lg:flex-row  lg:items-start lg:space-x-[1%] lg:space-y-0  ">
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/rongai"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1677519910517-5bfee903a814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lsaW1hbmphcm8lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" />
          </div>

          <div className="p-3">
            <p className=" text-primary">Rongai Route</p>
            <p className=" text-sm">
              The Rongai Route offers a unique approach to conquering Mount
              Kilimanjaro, standing out with its
            </p>
            <Button className="mt-5 text-lg text-white">View More</Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/northern-circuit"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1677519917377-118338dd2ed1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lsaW1hbmphcm8lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Northern Circuit</p>
            <p className="font-now text-sm">
              The Northern Circuit boasts the highest success rate among all
              Kilimanjaro routes,...
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/umbwe"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1568259547325-f08f48165cfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpbGltYW5qYXJvJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Umbwe Route</p>
            <p className="font-now text-sm">
              The Umbwe Route, known for its steep, direct climb to the summit
              of Mount Kilimanjaro...
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
