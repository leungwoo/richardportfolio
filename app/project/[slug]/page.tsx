import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";

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
            techstack,
            imgUrl,
            _id,
            technology,
            problemstatement,
            learningsAndChallenges,
            featured,
        }`
  );
  console.log("Project:", JSON.stringify(projects, null, 2));
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
