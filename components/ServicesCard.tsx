import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

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
const ServicesCard = ({ servicesData }: { servicesData: Service[] }) => {
  return (
    <div className="flex flex-wrap md:gap-8 gap-10 justify-center py-10 ">
      {servicesData.map((service: Service, index) => (
        <div
          key={index}
          className={`${
            index % 2 == 0 ? "xl:translate-y-0" : "xl:translate-y-[44px]"
          } flex flex-col justify-between bg-primary-Default hover:bg-primary-accentBlue text-text-navbar dark:text-text-default hover:text-white
           dark:hover:text-white dark:bg-[#192333] dark:shadow-md dark:shadow-[#1F2E48] dark:hover:shadow-2xl dark:hover:shadow-[#0252CD47] dark:hover:bg-primary-darkmodeblue hover:shadow-lg hover:shadow-primary-accentBlue rounded-lg p-5 flex-1 min-w-[285px] h-full gap-10
           shadow-lg shadow-[#E0ECFF] transition duration-500 ease-in-out transform  hover:scale-105`}
        >
          <div>
            <Image
              src={urlForImage(service.icon.asset).url()}
              alt={service.title}
              width={30}
              height={30}
              className="left-0 object-contain md:w-[62px] md:h-[62px] w-[40px] h-[40px]  rounded-lg p-2 bg-primary-accentBlue dark:bg-primary-darkmodeblue shadow-lg shadow-primary-accentBlue"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[24px] text-[#151E2C] dark:text-white ">
              {service.title}
            </h1>
            <p className="font-medium text-[12px] leading-5">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
