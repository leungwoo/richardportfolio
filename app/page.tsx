import Hero from "./components/Hero";
import getHero from "./libs/getHero";

export default async function Homepage() {
  const heroData = await getHero();
  const { title, description, imgUrl } = heroData[0];
  console.log(`This is the image url: ${imgUrl}`);
  return (
    <div className="min-h-screen">
      <Hero title={title} description={description} imgUrl={imgUrl} />
    </div>
  );
}

{
}
