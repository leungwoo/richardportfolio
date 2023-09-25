"use client";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroCardProps {
  title: string;
  description: string;
  imgUrl: any;
}

export default function Hero({ title, description, imgUrl }: HeroCardProps) {
  const titleWords = title.split(" ");
  const [first, second, third] = titleWords;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      className="pt-[80px] flex flex-col bg-primary-Default dark:bg-primary-darkDefault xl:max-h-[794px] md:py-[72px]  py-12  items-center justify-center  w-screen max-w-[1440px]"
    >
      <div className="flex md:flex-row flex-col max-h-[750px] items-center pt-10">
        <div className="flex flex-col md:pl-20 px-4  space-y-5 items-start ">
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

          <h4 className="text-text-default dark:text-text-dark leading-9 font-medium text-base">
            {description}
          </h4>
          <div className="flex flex-row mt-4 items-center ">
            <Link href="/Contact">
              <button className="hover:opacity-75 border-none bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full sm:w-[186px]  md:h-[64px] w-[330px] h-[55px] py-4 px-3 text-white text-sm md:text-base hover:duration-500 transition">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  xl:h-[500px] min-h-[262px]">
          <Image
            src={urlForImage(imgUrl[0])?.url()}
            alt="hero"
            width={1000}
            height={1000}
            className="xl:h-[500px] min-h-[262px] object-contain "
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  );
}
