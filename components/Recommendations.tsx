import Image from "next/image";
import { rlogo } from "@/assets/images";

const Recommendations = () => {
  return (
    <section className="flex items-center justify-center bg-recommendations-clear bg-cover bg-no-repeat w-full md:h-[700px] h-[450px] mt-10">
      <div className="flex flex-col gap-8 max-w-[709px] items-center pt-10">
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
        <h1 className="text-[#151E2C80] dark:text-[#BEC1D5] text-xs md:text-sm font-medium text-center px-2 max-h-[200px] overflow-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nesciunt
          temporibus a veritatis atque aperiam natus vitae distinctio, minus
          similique consequatur necessitatibus ipsam ab inventore itaque
          praesentium officia possimus iste.
        </h1>
        <div className="flex flex-col gap-2 items-center">
          <Image
            src={rlogo}
            alt=""
            width={80}
            height={80}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-[#151E2C] dark:text-[#BEC1D5] md:text-base text-sm font-bold ">
              Robert Downey Jr.
            </h3>
            <h4 className="text-[#B9B9B9] dark:text-[#BEC1D5] text-[10px] md:text-xs font-medium">
              Software Developer
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
