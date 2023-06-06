import React from "react";
import Wrapper from "./Wrapper";
import Card from "./Cards/Card";

const Procedure = () => {
  return (
    <div className="relative my-5 bg-[url('/assets/bg-2.png')] object-contain w-[100vw] h-[85vh]">
      <div className="absolute top-0 w-[100vw] h-[85vh] bg-[#61ce701a]"></div>
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl text-[#48bb78] mt-5 md:mt-9">
          HOW IT WORKS
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 ">
          {" "}
          Take action in 3 simple steps
        </h1>
        <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto my-16">
          <Card
            title="Login"
            num="01"
            link="/register"
            img="/assets/Certificate.jpg"
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.  Architecto, qui."
            }
          />
          <Card
            title="Login"
            num="02"
            link="/register"
            img="/assets/CO2.png"
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.  Architecto, qui."
            }
          />
          <Card
            title="Login"
            num="03"
            link="/register"
            img="/assets/Certificate.jpg"
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.  Architecto, qui."
            }
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Procedure;
