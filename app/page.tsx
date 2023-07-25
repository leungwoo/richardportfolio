import { Suspense } from "react";
import {
  FeaturedProjects,
  Hero,
  Services,
  Skills,
  WorkExperience,
} from "./components";
import getHero from "./libs/getHero";

import Loading from "./loading";

export default async function Homepage() {
  const heroData = await getHero();
  const { title, description, imgUrl } = heroData[0];

  return (
    <div className="flex flex-col">
      <Suspense fallback={<Loading />}>
        <Hero title={title} description={description} imgUrl={imgUrl} />
      </Suspense>
      <Skills />
      <Services />
      <WorkExperience />
      <FeaturedProjects />
    </div>
  );
}
