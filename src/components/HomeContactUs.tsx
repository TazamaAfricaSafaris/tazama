import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HomeContactUs = () => {
  return (
    <>
      <section className="bg-lighter relative bg-cover bg-center py-32 mt-36">
        <div className="bg-gradient-to-b from-lightest to-transparent py-12 absolute top-0 left-0 w-full z-10"></div>
        <div className="max-w-5xl z-10 relative top-0 left-0 w-full mx-auto flex flex-col items-center justify-center p-4 gap-8 md:p-10 xl:px-20 text-white">
          <h1 className="text-6xl leading-none text-center">Let’s Plan Your Perfect Escape!</h1>
          <p className="text-lg text-center">
            Whether you’re looking for a guided safari or a serene retreat, we’re here to help make it happen. Reach out to discuss options and get answers to all your travel questions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <Link href="/contact" className="border border-white rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-white hover:text-primary hover:font-medium transition-colors duration-200">Contact Us</Link>
          </div>
        </div>
        <br />
        <Image src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730973516/DSC09836_kipash.webp" alt="" layout="fill" objectFit="cover" className="w-full h-full brightness-[0.5]" />
      </section>
    </>
  );
};