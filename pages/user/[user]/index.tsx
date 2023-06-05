import UserNavbar from "@/components/Navbar/UserNavbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { useState } from "react";

export default function User() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { user } = router.query;
  console.log(user);

  return (
    <main className="realtive w-full">
      <UserNavbar />
      <Wrapper className="mt-12">
        <h2 className="font-recoleta text-3xl my-2">Welcome {user},</h2>

        <h3 className="text-xl mt-9 font-proxima_semibold">Your Project</h3>
        <div className="font-proxima rounded-lg shadow-lg w-[20%] h-[40vh] my-5 hover:scale-105 duration-300 transition cursor-pointer">
          <Image
            src={"/assets/waitlist-1.jpg"}
            alt={"card-img"}
            width={200}
            height={200}
            className="w-full h-[80%] rounded-t-lg object-cover"
          />
          <h2 className="font-proxima text-xl m-3">Brazil 101</h2>
        </div>
      </Wrapper>
      {/* {open && ()} */}
      <Footer />
    </main>
  );
}
