"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";

import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  twitter,
  instagram,
  linkedin,
  github,
  twitterdark,
  instagramdark,
  linkedindark,
  githubdark,
  call,
  calldark,
  message,
  messagedark,
} from "@/assets/images";
import { SocialMedia } from "@/components";

const socials = [
  {
    image: twitter,
    imagedark: twitterdark,
    link: "https://twitter.com/leungwoo",
    alt: "twitter",
  },
  {
    image: linkedin,
    imagedark: linkedindark,
    link: "https://linkedin.com/in/richardleungwoogabriel",
    alt: "linkedin",
  },
  {
    image: github,
    imagedark: githubdark,
    link: "https://github.com/leungwoo",
    alt: "github",
  },
  {
    image: instagram,
    imagedark: instagramdark,
    link: "https://instagram.com/leungwoo",
    alt: "instagram",
  },
];

const Contact = () => {
  const { theme, setTheme } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message1: "",
    message2: "",
  });

  const { name, email, message1, message2 } = formState;

  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  //@ts-ignore
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2500,
        //@ts-ignore
        hideProgressBar: "false",
        //@ts-ignore
        closeOnClick: "true",
        //@ts-ignore
        pauseOnHover: "true",
        //@ts-ignore
        draggable: "true",
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    } else {
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        //@ts-ignore
        hideProgressBar: "false",
        //@ts-ignore
        closeOnClick: "true",
        //@ts-ignore
        pauseOnHover: "true",
        //@ts-ignore
        draggable: "true",
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    }
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        //@ts-ignore
        "service_bkpc7ag",
        "template_ophm5cg",
        form.current!,
        "qbFMLvC8bIjmsP9iB"
      )
      .then(() => {
        notify("Email sent successfully", false);
        setLoading(false);
        setFormState({
          name: "",
          email: "",
          message1: "",
          message2: "",
        });
      })
      .catch(() => {
        notify("Error sending email", true);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" flex flex-col items-center justify-between  pt-[70px]  xl:max-w-[1440px] "
    >
      <div className=" flex dark:bg-[#192333] bg-[#F3F8FF] xl:max-h-[410px] w-screen max-w-[1440px] items-center justify-center">
        <div className="flex flex-col gap-5  py-12">
          <div className="relative inline-block">
            <h1 className="z-10  relative text-text-title font-bold xl:text-[#64px] text-[42px] dark:text-white">
              Get in Touch
            </h1>
            <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[25px] h-[20px]"></div>
          </div>
          <span className="text-[#6F74A7] dark:text-[#F3F8FF]">
            Let&apos;s Collaborate on Your Next Project
          </span>
        </div>
      </div>
      <div className="flex md:flex-row md:gap-52 flex-col-reverse md:px-16  pb-10 dark:bg-[#151E2C] max-w-[1440px] w-screen ">
        <div className="flex flex-col px-6 md:px-0 py-12 md:space-y-[80px] space-y-9">
          <div className="flex flex-col gap-4">
            <h3 className="sm:text-2xl text-xl font-normal">My Socials</h3>
            <div className="flex flex-row gap-4">
              {socials.map((social, index) => (
                <Link
                  href={social.link}
                  key={index}
                  className=""
                  target="_blank"
                >
                  <Image
                    src={theme === "light" ? social.image : social.imagedark}
                    alt={social.alt}
                    width={30}
                    height={30}
                    className="hover:opacity-75 w-6 h-6 sm:w-8 sm:h-8"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="sm:text-2xl text-xl font-normal">Phone Number</h3>
            <div className="flex flex-row gap-2">
              <Image
                src={theme == "light" ? call : calldark}
                alt="phonenumber"
                width={30}
                height={30}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span>+1 (407)-624-6389</span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="sm:text-2xl text-xl font-normal">Email Address</h3>
            <div className="flex flex-row gap-2">
              <Image
                src={theme == "light" ? message : messagedark}
                alt="phonenumber"
                width={30}
                height={30}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span>leungwoo@gmail.com</span>
            </div>
          </div>
        </div>
        {/*form*/}
        <div className="flex-1  items-center justify-center md:px-0 px-6 py-12 ">
          <form onSubmit={sendEmail} ref={form} className="flex flex-col ">
            <label
              htmlFor="name"
              className="mb-2 text-text-contact dark:text-text-contactdark"
            >
              What&apos;s your name?
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
              required
              className=" p-2 mb-4 rounded-lg  bg-primary-inputdefaultnew dark:bg-primary-inputdefaultnewdark border border-[#CCE1FF] dark:border dark:border-[#2C3C56]"
            />
            <label
              htmlFor="email"
              className="mb-2  text-text-contact dark:text-text-contactdark"
            >
              What &apos;s your email?
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              name="email"
              required
              className="p-2 mb-4 rounded-lg  bg-primary-inputdefaultnew dark:bg-primary-inputdefaultnewdark border border-[#CCE1FF] dark:border dark:border-[#2C3C56]"
            />
            <label
              htmlFor="message1"
              className="mb-2  text-text-contact dark:text-text-contactdark"
            >
              Write something about your project goals and timeframe
            </label>
            <textarea
              id="message1"
              name="message1"
              value={message1}
              onChange={handleChange}
              required
              className="p-2 mb-4 rounded-lg min-h-[190px] bg-primary-inputdefaultnew dark:bg-primary-inputdefaultnewdark border border-[#CCE1FF] dark:border dark:border-[#2C3C56]"
            ></textarea>
            <label htmlFor="message2" className="mb-2 ">
              <span className=" text-text-contact dark:text-text-contactdark">
                How to reach out back to you?
              </span>
              <span className="text-[#778295]"> eg. phone number or email</span>
            </label>
            <textarea
              id="message2"
              name="message2"
              value={message2}
              onChange={handleChange}
              required
              className="p-2 mb-4 rounded-lg  min-h-[60px]  bg-primary-inputdefaultnew dark:bg-primary-inputdefaultnewdark border border-[#CCE1FF] dark:border dark:border-[#2C3C56]"
            ></textarea>
            <div className="flex md:justify-end">
              <button
                type="submit"
                className=" bg-primary-accentBlue dark:bg-primary-darkmodeblue hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full md:w-[186px] md:h-[69px] md:px-[20px] md:py-[12px] md:rounded-full"
              >
                {!loading ? "Send" : "Sending...."}
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 items-center justify-center max-h-[165px] text-[#778295] dark:text-[#F3F8FF] dark:bg-[#151E2C] w-screen max-w-[1440px] py-[52px] md:px-[85px] px-[50px]">
        <span>© 2023 Richard Leung Woo Gabriel.</span>
        <span>All rights reserved.</span>
      </div>
    </motion.div>
  );
};

export default Contact;
