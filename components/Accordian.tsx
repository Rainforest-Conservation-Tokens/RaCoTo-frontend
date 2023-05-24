import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdExpandMore } from "react-icons/md";
import Wrapper from "./Wrapper";

export default function SimpleAccordion({
  title,
  body,
  expanded,
  id,
  handleChange,
}: {
  title: string;
  body: string;
  id: string;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}) {
  return (
    <div className="my-2 duration-300 transition">
      {/* <Wrapper> */}
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<MdExpandMore size={"1.2rem"} />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <h1 className="font-recoleta_bold text-xl">{title}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="font-proxima">{body}</h2>
        </AccordionDetails>
      </Accordion>
      {/* </Wrapper> */}
    </div>
  );
}
