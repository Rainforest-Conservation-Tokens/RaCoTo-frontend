import { ConnectWallet } from "../Button/ConnectWallet";
import { RxCross2 } from "react-icons/rx";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { readContract } from "wagmi/actions";
import RacotoContract from "@/constants/abi.json";
import { useRouter } from "next/router";

type LoginModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  login_modal_desc: string;
  login_modal_title: string;
  wrong_network_btn: string;
  connect_wallet_btn: string;
};

const LoginModal = ({
  setOpen,
  login_modal_desc,
  login_modal_title,
  wrong_network_btn,
  connect_wallet_btn,
}: LoginModalProps) => {
  const { address } = useAccount();
  const router = useRouter();

  const checkWhitlisted = async (address: `0x${string}`) => {
    const data = await readContract({
      address: RacotoContract.address as `0x${string}`,
      abi: RacotoContract.abi,
      functionName: "isUserWhitelisted",
      args: [address],
    });
    if (data) {
      toast("Redirecting to dashboard", {
        icon: "ℹ️",
      });
      router.push(`/user/${address}`);
    } else {
      toast("You are not whitelisted", {
        icon: "❌",
      });
      router.push("/register");
    }
  };
  if (address) {
    checkWhitlisted(address);
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/[.3] flex justify-center items-center">
      <section className="bg-white relative w-[25%] h-[30%] rounded-lg text-black flex flex-col justify-around p-3 items-center">
        <span className="text-center mt-3">
          <h2 className="font-recoleta_bold text-3xl">{login_modal_title}</h2>
          <h3 className="font-proxima text-lg">{login_modal_desc}</h3>
        </span>
        <ConnectWallet
          connect_wallet_btn={connect_wallet_btn}
          wrong_network_btn={wrong_network_btn}
        />
        <RxCross2
          className="absolute top-3 right-3 text-xl cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </section>
    </div>
  );
};
export default LoginModal;
