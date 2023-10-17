"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface Service {
  _id: string;
  title: string;
  icon: {
    _type: string;
    asset: {
      url: string;
    };
  };
  description: string;
}
const ServicesCard = ({ servicesData }: { servicesData: Service[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-wrap md:gap-8 gap-10 justify-center py-10 ">
      {servicesData.map((service: Service, index) => (
        <div
          key={index}
          className={` flex flex-col justify-between text-[#151E2C] hover:text-white bg-[#F3F8FF] hover:bg-primary-accentBlue dark:text-text-default
         dark:hover:text-white dark:bg-[#192333] dark:shadow-md dark:shadow-[#1F2E48] dark:hover:shadow-2xl dark:hover:shadow-[#0252CD47]
         dark:hover:bg-primary-darkmodeblue hover:shadow-lg hover:shadow-primary-accentBlue rounded-lg p-5 flex-1 min-w-[285px] h-full gap-10
         shadow-lg shadow-[#E0ECFF] hover:xl:translate-y-[44px] transition-all duration-1000 ease-in-out `}
        >
          <div>
            <Image
              key={index}
              src={urlForImage(service.icon.asset).url()}
              alt={service.title}
              width={100}
              height={100}
              className={`left-0 object-contain md:w-[62px] md:h-[62px] w-[40px] h-[40px] rounded-lg p-2 bg-primary-accentBlue dark:bg-primary-darkmodeblue  shadow-primary-accentBlue
           
           `}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[24px]  dark:text-white">
              {service.title}
            </h1>
            <p className="font-medium text-[12px] leading-5 dark:text-white">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
{
  /* <div className="group text-black">
<svg
  className="h-6 w-6 group-hover:fill-black"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  aria-hidden="true"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00- 
7-7z"
  />
</svg>
<p className="group-hover:text-amber-500">Hello color</p>
</div> */
}
