import { Suspense } from "react";
import {
  FeaturedProjects,
  Footer,
  Hero,
  Services,
  Skills,
} from "../components";
import getHero from "./libs/getHero";
import getSkills from "./libs/getSkills";
import getServices from "./libs/getServices";

import Loading from "./loading";
interface Skill {
  imgUrl: any;
}

export default async function Homepage() {
  const heroData = await getHero();
  const skillsData = await getSkills();
  const servicesData = await getServices();

  const { title, description, imgUrl } = heroData[0];

  return (
    <div className="flex flex-col">
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
        <FeaturedProjects />
      </Suspense>
      <Footer />
    </div>
  );
}
