import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogCard from "~/components/ui/BlogCard";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Marangu Route">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="text-4xl text-[#A87133]">
              Discover the Marangu Route with Tazama: The Classic Path to
              Kilimanjaro's Summit
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">The Marangu Route, </span>{" "}
              affectionately known as the "Coca-Cola Route," offers a unique
              trekking experience on Mount Kilimanjaro, combining comfort with
              adventure. As the only route featuring hut accommodations, Marangu
              stands out for those seeking a bit more comfort during their
              ascent to Africa's highest peak.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Starting from the southeast, Marangu is favored for its direct and
              less strenuous path, making it an ideal choice for both novice and
              seasoned hikers. While it may be known as the easiest route, the
              beauty of the landscapes and the warmth of the hut hospitality
              enrich the journey to the summit.
            </p>
            <p className="mt-5 text-lg font-bold text-primary">
              Why Choose the Marangu Route?
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Marangu's gentle slopes offer a straightforward trek, perfect for
              those looking for a less technical climb. The route's unique hut
              accommodations provide a cozy retreat after a day's trek, sparing
              you the hassle of setting up camp. With an added day for
              acclimatization, your chances of reaching Uhuru Peak, and enjoying
              the panoramic vistas at the summit, significantly increase.
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
            <p className="mt-5 text-lg font-bold text-primary">
              Navigating the Marangu Route
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              While Marangu might be the most accessible route, it requires
              careful preparation and respect for the mountain's challenges. The
              key to success on Marangu lies in taking an extra day for
              acclimatization, ensuring your body adjusts to the higher
              altitudes, thereby enhancing your summit success rate.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The journey covers approximately 68 km, beginning at Marangu Gate
              and ascending to Mandara Hut, before reaching the striking Mawenzi
              Ridge for acclimatization. As you venture further, each step
              brings you closer to the awe-inspiring summit, culminating in a
              midnight trek to Uhuru Peak, where the sunrise over Africa awaits.
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
              What You'll Experience on Marangu route
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371] lg:mt-0">
              On the Marangu Route, also known as the "Coca-Cola" route,
              climbers will be treated to a variety of sights and experiences
              that capture the essence of Mount Kilimanjaro's diverse ecosystems
              and breathtaking landscapes. Here's a glimpse into what you'll see
              and encounter on this classic path:
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Rainforest Zone: </span>
              The trek begins in the lush montane rainforest that envelops the
              lower slopes of Kilimanjaro. This dense, green canopy is alive
              with the chirps and calls of exotic birds, and if you're lucky,
              you might catch a glimpse of monkeys swinging through the trees or
              the rare, shy dik-dik darting through the underbrush.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Mandara Huts: </span>
              The first campsite on the Marangu Route, nestled in a clearing
              surrounded by the rainforest. It's a serene spot to rest and soak
              in the natural beauty of the forest.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Maundi Crater: </span>A short hike
              from the Mandara Huts, Maundi Crater offers climbers their first
              taste of the stunning vistas beyond the rainforest. From here, you
              can see the vast plains of Kenya and the distant, shimmering
              waters of Lake Chala.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Moorland Zone: </span>
              As you ascend, the dense forest gives way to the open moorland,
              where giant heathers and lobelias dominate the landscape. This
              zone offers expansive views of the surrounding plains and the
              jagged Mawenzi Peak.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Horombo Huts: </span>
              The second campsite, located in the alpine moorland, offers
              breathtaking views of both Kibo and Mawenzi peaks. Sunrises and
              sunsets from Horombo are spectacular, with the clouds often below
              you, creating a sea of clouds effect.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Alpine Desert: </span>
              Beyond Horombo, the terrain changes dramatically into an alpine
              desert. This stark, otherworldly landscape is characterized by
              wide-open spaces, rocky paths, and sparse vegetation. The sense of
              isolation and the vastness of the mountain can be truly felt here.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Kibo Huts: </span>
              The final camp before the summit push, situated at the edge of the
              alpine desert with the summit of Kibo looming overhead. It's a
              stark, moon-like landscape, with the peak of Kilimanjaro beckoning
              in the distance.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Uhuru Peak: </span>
              The culmination of your trek, the summit of Kilimanjaro, offers
              unparalleled views of the African continent. Standing atop Uhuru
              Peak, you'll be surrounded by glaciers and ice cliffs, with the
              world spread out below you. The sense of accomplishment and awe at
              the natural beauty is indescribable.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Flora and Fauna: </span>
              Throughout the trek, keep an eye out for Kilimanjaro's unique
              flora, such as the giant groundsel and the Kilimanjaro impatiens.
              Though wildlife sightings are less common as you ascend, the lower
              zones offer opportunities to spot elands, bushbucks, and a variety
              of birds.
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
              Embark on the adventure of a lifetime and conquer the iconic peaks
              of Kilimanjaro with Tazama. Our personalized journeys are crafted
              to ensure an unforgettable experience, blending the thrill of the
              climb with unparalleled comfort and safety. Whether you're drawn
              by the allure of the Marangu Route's scenic vistas or the
              challenge of reaching Africa's highest summit, Tazama is your
              trusted partner in adventure. Don't just dream about standing atop
              the Roof of Africa; make it a reality. Connect with us today to
              plan your Kilimanjaro expedition. Let's turn your aspirations into
              achievements. Book your climb with Tazama now and step into the
              extraordinary.
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
