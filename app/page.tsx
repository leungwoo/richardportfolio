import { Hero } from "./components";
import getHero from "./libs/getHero";

export default async function Homepage() {
  const heroData = await getHero();
  const { title, description, imgUrl } = heroData[0];

  return (
    <div className="flex flex-col h-viewport-height">
      <Hero title={title} description={description} imgUrl={imgUrl} />
    </div>
  );
}

{
}
