"use client";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import Link from "next/link";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

interface HeroCardProps {
  title: string;
  description: string;
  imgUrl: any;
}

export default function Hero({ title, description, imgUrl }: HeroCardProps) {
  const titleWords = title.split(" ");
  const [first, second, third] = titleWords;
  const [copied, setCopied] = useState(false);

  const notify = (message: string, hasError = false) => {
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

  const copyText = () => {
    const text = "leungwoo@gmail.com";
    navigator.clipboard.writeText(text);

    setCopied(true);

    notify("Copied to clipboard", false);
  };

  return (
    <div className="flex lg:flex-row flex-col pt-[80px] bg-primary-Default dark:bg-primary-darkDefault xl:max-h-[794px] md:py-[72px]  py-12  items-center justify-center  w-screen max-w-[1440px]">
      <div className="flex flex-col lg:pl-20 px-4 max-h-[750px] md:pt-10">
        <div className="flex flex-col   space-y-5 items-start ">
          <h3 className="text-sm md:text-base text-text-accentBlue font-bold">
            HI, MY NAME IS RICHARD GABRIEL
          </h3>
          <div className="flex flex-wrap gap-1">
            <h1 className="text-text-title font-bold xl:text-6xl text-[35px]  dark:text-white leading-[48px]">
              {first}{" "}
            </h1>
            <div className="relative inline-block">
              <h1 className="z-10 relative text-text-title font-bold xl:text-6xl text-[35px] dark:text-white leading-[48px]">
                {second} {third}
              </h1>
              <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]"></div>
            </div>
          </div>

          <h4 className="text-[#6F74A7] dark:text-[#F3F8FF] leading-9 font-medium text-base">
            {description}
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-2 pt-5 items-center ">
          <div className="  items-center">
            <Link href="/CaseStudies">
              <button className=" hover:opacity-75 border-none bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full md:w-[186px]  md:h-[64px] w-[350px] h-[55px] py-4  text-white text-sm md:text-base hover:duration-500 transition">
                Case Studies
              </button>
            </Link>
          </div>
          <div className="flex  ">
            <div className="flex flex-row justify-between items-center px-5 bg-white dark:bg-[#151E2C] border-none rounded-full md:w-[305px]  md:h-[64px] w-[350px] h-[55px] py-[14px] font-semibold text-sm md:text-base hover:opacity-60 hover:duration-500 transition">
              <h3 className="text-[#6F74A7] dark:text-white ">
                leungwoo@gmail.com
              </h3>
              <FiCopy
                onClick={copyText}
                size={25}
                color={copied ? "#6F74A7" : "#FFBE62"}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  xl:h-[500px] min-h-[262px] min-w-[393px] lg:pt-10">
        <Image
          src={urlForImage(imgUrl[0])?.url()}
          alt="hero"
          width={1000}
          height={1000}
          className="xl:h-[500px] min-h-[262px] object-contain "
          loading="eager"
        />
      </div>
      <ToastContainer />
    </div>
  );
}
