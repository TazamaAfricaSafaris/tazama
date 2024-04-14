import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Kilimanjaro solo climb">
      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
          <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
            <div className="mb-10 py-8">
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Climbing Kilimanjaro Solo: A Personalized Adventure
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Embarking on a solo journey to conquer Mount Kilimanjaro,
                Africa's highest peak, is an aspiration many adventurers hold
                dear. Tazama is here to turn this dream into a reality, offering
                a tailored, luxurious experience for solo climbers seeking to
                tackle this magnificent mountain.
              </p>{" "}
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Does Solo Climbing Mean You're Alone?
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                While you may set out on this journey solo, you won't be alone.
                Regulations require the presence of certified Kilimanjaro guides
                and experienced porters. Tazama ensures you have a team of
                professionals by your side, providing an intimate, personalized
                climbing experience while ensuring your safety and comfort.
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
                Why Opt for Solo Climbing?
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Solo climbs appeal to those seeking solitude, reflection, and
                personal challenge. Tazama caters to this desire with custom
                itineraries, gourmet meals tailored to personal taste, and a
                climb at your pace, ensuring a truly bespoke and immersive
                experience on Kilimanjaro.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                The Risks of Solo Climbing
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Climbing Kilimanjaro presents challenges, notably the risk of
                altitude sickness. Tazama prioritizes safety, offering
                comprehensive preparation advice, altitude sickness prevention
                tips, and ensuring climbers are equipped with the necessary
                medical supplies and support.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Preparation is Key
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Proper preparation is crucial for a successful summit. Tazama
                provides tailored training programs and preparation guides to
                enhance cardiovascular fitness, strength, and acclimatization
                strategies, significantly reducing the risk of altitude
                sickness.
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
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Choosing Tazama for Your Solo Kilimanjaro Climb
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Opting for Tazama means choosing expertise, luxury, and safety.
                We remove the stress of planning, allowing you to focus on
                physical and mental preparation. Our all-inclusive packages
                ensure you have everything you need, from high-quality gear to
                gourmet trail meals, making your climb as comfortable as it is
                memorable.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Safety for Female Solo Travelers
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Tazama understands the unique concerns of female solo climbers
                and places their safety and comfort at the forefront. Our
                respectful, professional team ensures a secure and empowering
                environment for women to conquer Kilimanjaro.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Kilimanjaro Success Rate for Solo Climbers
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                While there's no definitive data comparing solo versus group
                success rates, Tazama's personalized approach to solo climbing
                has yielded remarkable success. Our attention to detail,
                custom-tailored support, and dedicated guides enhance the
                likelihood of reaching the summit.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                The Advantages of Solo Climbing with Tazama:
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Complete itinerary customization for a truly personal
                experience. <br />
                The luxury of setting your own pace and schedule. <br />
                Dedicated support tailored to your specific needs and
                preferences.
              </p>
              <h3 className="mt-5 text-2xl font-bold text-primary">
                Considerations for Solo Climbers:
              </h3>
              <p className="mb-3 mt-5 text-lg text-[#757371]">
                Solo climbing may come at a higher cost, reflecting the
                personalized services and dedicated support. While you gain
                privacy and customization, you may miss out on the camaraderie
                found in group climbs. Tazama is more than just a trekking
                company; we are your partners in adventure, offering a seamless
                blend of luxury, personalization, and safety for your solo
                Kilimanjaro climb. Our expertise and attention to detail ensure
                that your journey to the roof of Africa is as fulfilling as it
                is unforgettable.
                <br />
                Ready to take the first step on your solo Kilimanjaro adventure?
                Contact Tazama today and let us tailor your journey to the
                summit with the utmost care, luxury, and expertise. Climb with
                Tazama, where your solo journey becomes an epic adventure of a
                lifetime.
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
            href="/safaris/kilimanjaro/guides/kilimanjaro-visa"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Kilimanjaro Visa</p>
              <p className="font-now text-sm">
                This is a non-negotiable prerequisite for anyone planning to
                conquer Kilimanjaro .....
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/kilimanjaro-food"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1585540083814-ea6ee8af9e4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">Kilimanjaro Food</p>
              <p className="font-now text-sm">
                Tazama ensures your journey to the summit of Mount Kilimanjaro
                is not only successful but also delightful ...
              </p>
              <Button className="font-now mt-5 text-lg text-white">
                View More
              </Button>
            </div>
          </Link>
          <Link
            className="mb-10 min-h-[300px] w-[350px] cursor-pointer bg-white shadow-md lg:w-[33%]"
            href="/safaris/kilimanjaro/guides/private-toilets"
          >
            <div className="relative h-[200px] w-full rounded-sm">
              <BlurImage src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGtpbGltYW5qYXJvfGVufDB8fDB8fHww" />
            </div>

            <div className="p-3">
              <p className="font-now text-primary">
                Kilimanjaro Private Toilets
              </p>
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
