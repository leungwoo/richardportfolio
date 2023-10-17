import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Loading from "./Loading";
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
    <div className="flex flex-col justify-center items-center  md:py-[72px] md:px-[85px] py-12 px-6 dark:bg-[#151E2C] w-screen max-w-[1440px]">
      <div className="relative inline-block">
        <h1 className="z-10 relative text-text-title font-bold xl:text-4xl text-3xl dark:text-white">
          My skills
        </h1>
        <div className="absolute inset-x-0 -bottom-1 bg-primary-highlight h-[15px]"></div>
      </div>
      <div className="flex flex-row flex-wrap max-w-[1280px]  justify-center py-10  gap-8">
        {skillsData.imgUrl.map((image: any, index: number) => (
          <div key={index} className="">
            <Image
              src={urlForImage(image.asset)?.url()}
              alt="skill image"
              width={200}
              height={200}
              className="hover:scale-105 transition-all ease-in-out duration-300 object-contain md:w-[80px] md:h-[80px] w-[50px] h-[50px] flex-1 min-w-[50px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
