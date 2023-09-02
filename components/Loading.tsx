"use client";
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Dna
          visible={true}
          height={100}
          width={100}
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper" // Use the correct prop "className" here
          wrapperStyle={{}} // Use the "style" prop instead of "wrapperStyle"
        />
      </div>
    </div>
  );
};

export default Loading;
