import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";

import { ProjectHeroDetails } from "@/components/ProjectHeroDetails";

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
        }`
  );
  //   console.log("Project:", JSON.stringify(projects, null, 2));
  return (
    <div className="pt-[80px] flex flex-col justify-center items-center">
      <ProjectHeroDetails projects={projects} />
      TechStackDetails
    </div>
  );
};

export default ProjectDetails;
