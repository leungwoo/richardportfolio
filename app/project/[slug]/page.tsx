import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";

import ProjectHeroDetails from "../../../components/ProjectHeroDetails";

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

      <div className="bg-primary-Default dark:bg-[#222330] w-full">
        <div className="flex flex-row items-center justify-between md:px-48 px-10 lg:py-16 py-8 ">
          <div className="flex flex-col">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              My Role
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.myrole}
            </h1>
          </div>
          <div className="flex flex-col">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              Start Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.startdate}
            </h1>
          </div>
          <div className="flex flex-col">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              End Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
              {projects.enddate}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
