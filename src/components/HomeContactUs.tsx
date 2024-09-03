import { motion } from "framer-motion";
import Image from "next/image";

export const HomeContactUs = () => {
  return (
    <>
      <div className="-mb-0.5 mt-20 flex flex-col items-center gap-8 md:flex-row-reverse">
        <div className="h-[32rem] w-full">
          <Image
            width={320}
            height={320}
            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1720012250/home/contact-us_fxohwj.jpg"
            alt="Contact us, we'd love to hear from you"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full pl-10 md:pl-10 lg:py-12 xl:pl-32">
          <div className="">
            <h3 className="mb-2 text-4xl text-primary lg:text-5xl">
              Connect With Us
            </h3>
            <p className="w-full font-raleway">
              Your questions, feedback, and insights are valuable to us. Reach
              out to me directly through the contact details below, and we’ll
              get back to you at the earliest convenience
            </p>

            <ul className="my-10 flex flex-col gap-y-6">
              <li>
                <h4 className="text-2xl text-primary">Email</h4>
                <a
                  className="black hover:underline md:text-2xl"
                  href="info@tazamaafricasafari.com"
                >
                  info@tazamaafricasafari.com
                </a>
              </li>
              <li>
                <h4 className="text-2xl text-primary">Phone</h4>
                <a
                  className="hover:underline md:text-2xl"
                  href="tel:+255744400043"
                >
                  (255)744400043
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};