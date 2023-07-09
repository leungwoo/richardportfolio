import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { SocialMedia } from "./index";

interface HeroCardProps {
  title: string;
  description: string;
  imgUrl: any;
}

export default function Hero({ title, description, imgUrl }: HeroCardProps) {
  return (
    <div className=" pt-[80px] flex md:flex-row flex-col bg-primary-Default dark:bg-primary-darkDefault h-viewport-height">
      <div className="flex-1 pl-20 pt-20 space-y-5">
        <h3 className="text-text-accentBlue font-bold">
          HI, MY NAME IS RICHARD GABRIEL
        </h3>
        <h1 className="text-text-title font-bold text-6xl dark:text-white">
          {title}
        </h1>
        <h4 className="text-text-default dark:text-text-dark font-medium text-base">
          {description}
        </h4>
        <div className="flex flex-row mt-4 items-center">
          <Link href="/Contact">
            <button className="hover:opacity-75 border-none bg-text-accentBlue font-bold rounded-full w-[186px] h-[64px] py-5 px-3 text-white ">
              Contact Us
            </button>
          </Link>
          <div className="pl-4">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={urlForImage(imgUrl)?.toString()}
          alt="hero"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
