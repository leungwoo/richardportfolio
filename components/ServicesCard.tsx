import { services } from "@/constants/services";
interface Service {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const ServicesCard = () => {
  return (
    <div className="flex flex-wrap md:gap-8 gap-10 justify-center py-10 ">
      {services.map((service: Service, index: number) => (
        <div
          key={index}
          className={`serviceCard group flex flex-col justify-between text-[#151E2C] hover:text-white bg-[#F3F8FF] hover:bg-primary-accentBlue dark:text-text-default
   dark:hover:text-white dark:bg-[#192333] dark:shadow-md dark:shadow-[#1F2E48] dark:hover:shadow-2xl dark:hover:shadow-[#0252CD47]
   dark:hover:bg-primary-darkmodeblue hover:shadow-lg hover:shadow-primary-accentBlue rounded-lg p-5 flex-1 min-w-[285px] h-full gap-10
   shadow-2xl shadow-[#E0ECFF] hover:xl:translate-y-[44px] transition-all duration-1000 ease-in-out `}
        >
          <div className="left-0 hoverBgChange svg-container dark:svg-container items-center justify-center flex  md:w-[62px] md:h-[62px] w-[40px] h-[40px] rounded-lg bg-[#0252CD] dark:bg-[#428DFF] shadow-2xl shadow-[#0252CD47]">
            <service.Component className="text-white rounded-lg  group-hover:text-[#0252CD] dark:text-white dark:group-hover:text-[#428DFF]" />
          </div>

          <span className="flex flex-col gap-2 group">
            <h1 className="font-semibold text-[24px]  dark:text-white">
              {service.title}
            </h1>
            <p className="font-medium text-[12px] text-[#6F74A7] group-hover:text-white leading-5 dark:text-white">
              {service.description}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
