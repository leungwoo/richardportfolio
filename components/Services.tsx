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
    <div className="flex flex-col justify-center items-center md:py-[72px] md:px-[85px] py-12 px-6 p bg-primary-Default dark:bg-primary-darkDefault  w-screen max-w-[1440px]">
      <div className="flex sm:flex-row flex-col items-center gap-2 ">
        <div>
          <span className="text-text-title font-bold xl:text-4xl text-3xl dark:text-white">
            What{" "}
          </span>

          <div className="relative inline-block">
            <span className="z-10 relative text-text-title font-bold  xl:text-4xl text-3xl dark:text-white">
              services{" "}
            </span>
            <div className="absolute z-0 inset-x-0 bottom-0 bg-primary-highlight md:h-[20px] h-[15px]"></div>
          </div>
        </div>
        <div>
          <span className="text-text-title font-bold xl:text-4xl text-3xl dark:text-white">
            do i provide
          </span>
        </div>
      </div>
      <ServicesCard servicesData={servicesData} />
    </div>
  );
};

export default Services;
<div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]" />;
