import React from "react";
import Wrapper from "./Wrapper";
import Card from "./Cards/Card";
type ProcedureProps = {
  title: string;
  pre_title: string;
};
const Procedure = ({ title, pre_title }: ProcedureProps) => {
  return (
    <div className="relative my-5 bg-[url('/assets/bg-2.png')] object-contain w-[100vw] h-[85vh]">
      <div className="absolute top-0 w-[100vw] h-[85vh] bg-[#61ce701a]"></div>
      <Wrapper className="flex flex-col justify-center items-center h-full">
        <h2 className="font-proxima_bold text-xl text-[#48bb78] mt-5 md:mt-9">
          {title}
        </h2>
        <h1 className="font-recoleta_semibold text-5xl my-3 "> {pre_title}</h1>
        <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto my-16">
          <Card
            title="Register"
            num="01"
            link="/register"
            img="/assets/Certificate.jpg"
            desc={
              "Register an account on our Web3 Rainforest Conversation Carbon Offset website and become a part of the global movement dedicated to preserving our rainforests. "
            }
          />
          <Card
            title="Persist"
            num="02"
            link="/register"
            img="/assets/CO2.png"
            desc={
              "By persistently maintaining the integrity of rainforest boundaries, you play a crucial role in preserving these natural treasures."
            }
          />
          <Card
            num="03"
            title="Earn"
            link="/register"
            img="/assets/Certificate.jpg"
            desc={
              "As you actively contribute to the protection of rainforest areas, you not only combat climate change but also have the chance to Earn financial rewards as a token of appreciation for your valuable contributions"
            }
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Procedure;
