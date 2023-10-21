"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiHome, HiOutlineMail, HiX } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineClose, AiOutlineCloudDownload } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { FaLaptopCode } from "react-icons/fa";

const sidebarVariants = {
  hidden: {
    opacity: 0,
    right: "-100%",
  },
  open: {
    opacity: 1,
    right: 0,
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
    right: "-100%",
    transition: {
      type: "tween",
      duration: 1.2,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    right: "-100%",
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
        className="container rounded-bl-3xl z-20 top-0 bottom-80 right-0 p-4 w-[60%]  flex flex-col
        justify-end items-end bg-cover bg-no-repeat bg-[#F3F8FF] dark:bg-[#192333] fixed "
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
          className=" h-full w-full list-none m-0 px-5 pt-10 flex flex-col justify-start items-start gap-10 text-base font-bold"
          variants={listVariant}
        >
          <Link href="/" className=" " onClick={() => setToggle(false)}>
            <span className="flex flex-row gap-4 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
              <HiHome className="w-[30px] h-[30px] inline-block" /> Home
            </span>
          </Link>
          <Link
            href="/CaseStudies"
            className=""
            onClick={() => setToggle(false)}
          >
            <span className="flex flex-row gap-4 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
              <FaLaptopCode className="w-[30px] h-[30px] inline-block" /> Case
              Studies
            </span>
          </Link>
          <Link
            href="/Contact"
            className="hover:text-text-accentBlue hover:duration-500 transition"
            onClick={() => setToggle(false)}
          >
            <span className="flex flex-row gap-4 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
              <HiOutlineMail className="w-[30px] h-[30px] inline-block" />
              Contact
            </span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/11PPDLjSTC9rrzJ-1AXtKibJbWdl5LAiJ/view?usp=sharing"
            target="_blank"
          >
            <div className="flex flex-row items-center  gap-4 text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
              <AiOutlineCloudDownload className="w-[30px] h-[30px] inline-block" />{" "}
              Resume
            </div>
          </Link>

          <button
            type="button"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? (
              <div className="flex flex-row gap-4 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
                <FiSun size={30} />
                <span>Mode</span>
              </div>
            ) : (
              <div className="flex flex-row gap-4 items-center  text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
                <FiMoon size={30} />
                <span>Mode</span>
              </div>
            )}
          </button>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Sidebar;
