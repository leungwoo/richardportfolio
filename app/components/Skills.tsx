import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Loading from "./Loading";

// interface Image {
//   asset: {
//     _ref: string;
//     _type: "image";
//   };
//   hotspot?: {
//     x: number;
//     y: number;
//     height: number;
//     width: number;
//   };
// }

interface Skill {
  imgUrl: any;
  // Add more fields here if needed from the "Skills" Sanity schema
}

const Skills = ({ skillsData }: { skillsData: Skill }) => {
  if (!skillsData || !skillsData.imgUrl || skillsData.imgUrl.length === 0) {
    return <Loading />; // Return early or show a message when there are no skills data
  }

  return (
    <div className="flex flex-col justify-center items-center pt-5 px-10">
      <div className="relative inline-block">
        <h1 className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          Skills
        </h1>
        <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]"></div>
      </div>
      <div className="flex flex-row flex-wrap md:max-w-[1220px] w-full justify-center py-4 px-5 gap-8">
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
    </div>
  );
};

export default Skills;
