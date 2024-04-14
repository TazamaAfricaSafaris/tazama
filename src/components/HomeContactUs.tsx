import { motion } from "framer-motion";

export const HomeContactUs = () => {
  return (
    <>
      <div className="mx-auto mt-10 w-full max-w-[82rem] px-10 py-10">
        <div className="text-[#757371]">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="mb-2 text-xl font-bold"
          >
            Connect With Us
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            }}
            className="font-raleway w-full md:w-2/3"
          >
            Your questions, feedback, and insights are valuable to us. Reach out
            to me directly through the contact details below, and we’ll get back
            to you at the earliest convenience
          </motion.p>

          <ul className="my-10 flex flex-col gap-y-6">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
            >
              <h4 className="mb-2 text-sm font-bold md:text-lg">Email</h4>
              <a
                className="font-raleway text-lg font-light text-[#969492] hover:underline md:text-2xl"
                href="info@tazamaafricasafari.com"
              >
                info@tazamaafricasafari.com
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.4,
                },
              }}
            >
              <h4 className="mb-2 text-sm font-bold md:text-lg">Phone</h4>
              <a
                className="font-raleway text-lg font-light text-[#969492] hover:underline md:text-2xl"
                href="tel:+255745100011"
              >
                (255)745100011
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};
