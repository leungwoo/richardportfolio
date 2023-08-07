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
    <div className="flex flex-col max-w-[1220px] md:pt-20 pt-10 md:px-40 px-10 items-center justify-center">
      <h1 className=" text-lg md:text-[38px] font-bold text-[#151E2C] dark:text-white">
        My Process
      </h1>
      <div className="flex flex-row items-center gap-6  md:gap-10 pt-10 transition duration-500 ease-in-out transform">
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
