"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";

import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
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
      className=" flex flex-col items-center justify-between h-viewport-height pb-6 pt-[80px] "
    >
      <div className="flex md:flex-row flex-col gap-5 pb-10 ">
        <div className="flex-1  ">
          <div className="ml-10 flex flex-col gap-1">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-normal">My Socials</h3>
              <div>
                {socials.map((social, index) => (
                  <Link href={social.link} key={index} className="">
                    <Image
                      src={social.image}
                      alt={social.alt}
                      width={30}
                      height={30}
                      className="hover:opacity-75"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*form*/}
        <div className="flex  mx-auto items-center justify-center my-auto md:px-4 px-6 py-12">
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
            <button
              type="submit"
              className="bg-primary-accentBlue dark:bg-primary-darkmodeblue hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {!loading ? "Send" : "Sending...."}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
      <SocialMedia />
    </motion.div>
  );
};

export default Contact;
