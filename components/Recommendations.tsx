import Image from "next/image";

import { Recommendation } from "@/config/interfaces";
// import { rlogo } from "@/assets/images";

interface Props {
  recommendationsData: Recommendation[];
}

import { CarouselPage } from "../components/index";

const Recommendations = ({ recommendationsData }: Props) => {
  return (
    <section className="flex items-center justify-center bg-recommendations-clear bg-cover bg-no-repeat w-full md:h-[700px] h-[450px] mt-10">
      <div className="flex flex-col gap-8 max-w-[709px] items-center pt-10">
        <div className="flex flex-row items-center gap-2 ">
          <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            What
          </span>
          <div className="relative inline-block">
            <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
              they say
            </span>{" "}
            <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[15px]"></div>
          </div>
          <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            about me
          </span>
        </div>
        <CarouselPage recommendationsData={recommendationsData} />
      </div>
    </section>
  );
};

export default Recommendations;
