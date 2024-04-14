import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="A journey to Africa's Highest Peak.">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="text-4xl text-[#A87133]">
              Reach the Summit of Kilimanjaro with Tazama: A Journey to Africa's
              Highest Peak
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Nestled in Northern Tanzania, Mount Kilimanjaro stands as Africa's
              tallest peak and the world's highest free-standing mountain,
              soaring to an impressive 5,895 meters. Every year, Kilimanjaro
              attracts around 30,000 trekkers, from seasoned mountaineers to
              ambitious beginners, all drawn to the challenge of reaching its
              summit.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Climbing Kilimanjaro with Tazama is an unforgettable adventure
              that combines personal achievement with the raw beauty of nature.
              The mountain offers a unique experience with its diverse
              ecosystems, from lush rainforests to alpine deserts, each
              providing its own set of challenges and rewards.
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
              The journey to the top of Kilimanjaro is accessible to a wide
              range of climbers, including young adventurers over the age of 10
              and those in their 60s and 70s with a zest for life and adventure.
              The main challenge lies in adapting to the altitude and the pace
              of ascent. However, with Tazama's support, reaching the summit is
              an attainable goal. Our expert guides are trained to prioritize
              your safety and success, making them your most valuable companions
              on this journey.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">
                So, who can climb Kilimanjaro? {"  "}
              </span>
              Anyone with a spirit of adventure and determination. Join the
              exclusive group of climbers who have successfully summited Mount
              Kilimanjaro, guided by the expertise of Tazama's dedicated team.
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
            <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
              <span className="text-primary">Best Time to Climb: </span>
              Mount Kilimanjaro welcomes climbers year-round, offering the
              chance to summit in any season. For those who prefer drier
              conditions, the recommended months are January to February and
              June to October. Selecting the best time to climb Kilimanjaro
              requires careful consideration of weather patterns and other
              factors, all of which Tazama is equipped to guide you through,
              ensuring a remarkable experience.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Ready to witness the world from the peak of Africa and fulfill a
              lifetime goal? Tazama is here to guide your journey to the summit
              of Kilimanjaro. Our commitment to safety, personalized service,
              and environmental stewardship ensures an unparalleled climbing
              experience. Answer the call of the mountain and reach the summit
              of Kilimanjaro with Tazama.
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
          href="/safaris/kilimanjaro/routes/lemosho"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className=" text-primary">Lemosho Route</p>
            <p className=" text-sm">
              The Lemosho Route, starting from the west at Londorossi Gate,
              unfolds a breathtaking ascent to Kilimanjaro...
            </p>
            <Button className="mt-5 text-lg text-white">View More</Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/machame"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Machame Route</p>
            <p className="font-now text-sm">
              The Machame Route, affectionately known as the "Whiskey Route," is
              not just a path to the summit of Kilimanjaro—it's...
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/routes/marangu"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Marangu Route</p>
            <p className="font-now text-sm">
              While Marangu might be the most accessible route, it requires
              careful preparation...
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
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
