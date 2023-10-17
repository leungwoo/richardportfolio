import { Project } from "@/config/interfaces";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

import ProjectHeroDetails from "../../../components/ProjectHeroDetails";
import { LearningsAndChallenges } from "@/config/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import { bullseye, tick } from "../../../assets/images/index";
import { ContactCard, Process } from "@/components";
import getProjects from "../../libs/getProjects";
import CasestudyCard from "@/components/CasestudyCard";
import Loading from "@/components/Loading";
import { Suspense } from "react";

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
  const projectData = await getProjects();
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
    <div className="  pt-[70px]  xl:max-w-[1440px] flex flex-col justify-center items-center ">
      <ProjectHeroDetails projects={projects} />
      {/* project date section*/}
      <section className=" dark:bg-[#151E2C] max-w-[1440px] w-screen">
        <div className="flex flex-row md:max-w-[1440px] mx-auto lg:py-[52px] lg:px-[280px] px-[24px] py-[36px] justify-between ">
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              My Role
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-[22px]">
              {projects.myrole}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              Start Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-[22px]">
              {projects.startdate}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#151E2C] dark:text-[#FFFFFF] font-bold md:text-base text-sm">
              End Date
            </label>
            <h1 className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-[22px]">
              {projects.enddate}
            </h1>
          </div>
        </div>
      </section>
      {/* Tech Stack section*/}
      <section className="dark:bg-[#151E2C] max-w-[1440px] w-screen ">
        <div className="lg:py-[72px] lg:px-[280px] px-[24px] py-[36px]  mx-auto">
          <div className="flex flex-col gap-1">
            <h5 className="text-[12px] md:text-[14px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              TECHNOLOGIES USED
            </h5>
            <h1 className="md:text-[32px] text-[28px] font-bold">Tech Stack</h1>
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
      <section className=" max-w-[1440px] w-screen bg-primary-Default dark:bg-[#192333] lg:py-[72px] lg:px-[280px] px-[24px] py-[36px]">
        <h1 className="text-[#6F74A7] dark:text-[#BEC1D5] leading-[30px] font-normal md:text-[22px] text-base  ">
          {projects.description}
        </h1>
      </section>

      {/* ProblemStatement section*/}
      <section>
        <div className=" flex flex-col max-w-[1440px] w-screen dark:bg-[#151E2C] lg:py-[72px] lg:px-[280px] px-[24px] py-[36px] gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="text-[12px] md:text-[14px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              PROBLEM
            </h5>
            <h1 className="md:text-[32px] text-[28px] font-bold">
              Problem Statement
            </h1>
          </div>

          <h1 className="text-[#6F74A7] dark:text-[#BEC1D5] md:text-[22px] leading-[30px] text-base">
            {projects.problemstatement}
          </h1>
          <div className="flex item-center justify-center md:pt-20 pt-10  ">
            <Image
              src={urlForImage(projects.imgUrl[2].asset).url()}
              alt={projects.shorttitle}
              width={1000}
              height={1000}
              className="object-contain  rounded-xl  md:w-[800px] md:h-[400px] w-[280px] h-[150px] "
            />
          </div>
        </div>
      </section>
      <div className="max-w-[1440px] flex flex-col ">
        <span className="max-w-[1440px] w-screen justify-center items-center text-center md:py-9 py-4 text-white  bg-primary-accentBlue dark:bg-primary-darkmodeblue md:text-3xl text-lg font-bold">
          HIGH-FIDELITY FIGMA DESIGN
        </span>
        <Image
          src={urlForImage(projects.imgUrl[3].asset).url()}
          alt={projects.shorttitle}
          width={1000}
          height={1000}
          className="object-cover w-screen max-h-[700px]"
        />
      </div>
      {/* My Process section*/}
      <section>
        <Process />
      </section>
      {/* User Flow section*/}
      {/* <section>User Flow</section> */}

      {/* Take aways section*/}
      <section>
        <div className=" flex flex-col max-w-[1440px] w-screen dark:bg-[#151E2C]  lg:py-[72px] lg:px-[280px] px-[24px] py-[36px] gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="text-[12px] md:text-[14px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
              LEARNINGS & CHALLENGES
            </h5>
            <h1 className="md:text-[32px] text-[28px] font-bold">Takeaways</h1>
          </div>
          <section>
            <div className="space-y-4 mt-4 dark:bg-[#192333] bg-primary-Default  md:px-[40px] px-[14px] md:py-[36px] py-[24px] rounded-xl ">
              <h1 className="md:text-lg text-base font-bold text-[#47A34B]">
                Learnings
              </h1>
              {Object.keys(projects.learningsAndChallenges).map((key) => {
                if (key.startsWith("learning")) {
                  const learningKey = key as keyof LearningsAndChallenges;
                  return (
                    <div
                      key={key}
                      className="space-y-2 flex flex-row gap-2 items-center"
                    >
                      <Image
                        src={bullseye}
                        alt="bullet"
                        width={25}
                        height={25}
                        className="object-cover w-6 h-6"
                      />
                      <p className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-lg leading-5">
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
            <div className="space-y-4 mt-4 dark:bg-[#192333] bg-primary-Default md:px-[40px] px-[14px] md:py-[36px] py-[24px]  rounded-xl ">
              <h1 className="md:text-lg text-base font-bold text-[#E15A46]">
                Challenges
              </h1>
              {Object.keys(projects.learningsAndChallenges).map((key) => {
                if (key.startsWith("challenge")) {
                  const challengeKey = key as keyof LearningsAndChallenges;
                  return (
                    <div
                      key={key}
                      className="space-y-2 flex flex-row gap-2 items-center "
                    >
                      <Image
                        src={tick}
                        alt="bullet"
                        width={35}
                        height={35}
                        className="object-cover w-8 h-8"
                      />
                      <p className="text-[#9191BC] dark:text-[#BEC1D5] text-xs md:text-lg leading-5">
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
      {/* Other CaseStudies section*/}
      <section>
        <div className="bg-primary-Default dark:bg-[#192333] max-w-[1440px] w-screen lg:py-[72px] lg:px-[280px]">
          <div className="flex flex-col mx-auto px-4 max-w-[1102px] md:px-10  justify-center h-[600px] ">
            <div className="flex flex-col gap-1 pt-5">
              <h5 className="text-[12px] md:text-[14px] font-bold dark:text-text-projectdarkblue text-text-accentBlue">
                PROJECTS
              </h5>
              <h1 className="md:text-[32px] text-[28px] font-bold">
                Other Case Studies
              </h1>
            </div>
            <Suspense fallback={<Loading />}>
              <div className="flex mx-auto justify-start w-full gap-4 overflow-scroll no-scrollbar pt-10">
                {projectData.map((casestudy: any, index: number) => {
                  return (
                    <div key={index} className="flex-1 min-w-[280px]">
                      <CasestudyCard casestudy={casestudy} />
                    </div>
                  );
                })}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
      <ContactCard />
    </div>
  );
};

export default ProjectDetails;
