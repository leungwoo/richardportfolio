import { client } from "@/sanity/lib/client";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectDetails = async ({ params }: Props) => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "${params.slug}"][0]{
            title,
            description,          
            _id,
            slug,
            imgUrl,
            technology,
            link,
            featured,
        }`
  );
  console.log(`Slug:${product}`);
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
