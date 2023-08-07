import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Recommendation } from "@/config/interfaces";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  recommendationsData: Recommendation[];
}

const CarouselPage = ({ recommendationsData }: Props) => {
  return (
    <Carousel
      autoPlay
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, opacity: 1, color: "black", transform: "scale(2)" }
          : {
              ...defStyle,
              opacity: 0.5,
              color: "black",
              transform: "scale(1)",
            };
        return (
          <div
            className="indicator w-50 h-50 inline-flex transition-all ease-in-out duration-200"
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            <Image
              className="indicatorImage"
              src={
                "https://api.dicebear.com/6.x/adventurer/svg?seed=Zoey" + index
              }
              alt="profile"
              width={50}
              height={50}
            />
          </div>
        );
      }}
    >
      {recommendationsData.map((recommendation, index) => (
        <div className="h-[500px] w-full" key={index}>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={urlForImage(recommendation.img.asset).url()}
              alt=""
              width={80}
              height={80}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[#151E2C] dark:text-[#BEC1D5] md:text-base text-sm font-bold">
                {recommendation.name}
              </h3>
              <h4 className="text-[#B9B9B9] dark:text-[#BEC1D5] text-[10px] md:text-xs font-medium">
                {recommendation.title}
              </h4>
            </div>
          </div>
          <p className="text-[#151E2C80] dark:text-[#BEC1D5] text-xs md:text-sm font-medium text-center px-2 max-h-[200px] overflow-auto">
            {recommendation.recommendations}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
