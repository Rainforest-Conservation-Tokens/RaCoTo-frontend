import React from "react";
import Wrapper from "./Wrapper";
import Card from "./Cards/Card";
type ProcedureProps = {
  title: string;
  pre_title: string;
  procedure_title_1: string;
  procedure_desc_1: string;
  procedure_title_2: string;
  procedure_desc_2: string;
  procedure_title_3: string;
  procedure_desc_3: string;
};
const Procedure = ({
  title,
  pre_title,
  procedure_title_1,
  procedure_desc_1,
  procedure_title_2,
  procedure_desc_2,
  procedure_title_3,
  procedure_desc_3,
}: ProcedureProps) => {
  return (
    <div className="relative my-5 bg-[url('/assets/bg-2.png')] object-contain w-[100vw] h-[90vh]">
      <div className="absolute top-0 w-[100vw] h-[90vh] bg-[#61ce701a]"></div>
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl text-[#48bb78] mt-5 md:mt-9">
          {title}
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 "> {pre_title}</h1>
        <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto my-16">
          <Card
            title={procedure_title_1}
            num="01"
            link="/register"
            img="/assets/Certificate.jpg"
            desc={procedure_desc_1}
          />
          <Card
            title={procedure_title_2}
            num="02"
            link="/register"
            img="/assets/CO2.png"
            desc={procedure_desc_2}
          />
          <Card
            num="03"
            title={procedure_title_3}
            link="/register"
            img="/assets/Certificate.jpg"
            desc={procedure_desc_3}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Procedure;
