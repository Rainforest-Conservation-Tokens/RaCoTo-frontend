import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import RECAPTCHA from "react-google-recaptcha";
import { useAccount } from "wagmi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { TbFileUpload } from "react-icons/tb";
import { toast } from "react-toastify";

const Register = () => {
  const { address } = useAccount();
  const captchaRef = useRef(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const certificateRef = useRef<HTMLInputElement>(null);
  const [landImage, setLandImage] = useState<string>();
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [content, setContent] = useState<{
    username: string;
    wallet_address: `0x${string}` | undefined;
    land_image: File | null;
    certificate: File | null;
  }>({
    username: "",
    wallet_address: address,
    land_image: null,
    certificate: null,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const handleAvatarChange = async () => {
    const file = avatarRef!.current!.files![0];
    if (!file) {
      setLandImage("");
      return;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = file;
    if (!fileTypes.includes(type)) {
      toast.error("File format must be either png or jpg");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      toast.error("File size exceeded the limit of 2MB");
      return false;
    }
    setContent({
      ...content,
      land_image: file,
    });
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = (readerEvent) => {
      setLandImage(readerEvent!.target!.result!.toString());
    };
  };
  const handleFileChange = async () => {
    const file = certificateRef!.current!.files![0];
    console.log(file);
    if (!file) {
      setCertificateFile(null);
      return;
    }
    const fileTypes = ["application/pdf"];
    const { size, type } = file;
    if (!fileTypes.includes(type)) {
      toast.error("File format must be pdf");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      toast.error("File size exceeded the limit of 2MB");
      return false;
    }
    setContent({
      ...content,
      certificate: file,
    });
    setCertificateFile(file);
  };

  //   const handleClick = (e: any) => {
  //     e.preventDefault();
  //     const token = captchaRef.current.getValue();
  //     captchaRef.current.reset();
  //     console.log(token);
  //   };
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#F5F5F5] font-recoleta">
      <nav className="w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center">
        <Wrapper className="h-[60px] bg-white flex justify-between items-center text-xl py-3 ">
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width="200"
              height={200}
              className="w-14 h-14"
            />
          </Link>

          <button className="bg-gradient-to-r from-[#4dbc5d] to-[#00a694] px-3 py-2 rounded-lg text-white">
            Connect Wallet
          </button>
          {/* <section className="font-proxima text-base">
            <ConnectButton
              chainStatus="icon"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </section> */}
        </Wrapper>
      </nav>
      <Wrapper className="">
        <div className="w-[75%]  mx-auto my-10">
          <Wrapper className="bg-white rounded-xl py-5">
            <h1 className="text-2xl font-bold my-5 mb-8 font-proxima">
              Register Land
            </h1>
            {/* Create Brand Form  */}
            <form className="w-[70%]">
              <label>
                <h3 className="text-base font-semibold my-1">Wallet Address</h3>
              </label>
              <input
                type="text"
                name="wallet_address"
                className="border border-[#CFCFCF] text-[#747373] my-2 mb-7 p-3 rounded-lg w-full outline-none text-lg"
                placeholder="Wallet Address"
                value={address}
                disabled
              />
              <label>
                <h3 className="text-base font-semibold my-1">UserName</h3>
              </label>
              <input
                type="text"
                className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-lg"
                name="username"
                onChange={handleOnChange}
                placeholder="Username"
              />
              <label>
                <h3 className="text-base font-semibold my-1">Land Image</h3>
              </label>

              <div className="relative my-4 flex aspect-video w-[45%] items-center justify-center rounded-xl border-2 border-dashed  border-[#CFCFCF] text-slate-400 ">
                <input
                  type="file"
                  ref={avatarRef}
                  onChange={handleAvatarChange}
                  hidden
                  name="land_image"
                  id="land_image"
                />
                {!landImage && (
                  <button
                    type="button"
                    onClick={() => avatarRef!.current!.click()}
                    className="flex justify-center rounded-full p-4 text-center text-base text-black/[0.7] font-semibold transition duration-300 "
                  >
                    <BsUpload className="h-4 w-4 my-auto mr-1" />
                    <h2>Upload Image</h2>
                  </button>
                )}
                {landImage && (
                  <>
                    <Image
                      src={landImage}
                      alt="profile-picture"
                      width={200}
                      height={200}
                      className="h-full w-full rounded-xl "
                    />
                    <button
                      type="submit"
                      onClick={() => setLandImage("")}
                      className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 text-xs text-white"
                    >
                      Reset
                    </button>
                  </>
                )}
              </div>
              <label>
                <h3 className="text-base font-semibold my-1">
                  Certificate of Ownership
                </h3>
              </label>

              <div className="relative my-4 flex aspect-video w-[45%] items-center justify-center rounded-xl border-2 border-dashed  border-[#CFCFCF] text-slate-400 ">
                <input
                  type="file"
                  ref={certificateRef}
                  onChange={handleFileChange}
                  hidden
                  name="certificate"
                  id="certificate"
                />
                {!certificateFile && (
                  <button
                    type="button"
                    onClick={() => certificateRef!.current!.click()}
                    className="flex justify-center rounded-full p-4 text-center text-base text-black/[0.7] font-semibold transition duration-300"
                  >
                    <TbFileUpload className="h-4 w-4 my-auto mr-1" />
                    <h2>Upload Certificate</h2>
                  </button>
                )}
                {certificateFile && (
                  <>
                    <div>
                      <BsFileEarmarkPdf className="h-10 w-10 my-auto mr-1" />
                      <h2>{certificateFile.name}</h2>
                      <button
                        type="submit"
                        onClick={() => setLandImage("")}
                        className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 text-xs text-white"
                      >
                        Reset
                      </button>
                    </div>
                  </>
                )}
              </div>

              <RECAPTCHA
                className="my-7"
                sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
                ref={captchaRef}
              />

              <div className="flex my-5">
                <input
                  type="checkbox"
                  name="terms"
                  className="rounded-lg  mr-2 outline-none text-lg"
                  onChange={handleOnChange}
                />
                <h2>I agree that this land is not under any other scheme</h2>
              </div>

              <button
                type="submit"
                className="bg-[#6ac61f] mb-5 rounded-xl text-white px-5 py-2 duration-300 hover:scale-95 min-w-fit w-[120px] font-normal"
                //   onClick={handleClick}
              >
                Register
              </button>
            </form>
            {/* Create Brand Form End */}
          </Wrapper>
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
