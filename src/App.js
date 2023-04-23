// Web3 stuff
import { ConnectWallet } from "@thirdweb-dev/react";

// images
import headerlogo from "./images/HeaderLogo.png";
import leftCow from "./images/cow1.png";
import rightCow from "./images/cow.png";

// styling
import "./styles/Home.css";

export default function Home() {
  return (
    <div className=" container px-64 mx-auto">
      <div className="connect top-10 flex justify-end  relative">
        <ConnectWallet />
      </div>
      <main className="">
        <div className="absolute mt-40 left-0">
          <img className="w-[50rem] pr-0" src={rightCow} alt="" />
        </div>
        <div className="absolute mt-40 right-0">
          <img className="w-[50rem] " src={leftCow} alt="" />
        </div>
        <div className="w-3/12 mx-auto">
          <img src={headerlogo} alt="header image" />
        </div>
        <div className="mt-56">
          <h1 className="text-3xl font-extrabold">
            New NFT collection <br /> coming soon!
          </h1>

          <p className="text-xl font-bold mt-20">
            <span>0 / 500 MINTED</span>
          </p>

          <div className="mt-20">
            <button className=" border-black-100 border-2 p-4">
              Mint now!
            </button>
          </div>
          <div className="mt-20"></div>
        </div>
      </main>
    </div>
  );
}
