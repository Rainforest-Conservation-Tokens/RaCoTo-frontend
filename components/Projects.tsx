import React from "react";
import Wrapper from "./Wrapper";
import ProjectCard from "@/components/ProjectCard";
import Slider from "@/components/Slider";

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
      </Wrapper>
      <Slider title={""} isProject={true}>
        <ProjectCard img="/assets/rf-slider-1.jpg" title="Project 1" />
        <ProjectCard img="/assets/rf-slider-2.jpg" title="Project 1" />
        <ProjectCard img="/assets/rf-slider-3.jpg" title="Project 1" />
        <ProjectCard img="/assets/rf-slider-4.jpg" title="Project 1" />
        <ProjectCard img="/assets/rf-slider-5.jpg" title="Project 1" />
        <ProjectCard img="/assets/rf-slider-3.jpg" title="Project 1" />
      </Slider>
    </div>
  );
};

export default Projects;
