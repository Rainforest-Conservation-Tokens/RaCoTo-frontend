import React from "react";
import Wrapper from "./Wrapper";

const Projects = () => {
  return (
    <div className="my-5 w-full ">
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl text-[#48bb78] mt-5 md:mt-9">
          JOIN THE NET ZERO MOVEMENT
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 ">
          {" "}
          Explore our tech-verified projects
        </h1>
        {/* <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto my-16">
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
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Projects;