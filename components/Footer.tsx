import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { Suspense } from "react";

import { footer } from "@/assets/images";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" relative w-full">
        <div className=" md:gap-8 gap-3 absolute flex flex-col flex-wrap min-w-[200px] md:top-0 top-2 left-0 right-0 bottom-0 items-center justify-center">
          <span className="text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-title">
            Have a project idea to{" "}
            <div className="relative inline-block">
              <span className="z-10 relative text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-text-title font-bold">
                collaborate on?
              </span>
              <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[10px]"></div>
            </div>
          </span>

          <Link
            href="/Contact"
            className="flex items-center justify-center hover:opacity-75 border-none bg-white font-bold rounded-full md:w-[186px] w-[90px] md:h-[55px] h-[30px] py-5 px-3 text-text-title text-sm md:text-base hover:duration-500 transition"
          >
            Contact
          </Link>
        </div>

        <div className="md:pt-20 md:pb-10 md:px-5 pt-10 pb-5 px-5 w-full">
          <Image
            src={footer}
            alt="footerbanner"
            width={1080}
            height={500}
            className="min-w-[256px] w-full lg:max-h-[427px] rounded-[20px] object-cover "
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Footer;
