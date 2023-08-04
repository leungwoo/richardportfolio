"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { rlogo, downloadwhite, downloadblack } from "../assets/images/index";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [navbarDropdown, setnavbarDropdown] = useState(false);
  return (
    <div className="fixed backdrop-blur-sm backdrop-filter dark:bg-primary-darkDefault flex flex-row justify-between py-4 md:pl-20 px-4  md:pr-40 w-full z-50  items-center ">
      <div>
        <Link href="/">
          <Image
            src={rlogo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </Link>
      </div>
      {/* Desktop view */}
      <div className=" sm:flex hidden items-center justify-between gap-6 text-text-navbar dark:text-text-dark font-bold text-base">
        <Link
          href="/"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Home
        </Link>
        <Link
          href="/casestudies"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Case Studies
        </Link>
        <Link
          href="/contact"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Contact
        </Link>
        <Link
          href="https://drive.google.com/file/d/1GEyh_LKR5QQJ6yAoAjSsrVpOsRyyZB1r/view?usp=sharing"
          target="_blank"
        >
          <div className="flex flex-row items-center gap-1">
            <Image
              src={theme === "light" ? downloadblack : downloadwhite}
              alt="download"
              width={100}
              height={100}
              className="w-5 h-5"
            />
            <span className="text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
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
              className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-primary-highlight"
            />
          )}
        </button>
      </div>
      {/* MobileView */}
      <div
        className="sm:hidden flex relative"
        onClick={() => setnavbarDropdown((prev) => !prev)}
      >
        {navbarDropdown ? <AiOutlineClose /> : <AiOutlineMenu />}
        {navbarDropdown && (
          <div className=" absolute top-full right-0 w-full min-w-[150px] shadow-sm shadow-black mt-3 p-4 bg-primary-Default dark:bg-primary-darkDefault flex flex-col items-end rounded-lg  justify-start gap-6 text-text-navbar dark:text-text-dark font-bold text-base ">
            <Link
              href="/"
              className="hover:text-text-accentBlue hover:duration-500 transition"
            >
              Home
            </Link>
            <Link
              href="/casestudies"
              className="hover:text-text-accentBlue hover:duration-500 transition"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="hover:text-text-accentBlue hover:duration-500 transition"
            >
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1GEyh_LKR5QQJ6yAoAjSsrVpOsRyyZB1r/view?usp=sharing"
              target="_blank"
            >
              <div className="flex flex-row items-center gap-1">
                <Image
                  src={theme === "light" ? downloadblack : downloadwhite}
                  alt="download"
                  width={100}
                  height={100}
                  className="w-5 h-5"
                />
                <span className="text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
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
                  className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-primary-highlight"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
