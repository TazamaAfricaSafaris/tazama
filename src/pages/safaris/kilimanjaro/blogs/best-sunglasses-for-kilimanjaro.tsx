import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import BlurImage from "~/components/ui/BlurImage";
import Link from "next/link";

export default function Page() {
  return (
    <BlogLayout title="Best Sunglasses for Kilimanjaro">
      <section className="flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="mt-5 text-2xl font-bold text-primary">
              The Essential Guide to The best Sunglasses for Climbing Mount
              Kilimanjaro
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              As you set your sights on conquering Mount Kilimanjaro, the
              tallest peak in Africa, it's not just physical fitness and mental
              fortitude that will carry you to the summit. Equally important is
              ensuring you're well-equipped for the journey, especially when it
              comes to protecting your eyes. Today, let's dive into the crucial
              topic of selecting the best sunglasses for your Kilimanjaro
              adventure.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Why Protecting Your Eyes is Non-Negotiable on Kilimanjaro
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The higher you climb, the closer you get to the sun's piercing
              rays, magnified by the thinning atmosphere. With every step
              upwards, solar radiation intensifies, making eye protection not
              just a necessity but a lifeline. The pristine snow caps, while
              breathtaking, act as mirrors, bouncing back sunlight and
              increasing UV exposure dramatically.
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              The Hidden Dangers of High Altitude Sun Exposure
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              At the lofty altitudes of Kilimanjaro, direct sunlight isn't just
              bright; it's potentially harmful. The risk of UV exposure
              escalates with altitude, making sunglasses an indispensable part
              of your gear. Even on overcast days, harmful rays penetrate the
              clouds, reaching your eyes and risking damage.
            </p>{" "}
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
              The Non-Negotiable Need for Sunglasses
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Yes, sunglasses are an absolute must. Here's why:
            </p>{" "}
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                They shield you from UV rays, sand, snow, and wind—all elements
                that can impede your ascent.
              </li>
              <li>
                They prevent snow blindness, a condition where UVB rays burn the
                cornea, causing temporary vision loss.
              </li>
              <li>
                They help avoid retinal exhaustion from prolonged exposure to
                intense light, enhancing your endurance.
              </li>
              <li>
                They protect against freezing conditions that can lead to eyelid
                and corneal damage
              </li>
            </ul>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Choosing the Right Frames and Lenses for the Climb
            </h3>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                <span className="text-primary">Frames: </span>
                Opt for curved frames with side shields for all-around
                protection. Adjustable or slim temples ensure a snug fit, while
                frames with straps prevent loss during rigorous activity.
              </li>
              <li>
                <span className="text-primary">Lenses: </span>
                Category 4 lenses are your best bet for high-altitude climbing.
                They block up to 90-98% of sunlight, providing superior
                protection. Grey, green, or brown tints reduce glare and keep
                your eyes comfortable. Polyurethane lenses, known for their
                durability and excellent optics, are highly recommended.
              </li>
            </ul>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Features to Look for in Your Kilimanjaro Sunglasses
            </h3>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                Anti-glare and polarized lenses to minimize sun glare, enhancing
                visibility and comfort.
              </li>
              <li>Wider frames for wind protection.</li>
              <li>Secure grip to prevent slipping.</li>
              <li>
                Dark tinted, mirror-finish lenses for maximum UV protection.
              </li>
              <li>
                Comprehensive coverage to protect the eyes and surrounding
                areas.
              </li>
              <li>Comfort for extended wear.</li>
              <li>Durability to withstand the rigors of the climb.</li>
            </ul>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Invest in Your Vision: A Wise Choice for Kilimanjaro Climbers
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The equatorial sun above Kilimanjaro is unforgiving. Investing in
              a quality pair of sunglasses is not just a matter of comfort but
              safety. With the right pair, you'll not only safeguard your eyes
              but also enhance your climbing experience, keeping your focus
              squarely on the breathtaking vistas and the path ahead.
              <br />
              <br />
              As you embark on this journey of a lifetime with Tazama, rest
              assured that every detail of your adventure, including the
              protection of your eyes, is taken into account. Our commitment is
              to ensure you enjoy every moment of your climb, from the first
              step to the summit, with clarity, safety, and awe.
              <br />
              <br />
              Remember, the right sunglasses are not just gear; they're your
              passport to a successful and memorable ascent. Let's make your
              Kilimanjaro dream a reality, with the summit in clear view.
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
          href="/safaris/kilimanjaro/blogs/kilimanjaro-family"
        >
          <div className="relative h-[200px] w-full rounded-sm">
            <BlurImage src="https://images.unsplash.com/photo-1621414050946-1b936a78491f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D" />
          </div>

          <div className="p-3">
            <p className="font-now text-primary">Kilimanjaro Family</p>
            <p className="font-now text-sm">
              At Tazama, we believe that the essence of adventure lies in the
              connections we make and the experiences we share.
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
