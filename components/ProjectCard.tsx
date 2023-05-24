import React from "react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="rounded-xl w-[300px] aspect-video mx-5">
      <Image
        src={"/assets/rf-slider-3.jpg"}
        width={500}
        height={500}
        alt=""
        className="rounded-xl"
      />
    </div>
  );
};

export default ProjectCard;
