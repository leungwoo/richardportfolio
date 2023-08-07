import { Recommendation } from "@/config/interfaces";

interface Props {
  recommendationsData: Recommendation[];
}

import { CarouselPage } from "../components/index";
import TestCar from "./TestCar";

const Recommendations = ({ recommendationsData }: Props) => {
  return (
    <section className="flex items-center justify-center bg-recommendations-clear bg-cover bg-no-repeat w-full md:h-[700px] h-[500px] md:mt-20 mt-10 pb-4">
      <div className="flex flex-col flex-wrap gap-5 max-w-[709px] items-center pt-32 md:pt-0 ">
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
        <div className=" md:pt-10 flex-wrap justify-center items-center  ">
          {/* <CarouselPage recommendationsData={recommendationsData} /> */}
          <TestCar recommendationsData={recommendationsData} />
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
