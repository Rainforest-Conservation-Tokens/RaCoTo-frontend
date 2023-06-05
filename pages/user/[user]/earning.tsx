import UserNavbar from "@/components/Navbar/UserNavbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

export default function Earnings() {
  return (
    <main className="realtive w-full">
      <UserNavbar />
      <Wrapper className="mt-12 flex flex-col items-center justify-center w-full h-[30vh]">
        <h2 className="font-recoleta text-4xl my-2">Your Earnings</h2>
        <h2 className="font-proxima text-xl my-4"> 0.33 RCT</h2>
        <button className="bg-black text-white px-4 py-2 my-3 rounded-md">
          Withdraw
        </button>
      </Wrapper>
      <Footer />
    </main>
  );
}
