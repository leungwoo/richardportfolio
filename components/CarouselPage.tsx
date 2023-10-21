"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlForImage } from "@/sanity/lib/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";

import { Recommendation } from "@/config/interfaces";
interface Props {
  recommendationsData: Recommendation[];
}

const CarouselPage = ({ recommendationsData }: Props) => {
  return (
    <Carousel
      autoPlay
      className=" max-w-[1137px] w-screen max-h-[800px] md:pt-10  justify-center items-center "
      centerSlidePercentage={100}
      centerMode
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <BsArrowLeftCircleFill className="w-9 h-9 dark:text-white dark:bg-[#151E2C] text-[#151E2C] bg-[#FFFFFF]" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <BsArrowRightCircleFill className="w-9 h-9 dark:text-white dark:bg-[#151E2C] text-[#151E2C] bg-[#FFFFFF] " />
          </div>
        );
      }}
    >
      {recommendationsData.map((recommendation, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col px-14 gap-10  min-w-[354px] xl:w-[1137px] max-h-[800px] justify-between xl:h-[328px] "
        >
          <Image
            src={urlForImage(recommendation.img.asset).toString()}
            alt="profile"
            width={100}
            height={100}
            className="rounded-xl object-cover w-[328px] h-[328px]"
          />

          <div className="flex flex-col max-w-[748px] gap-8 items-start ">
            <div className="flex flex-col gap-4 justify-between">
              <div className="gap-2 flex ">
                <AiFillStar
                  color="#FEC84B"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <AiFillStar
                  color="#FEC84B"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <AiFillStar
                  color="#FEC84B"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <AiFillStar
                  color="#FEC84B"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <AiFillStar
                  color="#FEC84B"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <p className="text-[#6F74A7] dark:text-[#F3F8FF] leading-[20px] text-[18px] md:text-lg font-normal text-left lg:text-[20px] ">
                {recommendation.recommendations}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-start ">
              <h3 className="text-[#192333] dark:text-[#FFFFFF] text-[18px] font-semibold">
                - {recommendation.name}
              </h3>
              <h4 className="text-[#6F74A7] dark:text-[#F3F8FF] text-[18px] font-normal">
                {recommendation.title}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
