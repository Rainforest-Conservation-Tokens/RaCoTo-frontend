// import UserNavbar from "@/components/Navbar/UserNavbar";
// import Footer from "@/components/Footer";
// import { useRouter } from "next/router";
// import Wrapper from "@/components/Wrapper";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   return (
//     <main className="realtive w-full">
//        <nav
//       className={`w-full h-[50px] md:h-[80px] z-20 sticky transition-transform duration-700 flex justify-between items-center  text-black top-0 bg-white shadow-md transalate-y-0`}
//     >
//       <Wrapper className="h-[60px] flex justify-between items-center text-xl py-3 ">
//         <Link href={`/user/${user}`}>
//           <Image
//             src="/assets/logo.png"
//             alt="logo"
//             width="200"
//             height={200}
//             className="w-14 h-14"
//           />
//         </Link>
//         <div className="flex justify-between basis-1/3">
//           <Link href={`/user/${user}/`}>Approve</Link>
//           <Link href={`/admin/earning`}>Reject</Link>
//           <h2>Support</h2>
//         </div>
//         <ConnectWallet />
//       </Wrapper>
//     </nav>
//       <Wrapper className="mt-12">
//         <h2 className="font-recoleta text-3xl my-2">Welcome {user},</h2>

//         <h3 className="text-xl mt-9 font-proxima_semibold">Your Project</h3>
//         <div className="font-proxima rounded-lg shadow-lg w-[20%] h-[40vh] my-5 hover:scale-105 duration-300 transition cursor-pointer">
//           <Image
//             src={"/assets/waitlist-1.jpg"}
//             alt={"card-img"}
//             width={200}
//             height={200}
//             className="w-full h-[80%] rounded-t-lg object-cover"
//           />
//           <h2 className="font-proxima text-xl m-3">Brazil 101</h2>
//         </div>
//       </Wrapper>
//       {/* {open && ()} */}
//       <Footer />
//     </main>
//   );
// }
