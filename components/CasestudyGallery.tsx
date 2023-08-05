import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Project } from "../config/interfaces";
import Link from "next/link";

interface Props {
  projectsData: Project[];
}
function CasestudyGallery({ projectsData }: Props) {
  const colors = [
    "#FFEDFE",
    "#FFE7E3",
    "#DAE4FF",
    "#FFE7CA",
    "#FFD7E3",
    "#D4F1EB",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-5 p-5 md:py-10 md:px-20 items-center max-w-[1120px] justify-center mx-auto">
        {projectsData.map((project: Project, index: number) => (
          <div
            key={index}
            className="flex-1 flex-col items-center justify-center min-w-[350px] "
          >
            <Link href={`/project/${project.slug.current}`}>
              <div
                className="rounded-2xl pt-10 px-4  hover:shadow-gray-400 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <Image
                  src={urlForImage(project.imgUrl[1].asset).url()}
                  alt={project.shorttitle}
                  width={1750}
                  height={1080}
                  loading="eager"
                  className="object-contain "
                />
              </div>
            </Link>
            <div className="flex flex-col gap-4 mt-5 ml-4">
              <h1 className="text-[#312E81] dark:text-white font-bold lg:text-[24px]">
                {project.shorttitle}
              </h1>
              <h3 className="text-[#6F74A7] dark:text-[#BEC1D5] font-normal text-[18px]">
                {project.shortdescription}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CasestudyGallery;
