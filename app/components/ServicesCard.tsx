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
    <div className="flex flex-wrap gap-5 justify-center pt-10">
      {servicesData.map((service: Service, index: number) => (
        <div
          key={service._id}
          className="flex flex-col justify-between bg-primary-Default hover:bg-primary-accentBlue text-text-navbar dark:text-text-default hover:text-white
           dark:hover:text-white dark:bg-primary-carddark dark:hover:bg-primary-darkmodeblue rounded-lg p-4 flex-1 min-w-[286px] min-h-[356px]
           shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-105"
        >
          <Image
            src={urlForImage(service.icon.asset).url()}
            alt={service.title}
            width={30}
            height={30}
            className="left-0 object-contain md:w-[62px] md:h-[62px] w-[40px] h-[40px]  rounded-lg p-2 bg-primary-accentBlue dark:bg-primary-darkmodeblue"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px] text-text-title dark:text-white">
              {service.title}
            </h1>
            <p className="font-medium text-[12px] 2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
