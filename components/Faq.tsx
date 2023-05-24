import React from "react";
import Wrapper from "./Wrapper";
import Accordian from "./Accordian";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="my-5  mb-10 bg-[#d9e8e5] py-5 md:py-10 ">
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl  text-[#48bb78] mt-3 md:mt-6">
          LEARN MORE ABOUT RACOTO
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 mb-5 md:mb-10 ">
          Frequently Asked Questions
        </h1>
        <Accordian
          title="What does it means?"
          expanded={expanded}
          handleChange={handleChange}
          id="faq1"
          body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo sequi a corporis dolore sunt quidem deleniti iste natus voluptatibus!"
        />
        <Accordian
          title="What does it means?"
          expanded={expanded}
          id="faq2"
          handleChange={handleChange}
          body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo sequi a corporis dolore sunt quidem deleniti iste natus voluptatibus!"
        />
        <Accordian
          title="What does it means?"
          expanded={expanded}
          id="faq3"
          handleChange={handleChange}
          body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo sequi a corporis dolore sunt quidem deleniti iste natus voluptatibus!"
        />
        <Accordian
          title="What does it means?"
          expanded={expanded}
          id="faq4"
          handleChange={handleChange}
          body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo sequi a corporis dolore sunt quidem deleniti iste natus voluptatibus!"
        />
        <Accordian
          title="What does it means?"
          expanded={expanded}
          id="faq5"
          handleChange={handleChange}
          body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo sequi a corporis dolore sunt quidem deleniti iste natus voluptatibus!"
        />
      </Wrapper>
    </div>
  );
};

export default Faq;
