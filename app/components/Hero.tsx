import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

interface HeroCardProps {
  title: string;
  description: string;
  imgUrl: any;
}

export default function Hero({ title, description, imgUrl }: HeroCardProps) {
  return (
    <div className="bg-primary-Default dark:bg-primary-darkDefault h-viewport-height pt-5 ">
      <div>
        <h3>Hi my name is Richard Gabriel</h3>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
      <div>
        <Image
          src={urlForImage(imgUrl)?.toString()}
          alt="hero"
          width={1000}
          height={1000}
          className="w-full h-40 object-cover"
        />
      </div>
    </div>
  );
}
