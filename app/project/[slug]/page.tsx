import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

import ProjectHeroDetails from "../../../components/ProjectHeroDetails";
import { LearningsAndChallenges } from "@/config/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import {
  definition,
  planning,
  delivery,
  development,
  bullseye,
  tick,
} from "../../../assets/images/index";
import { Footer } from "@/components";

interface Slug {
  current: string;
  _type: string;
}

interface Props {
  params: {
    slug: Slug;
  };
}

const processImages = [
  { title: "Definition", img: definition },
  { title: "Planning", img: planning },
  { title: "Delivery", img: delivery },
  { title: "Development", img: development },
];

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
    <div className="pt-[80px] flex flex-col justify-center items-center w-full">
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
      <div className="w-full flex flex-col md:mt-10 mt-5">
        <span className="w-full justify-center items-center text-center md:py-9 py-4 text-white  bg-primary-accentBlue dark:bg-primary-darkmodeblue md:text-3xl text-lg font-bold">
          HIGH-FIDELITY FIGMA DESIGN
        </span>
        <Image
          src={urlForImage(projects.imgUrl[3].asset).url()}
          alt={projects.shorttitle}
          width={1000}
          height={1000}
          className="object-cover w-full max-h-[700px]"
        />
      </div>
      {/* My Process section*/}
      <section>
        <div className="flex flex-col max-w-[1220px] md:pt-20 pt-10 md:px-40 px-10 items-center justify-center">
          <h1 className=" text-lg md:text-[38px] font-bold text-[#151E2C] dark:text-white">
            My Process
          </h1>
          <div className="flex flex-row justify-between items-center gap-4  md:gap-10 pt-10">
            {processImages.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <Image
                  src={item.img}
                  alt="process images"
                  width={100}
                  height={100}
                  className="object-cover w-12 h-12 md:w-24 md:h-24"
                />
                <span className="md:text-2xl text-[10px] font-semibold text-[#151E2C] dark:text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* User Flow section*/}
      {/* <section>User Flow</section> */}
      {/* Take aways section*/}
      <section>
        <div className=" flex flex-col max-w-[1220px] mx-auto md:px-40 px-10 py-10 gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="text-[8px] md:text-[10px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              LEARNINGS & CHALLENGES
            </h5>
            <h1 className="md:text-4xl text-base font-bold">Takeaways</h1>
          </div>
          <section>
            <div className="space-y-4 mt-4 dark:bg-[#222330] bg-primary-Default md:px-40 px-10 md:py-16 py-10 rounded-xl ">
              <h1 className="md:text-lg text-base font-bold text-[#47A34B]">
                Learnings
              </h1>
              {Object.keys(projects.learningsAndChallenges).map((key) => {
                if (key.startsWith("learning")) {
                  const learningKey = key as keyof LearningsAndChallenges;
                  return (
                    <div
                      key={key}
                      className="space-y-2 flex flex-row gap-1 items-center"
                    >
                      <Image
                        src={bullseye}
                        alt="bullet"
                        width={25}
                        height={25}
                        className="object-cover w-4 h-4"
                      />
                      <p className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
                        {projects.learningsAndChallenges[learningKey]}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>

          <div>
            <div className="space-y-4 mt-4 dark:bg-[#222330] bg-primary-Default md:px-40 px-10 md:py-16 py-10 rounded-xl ">
              <h1 className="md:text-lg text-base font-bold text-[#E15A46]">
                Challenges
              </h1>
              {Object.keys(projects.learningsAndChallenges).map((key) => {
                if (key.startsWith("challenge")) {
                  const challengeKey = key as keyof LearningsAndChallenges;
                  return (
                    <div
                      key={key}
                      className="space-y-2 flex flex-row gap-1 items-center "
                    >
                      <Image
                        src={tick}
                        alt="bullet"
                        width={35}
                        height={35}
                        className="object-cover w-6 h-6"
                      />
                      <p className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-sm">
                        {projects.learningsAndChallenges[challengeKey]}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
