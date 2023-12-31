import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center md:py-[72px] md:px-[85px] py-12 px-6 bg-[#F3F8FF] dark:bg-[#192333]  w-screen max-w-[1440px]">
      <div className="flex sm:flex-row flex-col items-center gap-2 ">
        <div>
          <span className="text-text-title font-bold xl:text-4xl text-3xl dark:text-white">
            What{" "}
          </span>

          <div className="relative inline-block">
            <span className="z-10 relative text-text-title font-bold  xl:text-4xl text-3xl dark:text-white">
              services{" "}
            </span>
            <div className="absolute z-0 inset-x-0 -bottom-1 bg-primary-highlight md:h-[15px] h-[15px]"></div>
          </div>
        </div>
        <div>
          <span className="text-text-title font-bold xl:text-4xl text-3xl dark:text-white">
            do i provide
          </span>
        </div>
      </div>
      <ServicesCard />
    </div>
  );
};

export default Services;
