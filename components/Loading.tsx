"use client";
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="pt-[100px] grow w-full h-full flex items-center justify-center min-h-100vh">
      <Dna
        visible={true}
        height={100}
        width={100}
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper" // Use the correct prop "className" here
        wrapperStyle={{}} // Use the "style" prop instead of "wrapperStyle"
      />
    </div>
  );
};

export default Loading;
