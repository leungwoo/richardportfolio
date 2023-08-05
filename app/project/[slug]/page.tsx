import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

import ProjectHeroDetails from "../../../components/ProjectHeroDetails";
import { urlForImage } from "@/sanity/lib/image";

interface Slug {
  current: string;
  _type: string;
}

interface Props {
  params: {
    slug: Slug;
  };
}

const ProjectDetails = async ({ params }: Props) => {
  const projects = await client.fetch<Project>(
    `*[_type == "projects" && slug.current == "${params.slug}"][0]{
            title,
            description,          
            link,
            sourcecode,
            techstack,
            imgUrl,
            _id,
            problemstatement,
            learningsAndChallenges,
            startdate,
            myrole,
            enddate,
        }`
  );

  return (
    <div className="pt-[80px] flex flex-col justify-center items-center ">
      <ProjectHeroDetails projects={projects} />
      {/* project date section*/}
      <section className="bg-primary-Default dark:bg-[#222330] w-full">
        <div className="flex flex-row md:max-w-[1220px] mx-auto md:py-16 py-8 md:px-40 px-10 justify-between ">
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              My Role
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-2xl">
              {projects.myrole}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              Start Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-2xl">
              {projects.startdate}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              End Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-2xl">
              {projects.enddate}
            </h1>
          </div>
        </div>
      </section>
      {/* Tech Stack section*/}
      <section className="w-full">
        <div className="md:pt-24 md:pb-24 pt-12 pb-12 md:px-40 px-10 md:max-w-[1220px] mx-auto">
          <div className="flex flex-col gap-1">
            <h5 className="text-[8px] md:text-[10px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              TECHNOLOGIES USED
            </h5>
            <h1 className="md:text-4xl text-base font-bold">Tech Stack</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center gap-10 pt-5 text-center ">
            {projects.techstack.map((tech, index) => (
              <div key={index}>
                <Image
                  src={urlForImage(tech.asset).url()}
                  alt={projects.shorttitle}
                  width={100}
                  height={100}
                  className="object-cover w-12 h-12 md:w-24 md:h-24 "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Description section*/}
      <section className="bg-primary-Default dark:bg-[#222330] w-full ">
        <div className="md:max-w-[1220px] mx-auto">
          <h1 className="text-[#6F74A7] dark:text-[#BEC1D5] font-normal md:text-2xl text-lg md:px-40 px-10 py-10">
            {projects.description}
          </h1>
        </div>
      </section>

      {/* ProblemStatement section*/}
      <section>
        <div className=" flex flex-col max-w-[1220px] mx-auto md:px-40 px-10 py-10 gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="text-[8px] md:text-[10px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              PROBLEM
            </h5>
            <h1 className="md:text-4xl text-base font-bold">
              Problem Statement
            </h1>
          </div>

          <h1 className="text-[#6F74A7] dark:text-[#BEC1D5] md:text-[22px] text-lg">
            {projects.problemstatement}
          </h1>
          <div className="flex item-center justify-center md:pt-20 pt-10  ">
            <Image
              src={urlForImage(projects.imgUrl[2].asset).url()}
              alt={projects.shorttitle}
              width={1000}
              height={1000}
              className="object-cover  rounded-xl  md:w-[800px] md:h-[400px] w-[280px] h-[150px] "
            />
          </div>
        </div>
      </section>
      {/* My Process section*/}
      <section>My Process</section>
      {/* User Flow section*/}
      <section>User Flow</section>
      {/* Take aways section*/}
      <section>Take aways</section>
    </div>
  );
};

export default ProjectDetails;
