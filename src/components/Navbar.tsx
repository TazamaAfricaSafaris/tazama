import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import PlanMyTrip from "~/components/forms/all-forms/plan-my-trip";

const navMainContent = [
  {
    title: "About Tazama",
    link: "/about",
  },
  {
    title: "Mount Kilimanjaro",
    link: "/safaris/kilimanjaro",
  },
  {
    title: "Mount Meru",
    link: "/safaris/mount-meru",
  },
  {
    title: "Safari",
    link: "/safaris",
  },
  {
    title: "Beach Holiday",
    link: "/safaris/zanzibar",
  },
  {
    title: "Gorrila & Chimps Trekking",
    link: "/safaris/gorilla-trekking",
  },
];

const navSubContent = [
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Special Offers",
    link: "/safaris/special-offers",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Our Partners",
    link: "/partners",
  },
  {
    title: "Sustainability",
    link: "/sustainability",
  },
  {
    title: "Photos and Videos",
    link: "/gallery",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [onExit, setOnExit] = useState<object>({});
  const [searchModal, setSearchModal] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "//embed.typeform.com/next/embed.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  function toggleSearchModal() {
    setOnExit({
      opacity: 0,
      height: 0,
    });

    setSearchModal((prevSearchModal) => !prevSearchModal);
  }

  function toggleNav() {
    setOnExit({
      opacity: 0,
      height: 0,
    });
    setNav((preNav) => !preNav);
  }

  return (
    <section>
      <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" onClick={() => setNav(false)}>
          <img
            className="z-[9999] w-20 sm:w-32 md:w-40"
            src="/assets/images/logos/tazama-gold.png"
            alt=""
          />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <PlanMyTrip />
          <AnimatePresence>
            {searchModal ? (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "100vh",
                }}
                exit={onExit}
                className={`absolute left-0 top-0 h-screen w-full bg-[#000000]`}
              >
                <button
                  className="absolute right-4 top-4 flex items-center gap-2 px-4 py-1 text-white md:right-8 md:top-0 md:gap-3 md:px-4 md:py-6"
                  onClick={toggleSearchModal}
                >
                  <span className="">Close</span>
                  <AiOutlineClose />
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <button
            className="menu-trigger flex items-center gap-2 rounded-md bg-[#A87133] px-2 py-1 text-white transition duration-200 ease-in-out md:gap-3 md:px-4 md:py-2"
            onClick={toggleNav}
          >
            <span className="menu-trigger">Menu</span>
            <AiOutlineMenu className="menu-trigger" />
          </button>
        </div>

        <AnimatePresence>
          {nav ? (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "100vh",
              }}
              exit={onExit}
              className={`absolute left-0 top-0 h-screen w-full bg-[#A87133] px-8 py-4`}
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setNav(false)}>
                  <img
                    className="tazama w-24 sm:w-32 md:w-40"
                    src="/assets/images/logos/tazama-white.png"
                    alt=""
                  />
                </Link>
                <div className="flex items-center gap-1 text-white  sm:gap-2">
                  <button
                    className="flex items-center gap-2 px-2 py-1 md:gap-3 md:px-4 md:py-2"
                    onClick={toggleNav}
                  >
                    <span>Close</span>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.4,
                  },
                }}
                className="absolute left-1/2 top-1/2 mx-auto mt-4 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-center gap-10 px-12 text-white sm:justify-evenly md:flex-row"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    translateX: -20,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  className="flex flex-col space-y-4 text-xl sm:text-3xl md:space-y-8"
                >
                  {navMainContent.map((mainLink, index) => (
                    <motion.span
                      initial={{ x: -20 }}
                      animate={{
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.15 * index,
                        },
                      }}
                      key={index}
                    >
                      <Link
                        href={mainLink.link}
                        className="hover:text-[#e0e0e0]"
                        onClick={() => setNav(false)}
                      >
                        <h3>{mainLink.title}</h3>
                      </Link>
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.75,
                      delay: 0.8,
                    },
                  }}
                >
                  <div className="mb-8 flex flex-col gap-y-2 font-sans">
                    {navSubContent.map((subLink, index) => (
                      <motion.span
                        key={index}
                        initial={{ x: -20 }}
                        animate={{
                          x: 0,
                          transition: {
                            duration: 0.75,
                            delay: 0.2 * index,
                          },
                        }}
                      >
                        <Link
                          href={subLink.link}
                          onClick={() => setNav(false)}
                          className="w-fit cursor-pointer pb-1 text-lg hover:underline"
                        >
                          <h3 className="font-raleway">{subLink.title}</h3>
                        </Link>
                      </motion.span>
                    ))}
                  </div>

                  <Link
                    className="rounded-md border border-white  px-6 py-2 font-raleway transition duration-150 ease-in hover:bg-white hover:text-[#A87133]"
                    href="/contact"
                    onClick={() => setNav(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </section>
  );
};

export default Navbar;
