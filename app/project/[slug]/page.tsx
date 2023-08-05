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
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.myrole}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              Start Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.startdate}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              End Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.enddate}
            </h1>
          </div>
        </div>
      </section>
      {/* Tech Stack section*/}
      <section className="w-full">
        <div className="md:pt-24 md:pb-24 pt-12 pb-12 md:px-40 px-10 md:max-w-[1220px] mx-auto">
          <div className="flex flex-col gap-1">
            <h5 className="text-[8px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
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
                  className="object-cover w-10 h-10 md:w-24 md:h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>Description</section>
      <section>Problem Statement</section>
      <section>My Process</section>
      <section>User Flow</section>
      <section>Take aways</section>
    </div>
  );
};

export default ProjectDetails;
