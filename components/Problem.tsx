import React from "react";
import Wrapper from "./Wrapper";
import Card from "./Card";

const Problem = () => {
  return (
    <div className="my-5 h-[80vh] mb-10">
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl  text-[#48bb78] mt-5 md:mt-9">
          Steps Towards Conversation
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 ">
          How does it work?
        </h1>
        <div className="flex gap-3 w-[75%] mx-auto my-16 justify-stretch">
          <Wrapper className="font-proxima z-10 flex flex-col justify-center items-start px-8 py-4 rounded-2xl shadow-lg hover:scale-95 transition duration-300 bg-[#d9e8e5]">
            <h2 className="text-3xl font-proxima_bold font-extrabold my-2">
              The Problem
            </h2>
            <h2>
              The current Voluntary carbon market (VCM) is hard to access both
              for individuals and businesses. It lacks transparency,
              traceability and contains many low-quality carbon compensation
              projects.
            </h2>
          </Wrapper>

          <Wrapper className="font-proxima z-10 flex flex-col justify-center self-start items-start px-8 py-4 rounded-2xl shadow-lg hover:scale-95 transition duration-300 bg-[#d9e8e5]">
            <h2 className="text-3xl font-proxima_bold font-extrabold my-2">
              The Solution
            </h2>
            <h2>
              Carbon compensation with Coorest is easy, fast and transparent
              because we utilise blockchain technology. Everyone can compensate
              for their CO2 footprint instantly, from anywhere in the world,
              leaving a immutable and ​​traceable record.
            </h2>
          </Wrapper>
        </div>
      </Wrapper>
    </div>
  );
};

export default Problem;
