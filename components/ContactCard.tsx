import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

import { footer } from "@/assets/images";
import { AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center justify-center md:py-[72px] md:px-[85px] py-12 px-6 dark:bg-[#151E2C] w-screen max-w-[1440px]">
      <div className=" relative w-full ">
        <div className="flex lg:flex-row flex-col justify-between md:gap-8 gap-3 absolute max-w-[300px] max-h-[300px] lg:top-28 md:px-16 px-8 py-12 md:max-w-none   md:left-0 left-3 right-0 bottom-0 items-center ">
          <span className="flex-1 text-[30px]  lg:text-[48px] font-bold text-text-title max-w-[520px] flex flex-wrap">
            Have a project idea to{" "}
            <div className="relative inline-block">
              <span className="z-10 relative text-[30px] lg:text-[48px]  text-text-title font-bold">
                collaborate on?
              </span>
              <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[10px]"></div>
            </div>
          </span>

          <div className="flex mx-auto">
            <Link
              href="/Contact"
              className="flex items-center justify-center hover:opacity-75 border-none bg-white font-bold rounded-full md:w-[186px]  md:h-[55px] h-[30px] py-5 px-3 text-text-title text-sm md:text-lg hover:duration-500 transition"
            >
              Get in touch with me <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="md:pt-20 md:pb-10 md:px-5 pt-10 pb-5 px-5 w-full">
          <Image
            src={footer}
            alt="footerbanner"
            width={1080}
            height={500}
            className="min-w-[300px] min-h-[300px] w-full lg:max-h-[427px] rounded-[20px] object-cover "
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default ContactCard;
