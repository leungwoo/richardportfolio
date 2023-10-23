import { CSbanner } from "@/assets/images";
import Image from "next/image";
import { Suspense } from "react";

import Loading from "../../components/Loading";
import { ContactCard, CasestudyGallery } from "../../components";
import getProjects from "../libs/getProjects";

export default async function CaseStudies() {
  const projectsData = await getProjects();

  return (
    <div className="flex flex-col items-center justify-between md:h-screen pt-[70px]  xl:max-w-[1440px] ">
      <div className=" flex dark:bg-[#192333] bg-[#F3F8FF] xl:max-h-[410px] w-screen max-w-[1440px] min-w-[345px] items-center justify-center">
        <div className="flex flex-col gap-5 py-12 px-[24px] items-center  ">
          <div className="flex flex-col md:flex-row md:gap-4 text-center items-center leading-[48px]">
            <h1 className=" text-text-title font-bold lg:text-[64px] text-[44px] dark:text-white ">
              Recent{" "}
            </h1>
            <div className="relative inline-block">
              <h1 className="z-10 relative text-text-title font-bold lg:text-[64px] text-[44px] dark:text-white ">
                Case Studies
              </h1>
              <div className="absolute inset-x-0 -bottom-0.5 lg:-bottom-3 bg-primary-highlight xl:h-[22px] h-[18px]"></div>
            </div>
          </div>
          <span className="items-center text-center max-w-[704px]  text-[#6F74A7] dark:text-[#F3F8FF] text-[14px] xl:text-[20px]">
            Dive into my recent success stories and discover how I&apos;ve
            helped clients overcome challenges, innovate, and achieve their
            goals
          </span>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <CasestudyGallery projectsData={projectsData} />
      </Suspense>
      <ContactCard />
    </div>
  );
}
