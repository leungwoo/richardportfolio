"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiHome, HiOutlineMail, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { downloadwhite, downloadblack } from "../assets/images/index";
import { FaLaptopCode } from "react-icons/fa";

const sidebarVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "tween",
      duration: 1.2,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};

const listVariant = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
    staggerChildren: 0.3,
    staggerDirection: 1,
  },
};

function Sidebar({ setToggle, toggle }: any) {
  const { theme, setTheme } = useTheme();
  return (
    <AnimatePresence>
      <motion.div
        className="container rounded-tl-3xl z-20 top-0 bottom-0 right-0 p-4 w-[50%] h-screen flex flex-col
        justify-end items-end bg-cover bg-no-repeat bg-primary-Default dark:bg-primary-carddark fixed "
        animate={toggle ? "open" : "closed"}
        initial="hidden"
        exit="exit"
        variants={sidebarVariants}
      >
        <AiOutlineClose
          onClick={() => setToggle(false)}
          className="w-[35px] h-[35px] text-primary-accentBlue dark:text-primary-darkmodeblue"
        />

        <motion.ul
          className=" h-screen w-full list-none m-0 p-0 flex flex-col justify-start items-start gap-8 text-base font-bold"
          variants={listVariant}
        >
          <Link
            href="/"
            className="hover:text-text-accentBlue hover:duration-500 transition"
            onClick={() => setToggle(false)}
          >
            <span className="flex flex-row gap-2">
              <HiHome className="w-[20px] h-[20px] inline-block" /> Home
            </span>
          </Link>
          <Link
            href="/CaseStudies"
            className="hover:text-text-accentBlue hover:duration-500 transition"
            onClick={() => setToggle(false)}
          >
            <span className="flex flex-row gap-2">
              <FaLaptopCode className="w-[20px] h-[20px] inline-block" /> Case
              Studies
            </span>
          </Link>
          <Link
            href="/Contact"
            className="hover:text-text-accentBlue hover:duration-500 transition"
            onClick={() => setToggle(false)}
          >
            <span className="flex flex-row gap-2">
              <HiOutlineMail className="w-[20px] h-[20px] inline-block" />{" "}
              Contact
            </span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/11PPDLjSTC9rrzJ-1AXtKibJbWdl5LAiJ/view?usp=sharing"
            target="_blank"
          >
            <div className="flex flex-row items-center gap-1">
              <Image
                src={theme === "light" ? downloadblack : downloadwhite}
                alt="download"
                width={100}
                height={100}
                className="w-5 h-5"
                onClick={() => setToggle(false)}
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
              <div className="flex flex-row gap-2">
                <FiMoon size={25} />
                <span>Mode</span>
              </div>
            ) : (
              <div className="flex flex-row gap-2">
                <FiSun size={25} />
                <span>Mode</span>
              </div>
            )}{" "}
          </button>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Sidebar;
