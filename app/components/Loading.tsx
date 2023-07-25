"use client";
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="mt-[80px] grow w-full h-full flex items-center justify-center min-h-50vh">
      <Dna
        visible={true}
        height={80}
        width={80}
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper" // Use the correct prop "className" here
        wrapperStyle={{}} // Use the "style" prop instead of "wrapperStyle"
      />
    </div>
  );
};

export default Loading;
