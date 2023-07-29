import { CSbanner } from "@/assets/images";
import Image from "next/image";

function CaseStudies() {
  return (
    <div className="h-viewport-height pt-[80px]">
      <div className="relative bg-primary-Default dark:bg-primary-carddark  py-[10px]">
        <div className="absolute flex flex-col flex-wrap md:gap-2 gap-1 top-0 right-0 left-0 bottom-0 text-white items-center justify-center">
          <h1 className=" text-xl  sm:text-4xl  xl:text-5xl font-bold">
            Recent Case Studies
          </h1>
          <div className="flex flex-col items-center justify-center max-w-[600px] flex-wrap text-center md:px-20 px-14">
            {" "}
            <h3 className="lg:text-2xl md:font-normal text-xs">
              Diving Deep into Our Most Recent Projects: Insights, Challenges,
              and Triumphs
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={CSbanner}
            alt="casetsudiesbanner"
            width={4480}
            height={1600}
            className="w-full lg:max-h-[427px] rounded-[20px] object-cover md:px-20 sm:px-10 px-8"
          />
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
