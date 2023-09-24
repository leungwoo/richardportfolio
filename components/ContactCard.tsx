import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

import { footer } from "@/assets/images";
import { BsArrowRight } from "react-icons/bs";

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center justify-center md:pt-0 md:px-[85px] pt-12 px-5 dark:bg-[#151E2C] w-screen max-w-[1440px]">
      <div className=" relative w-full flex items-center justify-center ">
        <div className="flex lg:flex-row flex-col absolute md:top-16 sm:top-8 top-6 md:px-16 px-8 pt-10 pb-16 md:max-w-none   md:left-0 left-3 right-0 bottom-0 items-center ">
          <span className="flex-1 text-[26px] sm:text-[28px] leading-8 lg:leading-[51px] md:text-[36px]  xl:text-[48px] font-bold text-text-title md:max-w-[520px] min-w-[345px] flex p-5">
            Have a project in mind that requires technical expertise?
          </span>

          <div className="flex mx-auto">
            <Link
              href="/Contact"
              className="flex flex-row items-center gap-5 lg:mt-16 xl:ml-14  hover:opacity-75 border-none bg-white font-bold text-text-title rounded-full md:w-[286px] w-full md:h-[64px] h-[55px] py-4 px-5 text-center  text-sm md:text-base hover:duration-500 transition"
            >
              Get in touch with me <BsArrowRight size={30} />
            </Link>
          </div>
        </div>

        <div className="flex md:pt-20 md:pb-10 md:px-5 pt-10 pb-5 px-5 w-full justify-center items-center">
          <Image
            src={footer}
            alt="footerbanner"
            width={1080}
            height={500}
            className="flex min-w-[340px] min-h-[300px] w-full lg:max-h-[330px]  rounded-[20px] object-cover "
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default ContactCard;
