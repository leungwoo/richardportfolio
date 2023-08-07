"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const recommendationsData = [
  {
    img: {
      asset: {
        url: "https://via.placeholder.com/50", // Replace with actual image URL
      },
    },
    name: "J Doe",
    title: "Web Developer",
    recommendations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: {
      asset: {
        url: "https://via.placeholder.com/50", // Replace with actual image URL
      },
    },
    name: "Peter Doe",
    title: "Web Developer",
    recommendations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: {
      asset: {
        url: "https://via.placeholder.com/50", // Replace with actual image URL
      },
    },
    name: "John Doe",
    title: "Web Developer",
    recommendations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: {
      asset: {
        url: "https://via.placeholder.com/50", // Replace with actual image URL
      },
    },
    name: "Jane Smith",
    title: "Graphic Designer",
    recommendations:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more data objects as needed
];

const CarouselPage = () => {
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] =
    useState<number | null>(null);

  const handleIndicatorClick = (index: number) => {
    setSelectedRecommendationIndex(index);
  };

  return (
    <Carousel
      centerSlidePercentage={100} // Center the slide completely
      centerMode
      showThumbs={false}
    >
      {recommendationsData.map((recommendation, index) => (
        <div key={index} className="slide-container">
          <div className="content bg-white p-4">
            <div>
              <p className="text-[#151E2C80] dark:text-[#BEC1D5] text-xs md:text-sm font-medium text-center max-h-[200px] overflow-auto">
                {recommendation.recommendations}
              </p>
              <div className="flex flex-col gap-1 items-center mt-4">
                <h3 className="text-[#151E2C] dark:text-[#BEC1D5] md:text-base text-sm font-bold">
                  {recommendation.name}
                </h3>
                <h4 className="text-[#B9B9B9] dark:text-[#BEC1D5] text-[10px] md:text-xs font-medium">
                  {recommendation.title}
                </h4>
              </div>
            </div>
          </div>
          <div className="indicator bg-gray-200 p-2">
            <div
              className="inline-flex justify-between items-center transition-all ease-in-out duration-200"
              onClick={() => handleIndicatorClick(index)}
              onKeyDown={() => handleIndicatorClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`${recommendation.name} ${index + 1}`}
            >
              <Image
                src={recommendation.img.asset.url}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full object-cover md:w-8 md:h-8 w-5 h-5"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
