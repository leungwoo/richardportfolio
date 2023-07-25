import { Suspense } from "react";
import {
  FeaturedProjects,
  Hero,
  Services,
  Skills,
  WorkExperience,
} from "./components";
import getHero from "./libs/getHero";
import getSkills from "./libs/getSkills";

import Loading from "./loading";

// interface Image {
//   asset: {
//     _ref: string;
//     _type: "image";
//   };
//   hotspot?: {
//     x: number;
//     y: number;
//     height: number;
//     width: number;
//   };
// }

interface Skill {
  imgUrl: any;
  // Add more fields here if needed from the "Skills" Sanity schema
}

export default async function Homepage() {
  const heroData = await getHero();
  const skillsData = await getSkills();

  const { title, description, imgUrl } = heroData[0];

  return (
    <div className="flex flex-col">
      <Suspense fallback={<Loading />}>
        <Hero title={title} description={description} imgUrl={imgUrl} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {skillsData.map((skill: any, index: number) => (
          <Skills key={index} skillsData={skill as Skill} />
        ))}
      </Suspense>
      <Services />
      <WorkExperience />
      <FeaturedProjects />
    </div>
  );
}
