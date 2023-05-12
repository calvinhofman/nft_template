// Web3 stuff

// images
import headerlogo from "./images/HeaderLogo.png";
import leftCow from "./images/cow1.png";
import rightCow from "./images/cow.png";
import { ConnectWallet, useAddress, useContractRead, useContract, Web3Button } from "@thirdweb-dev/react";

// styling
import "./styles/Home.css";
import { useState } from "react";


export default function Home() {
  const contractAddress= "0x6489265Bf18185cA693017E7448bD77E8F80A524";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: price, isLoading } = useContractRead(contract, "mintPrice")

  // const  { contract } = useContract(contractAddress);
  // const address = useAddress();
  // const { mutate: ClaimNFT, isLoading, error } = useClaimNFT(contract);
  return (
    <div className=" container px-64 mx-auto">
      <div className="connect top-10 flex justify-end  relative">
        <ConnectWallet />
      </div>
      <main className="">
        {/* <div className="absolute mt-40 left-0">
          <img className="w-[50rem] pr-0" src={rightCow} alt="" />
        </div>
        <div className="absolute mt-40 right-0">
          <img className="w-[50rem] " src={leftCow} alt="" />
        </div> */}
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
            <Web3Button
              contractAddress={contractAddress}
              action={(contract) => {
                contract.call("mintNFT", address, 1, {
                  value: price
                })
              }}
            ></Web3Button>
            {/* <Web3Button contractAddress={contractAddress} action={() => ClaimNFT({
              to: {address}, quantity: 1,
            })}>

            </Web3Button> */}
          </div>
          <div className="mt-20"></div>
        </div>
      </main>
    </div>
  );
}
