import { motion } from "framer-motion";
import Image from "next/image";

export const HomeContactUs = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row-reverse gap-8 mt-20 items-center -mb-0.5">
      <div className="w-full h-[32rem]">
        <Image width={320} src="/assets/images/gallery/contact-us.jpg" alt="Contact us, we'd love to hear from you" className="w-full h-full object-cover"/>
      </div>
      <div className="w-full pl-10 md:pl-10 lg:py-12 xl:pl-32">
        <div className="">
          <h3
            className="mb-2 text-4xl lg:text-5xl"
          >
            Connect With Us
          </h3>
          <p
            className="font-raleway w-full"
          >
            Your questions, feedback, and insights are valuable to us. Reach out
            to me directly through the contact details below, and we’ll get back
            to you at the earliest convenience
          </p>

          <ul className="my-10 flex flex-col gap-y-6">
            <li
            >
              <h4 className="text-2xl">Email</h4>
              <a
                className="text-darker/75 hover:underline md:text-2xl"
                href="info@tazamaafricasafari.com"
              >
                info@tazamaafricasafari.com
              </a>
            </li>
            <li
            >
              <h4 className="text-2xl">Phone</h4>
              <a
                className="text-darker/75 hover:underline md:text-2xl"
                href="tel:+255745100011"
              >
                (255)745100011
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};