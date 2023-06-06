import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ConnectWallet } from "@/components/Button/ConnectWallet";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const AdminIndex = () => {
  const router = useRouter();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showAccept, setShowAccept] = useState<boolean>(true);
  const [data, setData] = useState<{
    walletAddress: string;
    password: string;
  }>({
    walletAddress: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.walletAddress === "" || data.password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    axios
      .post("/api/admin", {
        address: data.walletAddress,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "SUCCESS" && res.data.isValid) {
          toast.success("Welcome Admin!");
          setIsValid(true);
        } else if (res.data.status === "SUCCESS" && !res.data.isValid) {
          toast("Incorrect credentials", {
            icon: "⚠️",
          });
          setIsValid(false);
        } else {
          toast.error("Admin only");
          setIsValid(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {isValid ? (
        <main className="realtive w-full h-screen text-white bg-[#0c0f1a] font-proxima">
          <nav
            className={`w-full h-[50px] md:h-[80px] z-20 sticky transition-transform duration-700 flex justify-between items-center  text-white border-b-[1px] border-white/[0.3] top-0 bg-[#0c0f1a] shadow-md transalate-y-0`}
          >
            <Wrapper className="h-[60px] flex justify-between items-center text-xl py-3 ">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width="200"
                height={200}
                className="w-14 h-14"
              />

              <div className="flex justify-between basis-1/5">
                <button
                  className="hover:text-[#18c99d]"
                  onClick={() => {
                    setShowAccept(true);
                  }}
                >
                  Accept
                </button>
                <button
                  className="hover:text-[#18c99d]"
                  onClick={() => {
                    setShowAccept(false);
                  }}
                >
                  Reject
                </button>
              </div>
              <ConnectWallet />
            </Wrapper>
          </nav>
          <Wrapper className="mt-12 w-full flex flex-col items-center justify-center h-[70vh]">
            {showAccept ? (
              <section className="font-proxima w-[50%] text-center text-white flex flex-col">
                <h2 className="font-recoleta text-3xl mb-5">
                  Accept Application
                </h2>
                <input
                  placeholder="Enter wallet address"
                  className="border-b-2 border-white/[0.3] p-1 w-1/2 my-5 outline-none bg-transparent mx-auto "
                  id="walletAddress"
                  type="text"
                  onChange={handleChange}
                />
                <input
                  placeholder="Enter GeoJson Data"
                  className="border-b-2 border-white/[0.3] p-1 w-1/2 my-5 outline-none bg-transparent mx-auto "
                  id="walletAddress"
                  type="text"
                  onChange={handleChange}
                />
                <button
                  className=" outline-none bg-[#18c99d] p-2 rounded-lg w-1/2 my-7 mx-auto hover:scale-95 cursor-pointer duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </section>
            ) : (
              <section className="font-proxima w-[50%] text-center text-white flex flex-col">
                <h2 className="font-recoleta text-3xl mb-5">
                  Reject Application
                </h2>
                <input
                  placeholder="Enter wallet address"
                  className="border-b-2 border-white/[0.3] p-1 w-1/2 my-5 outline-none bg-transparent mx-auto "
                  id="walletAddress"
                  type="text"
                  onChange={handleChange}
                />

                <button
                  className=" outline-none bg-[#18c99d] p-2 rounded-lg w-1/2 my-7 mx-auto hover:scale-95 cursor-pointer duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </section>
            )}
          </Wrapper>
          {/* {open && ()} */}
        </main>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen bg-[#0c0f1a]">
          <section className="font-proxima w-[50%] text-center text-white flex flex-col">
            <h2 className="font-proxima_semibold text-3xl mb-5">
              Admin Console
            </h2>
            <input
              placeholder="Enter wallet address"
              className="border-b-2 border-white/[0.3] p-1 w-1/2 my-5 outline-none bg-transparent mx-auto "
              id="walletAddress"
              type="text"
              onChange={handleChange}
            />
            <input
              placeholder="Enter password"
              className="outline-none border-b-2 p-1 border-white/[0.3] mx-auto bg-transparent w-1/2"
              id="password"
              type="password"
              onChange={handleChange}
            />
            <button
              className=" outline-none bg-[#18c99d] p-2 rounded-lg w-1/2 my-7 mx-auto hover:scale-95 cursor-pointer duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default AdminIndex;
