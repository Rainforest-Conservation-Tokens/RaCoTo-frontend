import UserNavbar from "@/components/Navbar/UserNavbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import EN from "@/constants/en";
import BR from "@/constants/br";

export default function Earnings() {
  const { locale } = useRouter();
  const getTranslation = (locale: string) => {
    switch (locale) {
      case "br":
        return BR;
      default:
        return EN;
    }
  };
  const t = getTranslation(locale as string);
  return (
    <main className="realtive w-full">
      <UserNavbar />
      <Wrapper className="mt-12 flex flex-col items-center justify-center w-full h-[60vh]">
        <div className="bg-[#61ce701a] w-[55%] text-center flex flex-col py-10 rounded-xl justify-center items-center">
          <h2 className="font-recoleta text-4xl my-2 lg:text-5xl ">
            {t.user_earnings}
          </h2>
          <h2 className="font-proxima text-xl my-4 lg:text-2xl"> 0.33 RCT</h2>
          <button className="bg-black text-white px-4 py-2 my-3 transition duration-300 hover:scale-95 rounded-md text-lg lg:text-xl">
            Withdraw
            {t.user_withdraw}
          </button>
        </div>
      </Wrapper>
      <Footer />
    </main>
  );
}
