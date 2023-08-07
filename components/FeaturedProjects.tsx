import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Suspense } from "react";
//import getProjects from "../app/libs/getProjects";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "../config/interfaces";

interface Props {
  projectsData: Project[];
}

const FeaturedProjects = ({ projectsData }: Props) => {
  const featuredprojects = projectsData.filter(
    (project: Project) => project.featured === true
  );
  const colors = ["#FF6934", "#56B0B9", "#5F9FFE"];
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-full  px-5 md:px-16">
      {/* Title */}
      <div className="flex flex-row items-center gap-2">
        <div className="relative inline-block">
          <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            Featured
          </span>{" "}
          <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[15px]"></div>
        </div>
        <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          Projects
        </span>
      </div>

      {/* Projects */}
      {featuredprojects.map((project: Project, index: number) => (
        <div
          key={index}
          className={`mt-10 md:pt-10 md:pb-10 pb-2 flex md:flex-row flex-col w-full shadow-lg shadow-slate-500 dark:shadow-slate-400 rounded-lg ${
            index === 1 ? "md:flex-row-reverse" : "flex-row"
          }`}
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <div className="flex-1 flex-col md:flex-row p-4 space-y-5 text-white justify-center md:pt-15 mx-10">
            <div className="text-center md:text-left">
              <h1 className="md:text-[40px] text-2xl font-bold md:leading-10">
                {project.title}
              </h1>
            </div>

            <div className="flex gap-4 md:text-left md:justify-start justify-center items-center flex-wrap ">
              {project.technology.map((tech: string, techIndex: number) => (
                <span key={techIndex} className="text-sm font-normal">
                  <h1 className="bg-white bg-opacity-30 py-3 px-4 rounded-lg">
                    {tech}
                  </h1>
                </span>
              ))}
            </div>
            <div className="flex justify-center md:justify-start items-center ">
              <Link href={`/project/${project.slug.current}`}>
                <span className=" justify-between max-w-[220px] mt-10 text-center gap-4 flex flex-row items-center font-bold md:text-base text-xs hover:text-primary-highlight">
                  See Project Details <BsArrowRight size={30} />
                </span>
              </Link>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex-1 flex items-center justify-center cursor-pointer px-5">
              <Link href={`/project/${project.slug.current}`}>
                <Image
                  src={urlForImage(project.imgUrl[0].asset).url()}
                  alt={project.title}
                  width={2800}
                  height={1300}
                  loading="eager"
                  className="object-cover "
                />
              </Link>
            </div>
          </Suspense>
        </div>
      ))}
      {/* Button */}
      <Link href="/CaseStudies">
        <button className=" flex flex-row items-center justify-between md:mt-16 mt-10 hover:opacity-75 border-none bg-text-accentBlue font-bold dark:bg-primary-darkmodeblue rounded-full md:w-[286px] w-[260px] md:h-[64px] h-[55px] py-4 px-6 text-center text-white text-sm md:text-base hover:duration-500 transition duration-500 ease-in-out transform">
          See more Case Studies <BsArrowRight size={30} />
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProjects;
