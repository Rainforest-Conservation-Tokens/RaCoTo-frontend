import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [show, setScroll] = useState("");
  const [link, setLink] = useState("text-white");
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      // lastScrollY > window.scrollY
      //   ? setScroll("bg-white text-black shadow-md transalate-y-0 top-0")
      //   : setScroll(" -translate-y-10 duration-700");
      setScroll("top-0 bg-white text-black shadow-md transalate-y-0 ");
      setLink("text-black");
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
      className={`w-full h-[50px] md:h-[80px] z-20 sticky transition-transform duration-700 flex justify-between items-center ${link}  ${show}`}
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
        <div className="flex justify-between basis-1/2">
          <h2>Whitepaper</h2>
          <h2>Explore</h2>
          <h2>Market</h2>
          <h2>FaQ</h2>
          <div>
            <select className="bg-transparent outline-none">
              <option className="text-black px-2">Documents</option>
              <option className="text-black p-2">WhitePaper</option>
            </select>
          </div>
        </div>
        <section>
          <Link
            href="/register"
            className="border-[#00a694] hover:scale-95 mr-2 transition duration-300 border-2 px-3 py-2 rounded-lg "
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-[#4dbc5d] to-[#00a694] hover:scale-95 transition duration-300 px-3 py-2 rounded-lg text-white"
          >
            Register
          </Link>
        </section>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
