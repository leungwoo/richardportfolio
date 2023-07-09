"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

import { logo, downloadwhite, downloadblack } from "../../assets/images/index";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed backdrop-blur-sm backdrop-filter dark:bg-primary-darkDefault flex flex-row justify-between mx-auto pt-10 pl-20 pr-40 w-full z-50  items-center ">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-6 text-text-navbar dark:text-text-dark font-bold text-base">
        <Link href="/" className="hover:text-text-accentBlue">
          Home
        </Link>
        <Link href="/CaseStudies" className="hover:text-text-accentBlue">
          Case Studies
        </Link>
        <Link href="/Contact" className="hover:text-text-accentBlue">
          Contact
        </Link>
        <Link href="/">
          <div className="flex flex-row items-center gap-1">
            <Image
              src={theme === "light" ? downloadblack : downloadwhite}
              alt="download"
              width={100}
              height={100}
              className="w-5 h-5"
            />
            <span className="text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue">
              Resume
            </span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <FiMoon
              size={15}
              className=" md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-text-accentBlue"
            />
          ) : (
            <FiSun
              size={15}
              className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-text-accentBlue"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
