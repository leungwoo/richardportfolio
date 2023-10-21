"use client";
import { useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlForImage } from "@/sanity/lib/image";

import { Carousel } from "react-responsive-carousel";
import { Recommendation } from "@/config/interfaces";
import { AiFillStar } from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
interface Props {
  recommendationsData: Recommendation[];
}

const CarouselPage = ({ recommendationsData }: Props) => {
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] =
    useState<number | null>(null);

  return (
    <Carousel
      autoPlay
      className="min-w-[354px] w-screen"
      centerSlidePercentage={100} // Center the slide completely
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
            <FaArrowCircleLeft className="w-9 h-9 text-white" />
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
            <FaArrowCircleRight className="w-9 h-9 text-white" />
          </div>
        );
      }}
    >
      {recommendationsData.map((recommendation, index) => (
        <div
          key={index}
          className="flex lg:flex-row flex-col px-14 gap-5 min-w-[354px]  "
        >
          <Image
            src={urlForImage(recommendation.img.asset).url()}
            alt="profile"
            width={5000}
            height={5000}
            className="rounded-lg object-cover md:w-[384px] md:h-[384px] w-[100px] h-[100px]"
          />

          <div className="flex flex-col xl:max-w-[784px] gap-5 items-start ">
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
            <div className="flex flex-col gap-4 ">
              <p className="text-[#6F74A7] dark:text-[#F3F8FF] leading-[28.8px] text-[18px] md:text-lg font-normal text-left lg:text-[22px] max-h-[200px] ">
                {recommendation.recommendations}
              </p>

              <div className="flex flex-col gap-1 text-start mt-10">
                <h3 className="text-[#192333] dark:text-[#FFFFFF] md:text-base text-sm font-bold">
                  - {recommendation.name}
                </h3>
                <h4 className="text-[#6F74A7] dark:text-[#F3F8FF] text-[10px] md:text-sm font-medium">
                  {recommendation.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
{
  /* <div key={index} className="slide-container">
<div className="content p-4">
  <div>
    <p className="text-[#151E2C80] dark:text-[#BEC1D5] text-xs md:text-lg font-medium text-center max-h-[200px] overflow-auto">
      {recommendation.recommendations}
    </p>
    <div className="flex flex-col gap-1 items-center mt-4">
      <h3 className="text-[#151E2C] dark:text-[#BEC1D5] md:text-base text-sm font-bold">
        {recommendation.name}
      </h3>
      <h4 className="text-[#B9B9B9] dark:text-[#BEC1D5] text-[10px] md:text-sm font-medium">
        {recommendation.title}
      </h4>
    </div>
  </div>
</div>
<div className="indicator  p-2">
  <div className="inline-flex justify-between items-center transition-all ease-in-out duration-200">
    <Image
      src={urlForImage(recommendation.img.asset).url()}
      alt="profile"
      width={50}
      height={50}
      className="rounded-full object-cover md:w-16 md:h-16 w-8 h-8"
    />
  </div>
</div>
</div> */
}
