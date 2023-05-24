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
          title="What is the RaCoTo project? "
          expanded={expanded}
          handleChange={handleChange}
          id="faq1"
          body="A project that rewards rainforest owners with tokens for preserving their land, helping fight climate change and protect biodiversity."
        />
        <Accordian
          title="What are RaCoTo tokens? "
          expanded={expanded}
          id="faq2"
          handleChange={handleChange}
          body="Tokens representing one ton of fixed carbon dioxide, given to registered rainforest owners for conservation efforts."
        />
        <Accordian
          title="
          How are RaCoTos earned? "
          expanded={expanded}
          id="faq3"
          handleChange={handleChange}
          body="By registering your rainforest with the project and preserving it, you'll receive RaCoTo tokens based on real-time satellite monitoring."
        />
        <Accordian
          title="Why are RaCoTos more transparent?"
          expanded={expanded}
          id="faq4"
          handleChange={handleChange}
          body="They rely on public, tamper-proof blockchain and independent satellite data, ensuring superior integrity and transparency compared to other offsets."
        />
        <Accordian
          title=" 
          How to sell RaCoTo tokens?"
          expanded={expanded}
          id="faq5"
          handleChange={handleChange}
          body="You can sell RaCoTo tokens to carbon dioxide emitters or hold onto them until they gain more value."
        />
        <Accordian
          title=" 
          What's the environmental impact? "
          expanded={expanded}
          id="faq6"
          handleChange={handleChange}
          body="The project promotes rainforest conservation, helping to mitigate climate change and protect biodiversity."
        />
        <Accordian
          title="
          Who can join the RaCoTo project?"
          expanded={expanded}
          id="faq7"
          handleChange={handleChange}
          body="Rainforest owners interested in preserving their land and contributing to environmental protection can join.
          "
        />
        <Accordian
          title="
          How to learn more about RaCoTo? 
        "
          expanded={expanded}
          id="faq8"
          handleChange={handleChange}
          body="Read the project's lite paper or white paper or get in touch with the team for more information."
        />
      </Wrapper>
    </div>
  );
};

export default Faq;
