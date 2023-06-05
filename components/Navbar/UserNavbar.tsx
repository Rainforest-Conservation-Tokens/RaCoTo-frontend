import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { ConnectWallet } from "../Button/ConnectWallet";
import { useRouter } from "next/router";

const UserNavbar = () => {
  const router = useRouter();
  const { user } = router.query;
  console.log(user);
  return (
    <nav
      className={`w-full h-[50px] md:h-[80px] z-20 sticky transition-transform duration-700 flex justify-between items-center  text-black top-0 bg-white shadow-md transalate-y-0`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center text-xl py-3 ">
        <Link href={`/user/${user}`}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width="200"
            height={200}
            className="w-14 h-14"
          />
        </Link>
        <div className="flex justify-between basis-1/3">
          <Link href={`/user/${user}/`}>My Project</Link>
          <Link href={`/user/${user}/earning`}>Earnings</Link>
          <h2>Support</h2>
        </div>
        <ConnectWallet />
      </Wrapper>
    </nav>
  );
};

export default UserNavbar;
