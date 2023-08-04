import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Project } from "../config/interfaces";

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
      {projectsData.map((project: Project, index: number) => (
        <div
          key={index}
          style={{ backgroundColor: colors[index % colors.length] }}
          className="flex flex-col items-center justify-center p-4"
        >
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={urlForImage(project.imgUrl[1].asset).url()}
              alt={project.shorttitle}
              width={1750}
              height={1080}
              loading="eager"
              className="object-contain md:h-[300px] md:w-[500px] w-[280px] h-[200px]"
            />
          </div>
          <h1>{project.shorttitle}</h1>
          <h3>{project.shortdescription}</h3>
        </div>
      ))}
    </div>
  );
}

export default CasestudyGallery;
