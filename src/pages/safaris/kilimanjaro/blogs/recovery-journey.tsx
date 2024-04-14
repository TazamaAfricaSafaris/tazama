import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Recovering after climbing Kilimanjaro">
      <section className="mx-auto flex items-start lg:mx-0 lg:gap-10">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Recovery Journey After climbing Kilimanjaro: How many days it
              takes to recover from climbing kilimanjaro
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The ascent of Mount Kilimanjaro is an adventure that tests your
              limits, not just during the climb but also in the days that follow
              as your body recovers from this monumental feat. With Tazama, your
              journey to the Roof of Africa is enveloped in luxury, personalized
              care, and support that extends beyond the descent, ensuring a
              recovery as memorable as the climb itself
            </p>{" "}
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Post-Kilimanjaro: The Unseen Challenge
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Climbing the towering heights of Kilimanjaro is a testament to
              human endurance, and the recovery period is a crucial part of this
              epic journey. The descent from the peak might mark the end of the
              climb, but it heralds the beginning of a different kind of
              challenge: recovery.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              The Aftermath: Physical Echoes of the Climb
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              As you revel in the glory of having reached the summit, your body
              begins to whisper tales of the trek. Symptoms such as headache,
              nausea, dizziness, and shortness of breath may linger, while the
              rapid descent places a significant strain on your legs and joints.
              Recovery is not just about resting; it's about listening and
              responding to your body's needs.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              The Path to Recovery: A Holistic Approach
            </h3>
            <ul className="list-disc pl-10 text-lg text-[#757371]">
              <li>
                <span className="text-primary">Choosing the Right Route:</span>{" "}
                Opting for a longer route on Kilimanjaro not only increases your
                chances of summit success but also aids in a smoother recovery.
                The gradual ascent and descent allow your body to adjust more
                effectively to altitude changes and physical exertion.
              </li>
              <li>
                <span className="text-primary">Rest and Recuperation:</span> The
                importance of rest cannot be overstated. After days of trekking,
                ensuring some time to rest is paramount. A good night's sleep
                rejuvenates the body, aiding in quicker recovery.
              </li>
              <li>
                <span className="text-primary">Nutrition: </span> The right diet
                plays a critical role in your body's ability to recover.
                Consuming a balanced diet rich in carbohydrates and proteins
                during and after your climb provides the energy and building
                blocks needed for muscle repair and recovery.
              </li>
              <li>
                <span className="text-primary">Acclimatization: </span> TProper
                acclimatization is the cornerstone of a successful Kilimanjaro
                climb and a swift recovery. The more time spent on the mountain,
                allowing your body to adapt to the altitude, the less you'll
                struggle with post-climb recovery.
              </li>
            </ul>
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
              Every Climber's Journey is Unique and Personal
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Recovery varies from one climber to another, influenced by
              physical fitness, mental fortitude, and the body's inherent
              ability to heal. Some may find themselves bouncing back in a
              matter of days, while others might take weeks to fully recuperate.
              Remember, some physical reminders of your journey may linger, a
              testament to your courage and determination.
            </p>
            <h3 className="mt-5 text-2xl font-bold text-primary">
              Embracing Recovery with Tazama
            </h3>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              With Tazama, your post-Kilimanjaro experience is as meticulously
              planned as your ascent. Our commitment to your well-being ensures
              that your recovery is supported every step of the way, from
              nutrition to rest, all wrapped in the comfort and luxury that sets
              us apart. As you navigate the path to recovery, let the memories
              of the climb be a source of strength and inspiration.
              <br />
              <br />
              Recovery after Kilimanjaro is more than a physical process; it's a
              journey of resilience that tests the limits of human endurance.
              It's a time for reflection, for celebrating the strength you've
              discovered within yourself, and for planning your next adventure.
              With Tazama, recover in luxury and comfort, knowing that you've
              not just conquered a mountain, but you've also set the stage for
              future triumphs.
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
