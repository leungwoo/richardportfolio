"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Recommendation } from "@/config/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";

interface Props {
  recommendationsData: Recommendation[];
}

const CarouselPage = ({ recommendationsData }: Props) => {
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] =
    useState<number | null>(null);

  const handleIndicatorClick = (index: number) => {
    setSelectedRecommendationIndex(index);
  };
  return (
    <Carousel
      autoPlay
      className="w-[350px] md:w-full "
      centerSlidePercentage={100} // Center the slide completely
      centerMode
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      //   renderIndicator={(onClickHandler, isSelected, index, label) => {
      //     const defStyle = {
      //       marginLeft: 10,
      //       marginRight: 10,
      //       color: "white",
      //       cursor: "pointer",
      //     };
      //     const style = isSelected
      //       ? { ...defStyle, opacity: 1, color: "black", transform: "scale(2)" }
      //       : {
      //           ...defStyle,
      //           opacity: 0.5,
      //           color: "black",
      //           transform: "scale(1)",
      //         };
      //     return (
      //       <div
      //         className=" inline-flex justify-between items-center transition-all ease-in-out duration-200"
      //         style={style}
      //         onClick={onClickHandler}
      //         onKeyDown={onClickHandler}
      //         key={index}
      //         role="button"
      //         tabIndex={0}
      //         aria-label={`${label} ${index + 1}`}
      //       >
      //         <Image
      //           src={urlForImage(recommendationsData[index].img.asset).url()}
      //           alt="profile"
      //           width={50}
      //           height={50}
      //           className="rounded-full object-cover md:w-8 md:h-8 w-5 h-5"
      //         />
      //       </div>
      //     );
      //   }}
    >
      {recommendationsData.map((recommendation, index) => (
        <div key={index} className="slide-container">
          <div className="content p-4">
            <div>
              <p className="text-[#151E2C80] dark:text-[#BEC1D5] text-xs md:text-base font-medium text-center max-h-[200px] overflow-auto">
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
            <div
              className="inline-flex justify-between items-center transition-all ease-in-out duration-200"
              onClick={() => handleIndicatorClick(index)}
              onKeyDown={() => handleIndicatorClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`${recommendation.name} ${index + 1}`}
            >
              <Image
                src={urlForImage(recommendation.img.asset).url()}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full object-cover md:w-16 md:h-16 w-8 h-8"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
