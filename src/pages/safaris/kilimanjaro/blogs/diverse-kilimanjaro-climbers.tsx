import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout
      title="Tazama's Diverse Kilimanjaro Climbers"
    >
      <section className="flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="text-[#757371]">
              Conquering Mount Kilimanjaro, the rooftop of Africa, is a dream
              many adventurers from around the globe share. Tazama has been at
              the forefront of turning these dreams into reality, offering
              unparalleled experiences to climbers from diverse nations
              including Australia, Canada, Germany, the USA, China, Switzerland,
              the UK, and beyond. Our commitment to providing exceptional
              service, personalized adventures, and safety has earned us praise
              from a global community of climbers who've chosen Tazama as their
              gateway to the summit of Kilimanjaro.
            </p>{" "}
            <h3 className="mt-5 text-2xl text-primary">
              A Melting Pot of Cultures on the Slopes of Kilimanjaro
            </h3>
            <p className="text-[#757371]">
              Mount Kilimanjaro, with its breathtaking landscapes and
              challenging treks, attracts thousands of climbers each year.
              Tazama has had the privilege of guiding adventurers from various
              corners of the world, each bringing their unique perspectives,
              cultures, and dreams to the mountain. Our climbers from Australia,
              known for their adventurous spirit, have found Kilimanjaro's
              rugged terrain a thrilling challenge. Canadians, accustomed to
              their vast wilderness, have marveled at the distinct ecosystems of
              Kilimanjaro, from rainforests to alpine deserts.
              <br />
              <br />
              Our friends from Germany have appreciated the meticulous planning
              and precision Tazama offers, ensuring a safe and enjoyable climb.
              Climbers from the USA have praised our ability to create a sense
              of community and camaraderie among participants from different
              backgrounds. Our Chinese adventurers have been captivated by the
              majestic views and the opportunity to connect with nature on an
              epic scale. Similarly, our Swiss and UK climbers have lauded the
              personalized experiences and the skilled guidance provided by our
              expert team, making their Kilimanjaro journey unforgettable.
            </p>{" "}
            <h3 className="mt-5 text-2xl text-primary">
              Personalization at the Heart of Every Climb
            </h3>
            <p className="text-[#757371]">
              What sets Tazama apart is our dedication to personalization.
              Understanding that each climber has unique needs and expectations,
              we tailor every journey to suit individual preferences. Whether
              it's accommodating dietary requirements, adjusting pace, or
              providing cultural insights, our team goes above and beyond to
              ensure a seamless and enriching experience. This attention to
              detail and commitment to excellence has been a significant factor
              in the glowing testimonials we've received from our international
              clientele.
            </p>
            <h3 className="mt-5 text-2xl text-primary">
              Safety, Expertise, and Warm Hospitality
            </h3>
            <p className="text-[#757371]">
              Safety is paramount on the slopes of Kilimanjaro, and Tazama's
              expert guides, with their deep knowledge of the mountain's terrain
              and weather patterns, ensure that climbers from all countries feel
              secure and supported. Our multilingual guides and staff also
              bridge language barriers, creating a warm and welcoming atmosphere
              where every climber, regardless of nationality, feels valued and
              understood.
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
            <h3 className="mt-5 text-2xl text-primary">
              Join the Global Tazama Family
            </h3>
            <p className="text-[#757371]">
              As Tazama continues to welcome climbers from across the world,
              we're not just offering a climb; we're inviting you to become part
              of a global family that shares the love for adventure, the respect
              for nature, and the pursuit of personal achievement. Whether
              you're from Australia, Canada, Germany, the USA, China,
              Switzerland, the UK, or any other part of the world, Tazama is
              your trusted partner in conquering Kilimanjaro.
              <br />
              <br />
              Embark on your Kilimanjaro journey with Tazama and experience the
              difference that personalized care, expert guidance, and genuine
              hospitality can make. Together, let's reach the summit and create
              memories that resonate across continents and cultures, cementing
              bonds that last a lifetime.
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
          href="/safaris/kilimanjaro/blogs/recovery-journey"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
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
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/blogs/why-climb-kilimanjaro"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1621414050345-53db43f7e7ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Why Climb Kilimanjaro</p>
            <p className="font-now text-sm">
              Get to know more about the benefits you will get in climbing Mount
              Kilimanjaro
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
