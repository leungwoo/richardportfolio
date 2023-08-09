"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contactbanner } from "@/assets/images";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

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
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current!,
        process.env.EMAILJS_USER_ID
      )
      .then(() => {
        notify("Email sent successfully", false);
        setLoading(false);
        setFormState({
          name: "",
          email: "",
          message: "",
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
      className="h-viewport-height pt-[80px] "
    >
      <div className="flex md:flex-row flex-col gap-5 pb-10">
        <div className="flex-1  ">
          <div className="ml-10 flex flex-col gap-1">
            <span className="font-bold text-md bg-gradient-to-r from-[#4768DB] to-[#FFFFFF] bg-clip-text text-transparent">
              Contact
            </span>
            <h1 className="font-bold md:text-[38px]">Get In Touch</h1>
          </div>

          <Image
            src={contactbanner}
            alt="casestudiesbanner"
            width={1924}
            height={1724}
            loading="eager"
            className="min-w-[286px] h-[450px] rounded-[20px] object-contain"
          />
        </div>
        {/*form*/}
        <div className="flex-1 mx-auto items-center justify-center my-auto md:px-4 p-2">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col max-w-[500px] h-[450px] mx-auto p-5 bg-white dark:bg-primary-carddark shadow-lg shadow-[#ADCDFF80] rounded-[10px] "
          >
            <h1 className="text-2xl font-bold mb-4 text-[#312E81] dark:text-white">
              Send Me a Message
            </h1>
            <label
              htmlFor="name"
              className="mb-2 text-text-navbar dark:text-text-dark"
            >
              Your name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
              required
              className=" p-2 mb-4 rounded-lg bg-primary-inputdefault dark:bg-primary-inputdark border border-[#F0E7F9] dark:border-[#47495F]"
            />
            <label
              htmlFor="email"
              className="mb-2 text-text-navbar dark:text-text-dark "
            >
              Your email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              name="email"
              required
              className="p-2 mb-4 rounded-lg bg-primary-inputdefault dark:bg-primary-inputdark border border-[#F0E7F9] dark:border-[#47495F]"
            />
            <label
              htmlFor="message"
              className="mb-2 text-text-navbar dark:text-text-dark "
            >
              Your message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              required
              className="p-2 mb-4 rounded-lg bg-primary-inputdefault dark:bg-primary-inputdark border border-[#F0E7F9] dark:border-[#47495F]"
            ></textarea>
            <button
              type="submit"
              className="bg-primary-accentBlue dark:bg-primary-darkmodeblue hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {!loading ? "Send Message" : "Sending...."}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
