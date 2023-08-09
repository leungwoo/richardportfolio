import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const CasestudyCard = ({ casestudy }: any) => {
  return (
    <div className="card flex shadow-lg shadow-[#DADAFF80] rounded-xl flex-col item-center justify-center w-[280px] ">
      <div className="">
        <Image
          src={urlForImage(casestudy.imgUrl[4].asset).url()}
          alt="casestudyshorttitle"
          width={400}
          height={200}
          className="object-cover rounded-t-xl w-[280px] h-[200px]"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 dark:bg-[#303245] ">
        <h1 className="text-xl font-bold text-text-accentBlue dark:text-text-projectdarkblue">
          {casestudy.shorttitle}
        </h1>
        <h1 className="text-[#6F74A7] dark:text-[#BEC1D5] text-sm font-normal  h-[123px]">
          {casestudy.description.split(" ").slice(0, 20).join(" ")}
          {casestudy.description.split(" ").length > 20 ? "..." : ""}
        </h1>
        <Link href={`/project/${casestudy.slug.current}`}>
          <button className="rounded-md w-full text-white py-2 px-16 text-xs font-medium bg-primary-accentBlue dark:bg-primary-darkmodeblue">
            See Case Study
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CasestudyCard;
