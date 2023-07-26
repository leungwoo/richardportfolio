import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { SocialMedia } from "./index";
import { Suspense } from "react";
import Loading from "./Loading";

interface HeroCardProps {
  title: string;
  description: string;
  imgUrl: any;
}

export default function Hero({ title, description, imgUrl }: HeroCardProps) {
  const titleWords = title.split(" ");
  const [first, second, third] = titleWords;
  return (
    <div className=" md:pt-[80px]  flex md:flex-row flex-col bg-primary-Default dark:bg-primary-darkDefault min-h-screen">
      <div className="flex-1 md:pl-20 px-4 pt-20 space-y-5">
        <h3 className="text-sm md:text-base text-text-accentBlue font-bold">
          HI, MY NAME IS RICHARD GABRIEL
        </h3>

        <h1 className="text-text-title font-bold lg:text-6xl md:text-4xl sm:text-3xl text-2xl dark:text-white">
          {first}
        </h1>
        <div className="relative inline-block">
          <h1 className="z-10 relative text-text-title font-bold xl:text-6xl lg:text-4xl sm:text-3xl text-2xl dark:text-white">
            {second} {third}
          </h1>
          <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]"></div>
        </div>

        <h4 className="text-text-default dark:text-text-dark leading-9 font-medium text-base">
          {description}
        </h4>
        <div className="flex flex-row mt-4 items-center">
          <Link href="/Contact">
            <button className="hover:opacity-75 border-none bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full md:w-[186px] w-[120px] md:h-[64px] h-[55px] py-4 px-3 text-white text-sm md:text-base hover:duration-500 transition">
              Contact
            </button>
          </Link>
          <div className="pl-6">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Suspense fallback={<Loading />}>
          <Image
            src={urlForImage(imgUrl[0])?.url()}
            alt="hero"
            width={1000}
            height={1000}
            className="w-full object-contain "
            loading="lazy"
          />
        </Suspense>
      </div>
    </div>
  );
}
