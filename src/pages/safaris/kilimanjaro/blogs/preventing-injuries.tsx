import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Preventing Injuries on Mount Kilimanjaro with Tazama">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mb-3 mt-5 text-[#757371]">
              Mount Kilimanjaro, standing as a beacon of challenge and
              transformation, calls to adventurers seeking to push their limits
              and experience the profound beauty of the world's tallest
              free-standing mountain. At Tazama, we understand that the journey
              to Kilimanjaro's summit is not just about reaching the peak but
              doing so safely, with memories of awe-inspiring landscapes, not
              injuries. Let's explore how you can shield yourself from common
              injuries and ensure your Kilimanjaro climb is a testament to
              triumph and resilience.
            </p>{" "}
            <h3 className="mt-5 text-2xl text-primary">
              Common Injuries and How to Prevent Them
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              Climbing Kilimanjaro can expose adventurers to a variety of
              physical challenges, from the rugged terrain to the thinning air.
              Common injuries include blisters, ankle sprains, muscle strains,
              and sunburn, among others. To embark on this journey with
              confidence, it's essential to prepare your body and mind for the
              mountain's demands.
            </p>{" "}
            <h3 className="mt-5 text-2xl text-primary">
              Embark on a Tailored Training Regimen
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              Preparation is key to a successful and injury-free climb. Start
              your training at least two months before your expedition, focusing
              on strengthening your legs and upper body, enhancing flexibility,
              and increasing your lung capacity. At Tazama, we recommend
              incorporating strength training, stretching, and hike training
              into your regimen. Embrace the outdoors, familiarize yourself with
              your gear, and simulate Kilimanjaro's conditions as closely as
              possible.
            </p>
            <h3 className="mt-5 text-2xl text-primary">
              Choose Your Footwear Wisely
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              Your feet are your foundation on Kilimanjaro, and selecting the
              right footwear is critical. Ensure your boots or trail shoes are
              well-fitted, offer robust traction, and are waterproof to keep
              your feet dry. Consider investing in liner socks or toe socks to
              minimize friction and prevent blisters, safeguarding your steps as
              you ascend toward the clouds.
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
              Trekking Poles: Your Kilimanjaro Companions
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              Trekking poles are invaluable tools on the mountain, providing
              stability, reducing the load on your legs, and aiding in balance.
              They're especially beneficial during descents, when the risk of
              slipping or straining muscles increases. Let your poles become
              extensions of your body, enhancing your rhythm and steadiness as
              you navigate Kilimanjaro's diverse terrains.
            </p>
            <h3 className="mt-5 text-2xl text-primary">
              Shield Yourself from the Sun
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              The equatorial sun on Kilimanjaro can be relentless. Protect your
              skin with high-SPF sunscreen, reapplying regularly, and wear
              protective clothing. Consider spending time in shaded areas during
              rest breaks to avoid overexposure. Your health and comfort are
              paramount, and at Tazama, we're committed to ensuring you're
              well-prepared to face the sun's intensity.
            </p>
            <h3 className="mt-5 text-2xl text-primary">
              Acclimatization: The Key to Avoiding Altitude Sickness
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              Altitude sickness can affect climbers of all fitness levels, but
              gradual acclimatization can significantly reduce the risk. By
              choosing a route that allows for a "climb high, sleep low"
              approach, you give your body the time it needs to adjust to the
              thinner air. Listen to your body, move at a pace that allows for
              proper breathing, and stay hydrated.
            </p>
            <h3 className="mt-5 text-2xl text-primary">
              Concluding Your Journey with Care
            </h3>
            <p className="mb-3 mt-5 text-[#757371]">
              At Tazama, we believe that climbing Kilimanjaro is a journey of
              the spirit as much as it is of the body. By preparing thoroughly,
              choosing the right gear, and listening to the wisdom of your
              guides and your own body, you set the stage for an expedition that
              is not only successful but deeply rewarding.
              <br />
              <br />
              Climbing Kilimanjaro is an invitation to discover the strength
              within you, to connect with nature's grandeur, and to return
              transformed, with stories of resilience and beauty. With Tazama,
              your journey to the summit is enveloped in luxury, safety, and a
              deep respect for the mountain and its guardians. Ready to answer
              Kilimanjaro's call? Let's make your dream climb a reality, with
              every step taken in confidence and awe.
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
          href="/safaris/kilimanjaro/blogs/best-sunglasses-for-kilimanjaro"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Sunglasses for Kilimanjaro</p>
            <p className="font-now text-sm">
              Protect your eyes against the harsh UV lights in the mountain.
            </p>
            <Button className="font-now mt-5 text-lg text-white">
              View More
            </Button>
          </div>
        </Link>
        <Link
          className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
          href="/safaris/kilimanjaro/blogs/summit-night"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1650668300370-3ee2f17d1589?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
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
          href="/safaris/kilimanjaro/blogs/private-vs-group-trek"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Private vs Group Trek</p>
            <p className="font-now text-sm">
              Chose which one is right for you, either group trek or a private
              one
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
