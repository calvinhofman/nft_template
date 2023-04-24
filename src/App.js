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
    <div className=" container  lg:px-64 mx-auto">
      <div className="connect top-10 flex justify-end  relative">
        <ConnectWallet  />
      </div>
      <main className="">
        <div className="absolute mt-40 lg:mt-64 left-0">
          <img className="w-[5rem] md:w-[10rem] lg:w-[15rem] xl:w-[20rem] pr-0" src={rightCow} alt="" />
        </div>
        <div className="absolute mt-40 lg:mt-64 right-0">
          <img className="w-[5rem] md:w-[10rem] lg:w-[15rem] xl:w-[20rem]" src={leftCow} alt="" />
        </div>
        <div className="lg:w-3/12 w-8/12  mx-auto mt-20 lg:mt-0">
          <img src={headerlogo} alt="header image" />
        </div>
        <div className="lg:mt-56 xl:mt-8 mt-12"> 
          {/* <h1 className="lg:text-3xl text-xl font-extrabold ">
            New NFT collection <br /> coming soon!
          </h1>

          <p className="text-lg font-bold mt-20">
            <span>0 / 500 MINTED</span>
          </p> */}

          <div className=" md:w-5/12 xl:w-4/12 h-[20rem] md:h-[25rem] xl:h-[35rem] rounded-2xl border-2 mx-auto">
            <img src={rightCow} alt="" />
          </div>

          <div className="text-center mt-4">
            <p>rarity: <span></span></p>
          </div>

          <div className="mt-20 text-center">
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
