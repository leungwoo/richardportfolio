import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Project } from "@/config/interfaces";

interface Props {
  projects: Project;
}
const ProjectHeroDetails = ({ projects }: Props) => {
  return (
    <div className=" flex flex-col justify-center items-center px-10 gap-5 ">
      <h3 className="font-bold md:text-[17px] text-xs text-[#203993] dark:text-white ">
        Web dev Project
      </h3>
      <h1 className="font-bold sm:text-3xl xl:text-6xl text-lg md:text-4xl text-center text-text-accentBlue dark:text-text-projectdarkblue">
        {projects.title}
      </h1>
      <div className="px-40">
      <Image
        src={urlForImage(projects.imgUrl[0].asset).toString()}
        alt={projects.title}
        width={2800}
        height={1500}
        className="object-cover min-w-[300px] flex-1"
      />
        </div>
      <div className="flex flex-row justify-between items-center max-w-[600px] gap-20 text-text-accentBlue">
        <div className="flex justify-center items-center ">
          <Link href={projects.link} target="_blank">
            <span className="justify-between max-w-[300px] mt-5 text-center gap-1 flex flex-row items-center font-semibold md:text-base text-xs hover:text-primary-highlight backdrop:hover:duration-500 transition dark:text-text-projectdarkblue dark:hover:text-primary-highlight">
              Demo Site <BsArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <Link href={projects.sourcecode} target="_blank">
            <span className="justify-between max-w-[300px] mt-5 text-center gap-1 flex flex-row items-center font-semibold md:text-base text-xs hover:text-primary-highlight hover:duration-500 transition dark:text-text-projectdarkblue dark:hover:text-primary-highlight">
              Source Code <BsArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectHeroDetails;