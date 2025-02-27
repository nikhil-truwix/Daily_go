import React from "react";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <Marquee speed={50} gradient={true} gradientWidth={10}>
        <div className="flex gap-1">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center  gap-10 mx-4">
              <span className="text-sm md:text-base lg:text-[24px] font-semibold">Construction Work</span>
              <div className="w-6 h-6 bg-[#2c4b4b] rounded-full"></div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Section;