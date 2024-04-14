// Importing social media icons from react-icons
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaTripadvisor,
} from "react-icons/fa";
import { applicationName } from "../helpers";
import Link from "next/link";

import NewsletterSignup from "./NewsletterSignup";

// Footer functional component definition
export const Footer = () => {
  return (
    <>
      <NewsletterSignup />
      <footer className="border-t  border-t-[#E0DED9] px-8 py-10">
        {/* Container for footer content with responsive design for column and row layout */}
        <div className="flex-between flex flex-col items-center justify-between gap-y-4 lg:flex-row">
          {/* List container for footer links and copyright information */}
          <ul className="flex flex-col gap-2 text-center text-sm sm:flex-row sm:gap-4">
            {/* List item for copyright notice dynamically inserting the current year */}
            <li>
              <p className="text-[#414141]">
                All rights reserved&nbsp;&copy;&nbsp;{new Date().getFullYear()}{" "}
                {applicationName}
              </p>
            </li>
            {/* List items for various footer links with hover effects */}
            <li className="text-[#969492] hover:underline">
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            {/* <li className="text-[#969492] hover:underline">
              <Link href="/testimonials">Testimonials</Link>
            </li> */}
            <li className="text-[#969492] hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Container for social media icons with a gap between them */}
          <div className="flex w-fit gap-x-4">
            {/* Anchor tags linking to respective social media platforms, each opening in a new tab */}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g6940195-d13368802-Reviews-Tazama_Africa_Tours_and_Safari-Arusha_National_Park_Arusha_Region.html"
              target="_blank"
            >
              <FaTripadvisor className="cursor-pointer text-2xl text-[#35E0A1]" />
            </a>
            <a href="https://wa.me/+255745100011" target="_blank">
              <FaWhatsapp className="cursor-pointer text-2xl text-[#25D366]" />
            </a>
            <a href="https://instagram.com/tazamaafricasafaris" target="_blank">
              <FaInstagram className="cursor-pointer text-2xl text-[#C13584]" />
            </a>
            <a href="https://facebook.com/TazamaAfricaSafaris" target="_blank">
              <FaFacebook className="cursor-pointer text-2xl text-[#4267B2]" />
            </a>
            <a href="https://youtube.com/@tazama_africa" target="_blank">
              <FaYoutube className="cursor-pointer text-2xl text-[#FF0000]" />
            </a>
            <a href="https://tiktok.com/@tazama_africa" target="_blank">
              <FaTiktok className="cursor-pointer text-2xl text-[#000000]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
