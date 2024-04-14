import Image from "next/legacy/image";
import { Button } from "~/components/ui/button";
import { CLOUDINARY_URL } from "~/lib/constants";
import BlogLayout from "~/components/ui/BlogLayout";
import Link from "next/link";
import BlurImage from "~/components/ui/BlurImage";

export default function Page() {
  return (
    <BlogLayout title="Training for Kilimanjaro">
      <section className="mx-auto flex items-start  lg:mx-0 lg:gap-10">
        <div className="mx-auto   lg:mx-0 lg:max-w-[60%] lg:text-justify">
          <div className="mb-10 py-8">
            <p className="mt-5 text-2xl font-bold text-primary">
              Training for Kilimanjaro: Your Ultimate Preparation Guide
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Start your Kilimanjaro training journey well in advance, several
              weeks or ideally several months before to ensure you're
              well-prepared for the summit of Africa's highest peak with our
              comprehensive guide.
            </p>{" "}
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Climbing Mount Kilimanjaro is an adventure of a lifetime. As the
              roof of Africa, standing tall at 19,341 feet, Kilimanjaro
              challenges climbers not just physically but mentally. Whether
              you're a seasoned hiker or a beginner eager to test your limits,
              proper preparation is key to a successful summit. Tazama is here
              to guide you through every step of your training, ensuring you're
              fully equipped for the ascent.
            </p>{" "}
            <p className="mt-5 text-2xl font-bold text-primary">
              Physical Preparation: Building Your Foundation
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Journeying on the climb to Kilimanjaro's peak demands more than
              just a basic level of fitness. It requires specific training to
              build endurance, strength, and adaptability to varied terrains and
              altitudes. Begin your physical training at least four weeks before
              your climb if you're already active; if you're starting from a
              lower base of fitness, give yourself two months or more to
              prepare.
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
              <span className="text-primary">Endurance Training: </span>
              Start with daily walks, gradually increasing your distance.
              Incorporate hiking on varied terrains to mimic Kilimanjaro's
              diverse paths. Aim for long hikes at least once a week, gradually
              increasing the distance and carrying a weighted backpack to
              simulate climbing conditions.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Strength Training: </span>
              Focus on building leg strength, core stability, and upper body
              endurance. Exercises like squats, lunges, planks, and push-ups
              will strengthen the muscles you'll rely on during your climb.
              Don't overlook the importance of back and shoulder strength for
              carrying your pack.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Altitude Adjustment: </span>
              While it's impossible to replicate high-altitude environments at
              home, you can improve your body's response to reduced oxygen
              levels through cardiovascular exercises. Interval training,
              cycling, and swimming can enhance your lung capacity and stamina.
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
            <p className="mt-5 text-2xl font-bold text-primary">
              Mental Preparation: Fortifying Your Mind
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              The journey to Kilimanjaro's summit is as much a mental challenge
              as it is a physical one. Preparing your mind for the days ahead is
              crucial for overcoming the inevitable hurdles of high-altitude
              climbing.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Visualization: </span>
              Regularly visualize yourself successfully navigating the climb and
              reaching the summit. This mental rehearsal can build confidence
              and reduce anxiety.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Stress Management: </span>
              Learn stress-reduction techniques such as deep breathing,
              meditation, or yoga. These practices can help you maintain
              composure during challenging moments of the climb.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Goal Setting: </span>
              Break down your climb into manageable goals. Celebrate each
              milestone, whether it's completing a challenging training hike or
              reaching a new elevation during your ascent.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Nutritional Planning: Fueling Your Climb
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Proper nutrition plays a critical role in your training and the
              climb itself. Focus on a balanced diet rich in carbohydrates,
              proteins, and healthy fats to support your training regimen.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Carbohydrate Loading: </span>
              Before long training sessions or hikes, increase your intake of
              complex carbohydrates. Foods like whole grains, fruits, and
              vegetables provide the energy your muscles need for endurance
              activities.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Protein Intake: </span>
              Include lean protein in every meal to aid muscle repair and
              growth. Chicken, fish, beans, and legumes are excellent sources.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Hydration: </span>
              Increase your water intake during training. Proper hydration is
              vital for endurance and helps prevent altitude sickness.
            </p>
            <p className="mt-5 text-2xl font-bold text-primary">
              Training Program: Structuring Your Success
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Weeks 1-2: </span>
              Focus on building a base level of fitness with daily walks and
              light strength training.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Weeks 3-6: </span>
              Increase the intensity and duration of your hikes. Begin
              incorporating weighted backpack walks and more challenging
              strength exercises.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Weeks 7-8: </span>
              Simulate the climb with back-to-back long hikes on weekends,
              preferably on hilly terrain. Continue strength training and focus
              on your mental preparation strategies.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              <span className="text-primary">Week Before Climb: </span>
              Taper your training to allow your body to rest and recover. Focus
              on nutrition, hydration, and mental preparation.
            </p>
            <p className="mb-3 mt-5 text-lg text-[#757371]">
              Training for Kilimanjaro is a journey that prepares you not just
              for the climb but for a transformative life experience. Tazama is
              with you every step of the way, providing expert guidance,
              personalized training programs, and unwavering support. Embrace
              the challenge, and let us help you reach the summit with
              confidence and strength. Ready to start your Kilimanjaro
              adventure? Contact Tazama today and take the first step towards
              the peak of Africa.
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
              Tazama ensures your journey to the summit of Mount Kilimanjaro is
              not only successful but also delightful ...
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
            <p className="font-now text-primary">Kilimanjaro Private Toilets</p>
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
    </BlogLayout>
  );
}
