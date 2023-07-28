import React from "react";

const FeaturedProjects = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-row items-center gap-2 ">
        <div className="relative inline-block">
          <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            Featured
          </span>{" "}
          <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[15px]"></div>
        </div>
        <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          Projects
        </span>
      </div>
    </div>
  );
};

export default FeaturedProjects;
