import Image from "next/image";
import Loading from "../../components/Loading";

import { contactbanner } from "@/assets/images";
import { Suspense } from "react";

const Contact = () => {
  return (
    <div className="h-viewport-height pt-[80px] ">
      <div className="flex md:flex-row flex-col gap-5 pb-10">
        <div className="flex-1  ">
          <div className="ml-10 flex flex-col gap-1">
            <span className="font-bold text-md bg-gradient-to-r from-[#4768DB] to-[#FFFFFF] bg-clip-text text-transparent">
              Contact
            </span>
            <h1 className="font-bold md:text-[38px]">Get In Touch</h1>
          </div>
          <Suspense fallback={<Loading />}>
            <Image
              src={contactbanner}
              alt="casestudiesbanner"
              width={1924}
              height={1724}
              loading="eager"
              className="min-w-[286px] h-[450px] rounded-[20px] object-contain"
            />
          </Suspense>
        </div>
        {/*form*/}
        <div className="flex-1 mx-auto items-center justify-center my-auto md:px-4 p-2">
          <form className="flex flex-col max-w-[500px] h-[450px] mx-auto p-5 bg-white dark:bg-primary-carddark shadow-lg shadow-[#ADCDFF80] rounded-[10px] ">
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
              name="name"
              required
              className=" p-2 mb-4 rounded-lg bg-primary-inputdefault dark:bg-primary-inputdark border border-[#F0E7F9] dark:border-[#47495F]"
            />
            <label
              htmlFor="email"
              className="mb-2 text-text-navbar dark:text-text-dark"
            >
              Your email:
            </label>
            <input
              type="email"
              id="email"
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
              required
              className="p-2 mb-4 rounded-lg bg-primary-inputdefault dark:bg-primary-inputdark border border-[#F0E7F9] dark:border-[#47495F]"
            ></textarea>
            <button
              type="submit"
              className="bg-primary-accentBlue dark:bg-primary-darkmodeblue hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
