import { Recommendation } from "@/config/interfaces";

interface Props {
  recommendationsData: Recommendation[];
}

import { CarouselPage } from "../components/index";

const Recommendations = ({ recommendationsData }: Props) => {
  return (
    <section className="flex items-center justify-center bg-[#F3F8FF] dark:bg-[#192333] w-screen max-w-[1440px] md:py-[85px] md:px-[72px] py-[48px] px-[24px]">
      <div className="flex flex-col flex-wrap gap-5  items-center  md:pt-0 ">
        <div className="flex flex-row items-center gap-2 ">
          <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            What
          </span>
          <div className="relative inline-block">
            <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
              they say
            </span>{" "}
            <div className="absolute z-0 inset-x-0 -bottom-1 bg-primary-highlight h-[15px]"></div>
          </div>
          <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            about me
          </span>
        </div>
        <div className=" md:pt-10  justify-center items-center ">
          <CarouselPage recommendationsData={recommendationsData} />
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
