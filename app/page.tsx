import { Suspense } from "react";
import {
  FeaturedProjects,
  Footer,
  Hero,
  Recommendations,
  Services,
  Skills,
} from "../components";
import getHero from "./libs/getHero";
import getSkills from "./libs/getSkills";
import getServices from "./libs/getServices";
import getProjects from "./libs/getProjects";
import getRecommendations from "./libs/getRecommendations";

import Loading from "./loading";
interface Skill {
  imgUrl: any;
}

export default async function Homepage() {
  const heroData = await getHero();
  const skillsData = await getSkills();
  const servicesData = await getServices();
  const projectsData = await getProjects();
  const recommendationsData = await getRecommendations();

  const { title, description, imgUrl } = heroData[0];

  return (
    <div className="flex flex-col justify-center xl:max-w-[1440px] items-center ">
      <Suspense fallback={<Loading />}>
        <Hero title={title} description={description} imgUrl={imgUrl} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {skillsData.map((skill: Skill, index: number) => (
          <Skills key={index} skillsData={skill as Skill} />
        ))}
      </Suspense>
      <Services servicesData={servicesData} />
      {/* <WorkExperience /> */}
      <Suspense fallback={<Loading />}>
        <FeaturedProjects projectsData={projectsData} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Recommendations recommendationsData={recommendationsData} />
      </Suspense>

      <Footer />
    </div>
  );
}
