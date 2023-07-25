import { Suspense } from "react";
import { Hero } from "./components";
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
    </div>
  );
}
