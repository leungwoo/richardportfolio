"use client";
import { useTheme } from "next-themes";

import {
  definition,
  planning,
  delivery,
  development,
  definition2,
  planning2,
  delivery2,
  developmentdark,
} from "../assets/images/index";
import Image from "next/image";

const processImages = [
  { title: "Definition", img: definition, imgdark: definition2 },
  { title: "Planning", img: planning, imgdark: planning2 },
  { title: "Delivery", img: delivery, imgdark: delivery2 },
  { title: "Develop", img: development, imgdark: developmentdark },
];
const Process = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col max-w-[1440px] w-screen dark:bg-[#151E2C] md:py-[72px] md:px-[280px] px-[24px] py-[36px]  items-center justify-center">
      <h1 className=" text-lg md:text-[38px] font-bold text-[#151E2C] dark:text-white">
        My Process
      </h1>
      <div className="flex flex-row items-center gap-6  md:gap-10 pt-10">
        {processImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <Image
              src={theme === "dark" ? item.imgdark : item.img}
              alt="process images"
              width={100}
              height={100}
              className="object-cover w-12 h-12 md:w-24 md:h-24"
            />
            <span className="md:text-xl text-[10px] font-semibold text-[#151E2C] dark:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
