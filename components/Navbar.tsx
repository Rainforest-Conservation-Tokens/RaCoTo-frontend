import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [show, setScroll] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      // lastScrollY > window.scrollY
      //   ? setScroll("bg-white text-black shadow-md transalate-y-0 top-0")
      //   : setScroll(" -translate-y-10 duration-700");
      setScroll("top-0 bg-white text-black shadow-md transalate-y-0 ");
    } else {
      setScroll("bg-transparent transalate-y-0 text-white");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav
      className={`w-full h-[50px] md:h-[80px] z-20 sticky transition-transform duration-700 flex justify-between items-center ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center text-xl py-3 ">
        <Link href={"/"}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width="200"
            height={200}
            className="w-14 h-14"
          />
        </Link>
        <section>list list list list list list list</section>
        <Link
          href="/register"
          className="bg-gradient-to-r from-[#4dbc5d] to-[#00a694] px-3 py-2 rounded-lg text-white"
        >
          Register
        </Link>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
