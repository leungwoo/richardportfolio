import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { hipnode, carrent, filmpire } from "../../assets/images/index";

const projects = [
  {
    title: "Hipnode - Social Media Application",
    technologies: ["React", "Next.js"],
    imgUrl: hipnode,
  },
  {
    title: "Morrent - A Car Rental Application",
    technologies: ["Next.js", "TailwindCSS"],
    imgUrl: carrent,
  },
  {
    title: "FilmWorld - A Movie Review Application",
    technologies: ["React", "TailwindCSS"],
    imgUrl: filmpire,
  },
];

const FeaturedProjects = () => {
  const colors = ["#5F9FFE", "#56B0B9", "#1F1D2B"];
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
      {projects.map((project, index) => (
        <div
          key={index}
          className={`mt-5 pt-5 pb-5 flex md:flex-row flex-col w-full rounded-lg cursor-pointer ${
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
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-sm font-normal">
                  <h1 className="bg-white bg-opacity-30 py-3 px-4 rounded-lg">
                    {tech}
                  </h1>
                </span>
              ))}
            </div>

            <div className="text-center md:text-left md:pt-10">
              <Link
                href="/CaseStudies"
                className=" flex flex-row justify-center md:justify-start items-center gap-4 font-bold md:text-base text-xs hover:text-primary-highlight"
              >
                See Project Details{" "}
                <span>
                  <BsArrowRight size={30} />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={project.imgUrl}
              alt={project.title}
              width={1750}
              height={1080}
              className="object-contain md:h-[300px] md:w-[500px] w-[280px] h-[200px] p-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
