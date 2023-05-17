// Web3 stuff

// images
import headerlogo from "./images/HeaderLogo.png";
import steakdm from "./images/steakd.png";
import incredibulls from "./images/INCREDIBULLS.png";
import mystery from "./images/mystery.png";
import tempimage from "./images/Home_3.png";
import {
  ConnectWallet,
  useAddress,
  useContractRead,
  useContract,
  useContractWrite,
  Web3Button,
} from "@thirdweb-dev/react";

// styling
import "./styles/Home.css";
import { useState } from "react";
import { utils } from "ethers";

export default function Home() {
  let nftCount;
  const contractAddress = "0x6489265Bf18185cA693017E7448bD77E8F80A524";
  const address = useAddress();
  const [quantity, setQuantity] = useState(0);
  const { contract } = useContract(contractAddress);
  const [showModal, setShowModal] = useState(false);
  const [showModalonce, setShowModalonce] = useState(true);
  const [nftAmount, setNftAmount] = useState(0);

  const { data: data, isLoading } = useContractRead(contract, "maxTokenID");
  let { data: price, isLoading1 } = useContractRead(contract, "mintPrice");
  const { data: count, isLoading4 } = useContractRead(contract, "nftCount");
  console.log(count?.toString());

  price = price * quantity;

  const { mutateAsync: mintNFT, isLoading2 } = useContractWrite(
    contract,
    "mintNFT"
  );

  const call = async () => {
    try {
      // const data = await mintNFT({ args: [ address, quantity] }, {value: ( price?.toString() )});
      const data = await contract.call("mintNFT", [address, quantity], {
        value: price?.toString(),
      });

      let nftCount = +count?.toString() + +quantity - 1;
      setNftAmount(nftCount);
      setShowModal(true);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const handleClick = async () => {
    await call();
  };

  const handleCloseModalonce = () => {
    setShowModalonce(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between text-black items-center w-8/12 mx-auto mt-12">
        <div>
          <p className="font-bold sm:text-3xl text-xl ">New NFT collection</p>
        </div>
        <div>
          <img className="invisible md:visible" src={headerlogo} alt="" />
        </div>
        <div>
          <ConnectWallet theme="white" />
        </div>
      </div>
      <div className="flex flex-col px-12">
        <img className="mx-auto w-8/12" src={steakdm} alt="" />
        <img className="mx-auto mt-12  w-7/12 " src={incredibulls} alt="" />
      </div>
      <div className="flex flex-row flex-wrap justify-between text-black w-8/12 mx-auto h-40 mt-12">
        <div className="flex flex-col justify-between font-bold text-2xl">
          <div>
            {" "}
            {count?.toString()
              ? `${
                count?.toString() === "0"
                    ? "0"
                    : count?.toString() - 1
                }`
              : "0 "}
             / {data?.toString()
              ? `${
                data?.toString() === "0"
                    ? "0"
                    : data?.toString()
                }`
              : "0"}  Minted
          </div>
          <div>
            Quantity{" "}
            <input
              className="w-12 ml-8"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between font-bold text-xl lg:text-2xl">
          <div>Steakd presents the Incredibulls!</div>
          <div>
            <div>
              <button onClick={handleClick} className="card">
                MINT{" "}
                {price
                  ? `(${
                      price?.toString() === "0"
                        ? "0.00 BNB"
                        : `${price?.toString() / Math.pow(10, 18)} BNB`
                    })`
                  : ""}
              </button>
              {/* <Web3Button className="card"
      contractAddress={contractAddress}
      action={(contract) => {
        contract.call("mintNFT", [address, quantity], {
          value: ( price?.toString() )
        })
      }}
    >
      mintNFT
    </Web3Button> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-bold text-2xl xl:w-3/12 w-10/12 lg:w-6/12 sm:w-10/12 md:mt-12 lg:text-xl lg:mt-12">
          <p>
            A zany and fun herd of cute and utility packed bulls ready to tear
            up the Binance Smart Chain. Steakd Community Fam, SDX Staking Bonus,
            liquidity protocols, and passive income!. Time to{" "}
            <span className="text-[#FF742E]">#getSteakd</span>
          </p>
        </div>
      </div>
      {showModal && (
        <div>
          <div className="w-screen h-screen bg-black absolute top-0 opacity-60 "></div>
          <div className="absolute w-screen h-screen top-0">
            <div class="grid place-items-center h-screen mx-auto">
              <div className="p-4  bg-white opacity-100 rounded-xl">
                <div className="text-black font-bold text-2xl flex justify-end">
                  <button onClick={handleCloseModal}>X</button>
                </div>
                <div className="sm:px-20">
                  <div className="">
                    {" "}
                    <h5 className="sm:text-7xl text-2xl text-center text-[#FF742E] font-extrabold">
                      INCREDIBULLS
                    </h5>{" "}
                  </div>
                  <div className="flex flex-col justify-between mx-6 mt-6">
                    <div className="flex flex-row justify-between text-black font-bold sm:text-2xl">
                      <p>Name</p> <p>The incredibulls</p>
                    </div>
                    <div className="flex flex-row justify-between text-black font-bold sm:text-2xl">
                      <p>TokenID</p> <p>{nftAmount}</p>
                    </div>
                    {/* <div className="flex flex-row justify-between text-black font-bold text-2xl"><p>Attributes</p> </div>
                <div className="flex flex-row justify-between text-black  text-xl"><p>Background</p> <p>Bullseye1</p></div>
                <div className="flex flex-row justify-between text-black  text-xl"><p>Eastereggs1</p> <p>Beammeupscotty</p></div>
                <div className="flex flex-row justify-between text-black  text-xl"><p>Eastereggs2</p> <p>Sdx Logo2</p></div>
                <div className="flex flex-row justify-between text-black  text-xl"><p>Bulls</p> <p>Dragonbull</p></div> */}
                  </div>
                  <div>
                    <img className="mx-auto" src={mystery} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModalonce && (
        <div>
          <div className="w-screen h-screen bg-black absolute top-0 opacity-60 "></div>
          <div className="absolute w-screen h-screen top-0">
            <div class="grid place-items-center h-screen mx-auto">
              <div className="p-4  bg-white opacity-100 rounded-xl">
                <div className="text-black font-bold text-2xl flex justify-end">
                  <button onClick={handleCloseModalonce}>X</button>
                </div>

                <img src={tempimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
