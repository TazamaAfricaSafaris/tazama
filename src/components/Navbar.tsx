/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PopupForm from "./PopupForm";

// ─── Data ──────────────────────────────────────────────────────────────────────

const navMainContent = [
  { title: "About Tazama", link: "/about" },
  { title: "Kilimanjaro", link: "/kilimanjaro" },
  { title: "Mount Meru", link: "/mount-meru" },
  { title: "Safari", link: "/safaris" },
  { title: "Lodges", link: "/lodges" },
  { title: "Beach Holiday", link: "/zanzibar" },
  {
    title: "East Africa",
    subItems: [
      { name: "Tanzania", link: "/safaris" },
      { name: "Kenya", link: "/east-africa/kenya" },
      { name: "Rwanda", link: "/east-africa/rwanda" },
      { name: "Uganda", link: "/east-africa/uganda" },
    ],
  },
];

const navSubContent = [
  { title: "Our Itineraries", link: "/tours" },
  { title: "FAQ", link: "/faq" },
  { title: "Blogs", link: "/blogs" },
  { title: "Our Partners", link: "/partners" },
  { title: "Sustainability", link: "/sustainability" },
  { title: "Photos & Videos", link: "/gallery" },
  { title: "PRISMS × Tazama Kilimanjaro", link: "/prisms-hike" },
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const overlayVariants = {
  closed: { clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)", opacity: 0 },
  open: {
    clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)",
    opacity: 0,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065, delayChildren: 0.3 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

const subMenuVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] },
  },
};

const subItemStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const subItemFade = {
  hidden: { opacity: 0, x: 16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

// ─── Underline hover link ──────────────────────────────────────────────────────

function HoverLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className={`group relative inline-block ${className}`}>
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const activeItem = activeIndex !== null ? navMainContent[activeIndex] : null;

  return (
    <>
      {/* ── Top Bar ── */}
      <nav
        className="fixed left-0 top-0 z-50 w-full"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-2 sm:px-6 py-4 md:px-10">
          {/* Logo */}
          <Link href="/" onClick={close} aria-label="Tazama home">
            <img
              src="/assets/images/logos/tazama-gold.png"
              alt="Tazama Africa"
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          {/* Right controls */}
          <div className={`flex items-center gap-2 sm:gap-3 ${isOpen ? 'bg-primary/10' : 'bg-white/75 backdrop-blur-md'} p-2 rounded-full border border-primary/50`}>
            {/* Plan My Trip popup */}
            <PopupForm />

            {/* Contact Us */}
            <HoverLink
              href="/contact"
              className="menu-trigger flex items-center gap-2 rounded-md px-2 text-primary transition ease-in-out md:gap-3 max-sm:text-sm font-raleway max-sm:hidden"
              onClick={close}
            >
              Contact Us
            </HoverLink>

            {/* Menu toggle */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-expanded={isOpen}
              aria-controls="nav-overlay"
              className="menu-trigger relative flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-overlay"
            key="overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 overflow-y-auto overflow-x-hidden"
            style={{ backgroundColor: "#0D0B09" }}
          >
            {/* Decorative grain texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px",
              }}
            />

            {/* Subtle gold vertical accent line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {/* Content grid */}
            <div className="flex min-h-full flex-col px-5 pb-8 pt-20 sm:px-8 sm:pt-24 md:px-14 md:pt-28">
              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1, transition: { duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] } }}
                className="mb-6 h-px bg-white/10 sm:mb-8"
              />

              <div className="flex flex-1 flex-col gap-8 md:flex-row md:gap-0">
                {/* ── Primary links ── */}
                <div className="flex-1 md:pr-16">
                  <AnimatePresence mode="wait">
                    {activeItem?.subItems ? (
                      /* Sub-menu panel */
                      <motion.div
                        key="sub"
                        variants={subMenuVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        <button
                          onClick={() => setActiveIndex(null)}
                          className="mb-6 flex items-center gap-2 text-xs tracking-widest text-primary/70 uppercase transition-colors hover:text-primary sm:mb-8 sm:text-sm"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <ChevronRight
                            size={14}
                            className="rotate-180 transition-transform"
                          />
                          Back
                        </button>

                        <p
                          className="mb-3 text-xs tracking-[0.25em] text-primary/50 uppercase sm:mb-4"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {activeItem.title}
                        </p>

                        <motion.ul
                          variants={subItemStagger}
                          initial="hidden"
                          animate="show"
                          className="space-y-2 sm:space-y-3"
                        >
                          {activeItem.subItems.map((sub, i) => (
                            <motion.li key={i} variants={subItemFade}>
                              <HoverLink
                                href={sub.link}
                                onClick={close}
                                className="text-white/80 hover:text-white"
                              >
                                <span className="font-serif text-2xl font-light leading-tight sm:text-3xl md:text-5xl">
                                  {sub.name}
                                </span>
                              </HoverLink>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    ) : (
                      /* Main links */
                      <motion.ul
                        key="main"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="space-y-2 sm:space-y-3"
                      >
                        {navMainContent.map((item, index) => (
                          <motion.li key={index} variants={fadeSlideUp}>
                            {item.subItems ? (
                              <button
                                onClick={() => setActiveIndex(index)}
                                className="group flex w-full items-center gap-3 text-left"
                              >
                                <span className="font-serif text-2xl font-light leading-tight text-white/70 transition-colors duration-200 group-hover:text-white sm:text-3xl md:text-5xl">
                                  {item.title}
                                </span>
                                <ChevronRight
                                  size={18}
                                  className="mt-1 text-primary/0 transition-all duration-200 group-hover:text-primary/80 group-hover:translate-x-1"
                                />
                              </button>
                            ) : (
                              <HoverLink href={item.link} onClick={close}>
                                <span className="font-serif text-2xl font-light leading-tight text-white/70 transition-colors duration-200 hover:text-white sm:text-3xl md:text-5xl">
                                  {item.title}
                                </span>
                              </HoverLink>
                            )}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical separator (desktop only) */}
                <motion.div
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: 1, transition: { duration: 0.6, delay: 0.35, ease: [0.33, 1, 0.68, 1] } }}
                  className="hidden md:block w-px bg-white/10 mx-4"
                />

                {/* Horizontal separator (mobile only) */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1, transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] } }}
                  className="h-px bg-white/10 md:hidden"
                />

                {/* ── Secondary links + contact ── */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col justify-between md:w-56"
                >
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-x-0 md:space-y-1">
                    {navSubContent.map((sub, i) => (
                      <motion.li key={i} variants={fadeSlideUp}>
                        <HoverLink
                          href={sub.link}
                          onClick={close}
                          className="text-white/40 transition-colors duration-150 hover:text-white/80"
                        >
                          <span className="text-xs sm:text-sm" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.02em" }}>
                            {sub.title}
                          </span>
                        </HoverLink>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom section */}
                  <motion.div variants={fadeSlideUp} className="mt-6 space-y-4 sm:mt-10">
                    <Link
                      href="/contact"
                      onClick={close}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all font-sans duration-200 hover:bg-primary/90 sm:px-6 sm:py-3 sm:text-base"
                    >
                      <span>Contact Us</span>
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Footer tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
                className="mt-6 text-xs text-white/20 md:mt-0"
              >
                Tazama Africa - Luxury Expeditions Since 2018
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;