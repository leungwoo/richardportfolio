import ServicesCard from "./ServicesCard";
interface Service {
  _id: string;
  title: string;
  icon: {
    _type: string;
    asset: {
      url: string;
    };
  };
  description: string;
}

const Services = ({ servicesData }: { servicesData: Service[] }) => {
  return (
    <div className="flex flex-col justify-center items-center md:pt-20 pt-10 px-16">
      <div className="flex flex-row items-center gap-2 ">
        <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          What
        </span>
        <div className="relative inline-block">
          <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
            services
          </span>{" "}
          <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[15px]"></div>
        </div>
        <span className="text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          do i provide
        </span>
      </div>
      <ServicesCard servicesData={servicesData} />
    </div>
  );
};

export default Services;
<div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]" />;
