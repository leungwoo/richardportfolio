"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Loading from "./Loading";
import { motion } from "framer-motion";
export interface Skills {
  imgUrl: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
    hotspot: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  }[];
}

const Skills = ({ skillsData }: { skillsData: Skills }) => {
  if (!skillsData || !skillsData.imgUrl || skillsData.imgUrl.length === 0) {
    return <Loading />; // Return early or show a message when there are no skills data
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col justify-center items-center md:pt-20 pt-10 px-16"
    >
      <div className="relative inline-block">
        <h1 className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          Skills
        </h1>
        <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]"></div>
      </div>
      <div className="flex flex-row flex-wrap md:max-w-[1220px] w-full justify-center py-10 gap-8">
        {skillsData.imgUrl.map((image: any, index: number) => (
          <div key={index}>
            <Image
              src={urlForImage(image.asset)?.url()}
              alt="skill image"
              width={50}
              height={50}
              className="object-contain md:w-[80px] md:h-[80px] flex-1 min-w-[50px]"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
