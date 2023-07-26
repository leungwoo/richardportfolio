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
    <div>
      {servicesData.map((service: Service, index: number) => (
        <div key={service._id}>
          <Image
            src={urlForImage(service.icon.asset).url()}
            alt={service.title}
            width={30}
            height={30}
          />

          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
