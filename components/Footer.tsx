import React from "react";
import Wrapper from "./Wrapper";
import { BsTwitter, BsLinkedin, BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full">
      <Wrapper className="">
        <span className="flex justify-between h-20 items-center text-black/[0.5]">
          Copyright © 2023 RaCoTo, Inc.
          <span className="flex basis-1/12 justify-around">
            <BsTwitter size={"1.2rem"} />
            <BsLinkedin size={"1.2rem"} />
            <BsMedium size={"1.2rem"} />
          </span>
        </span>
      </Wrapper>
    </footer>
  );
};

export default Footer;
