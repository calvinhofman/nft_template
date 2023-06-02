// Web3 stuff

// images
import mystery from "./images/mystery.png";
import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";



import abi from './ABI/nft-abi.json';
import { useEffect } from "react";


// styling
import "./styles/Home.css";
import { useState } from "react";
import { utils } from "ethers";

export default function Home() {
  const contractAddress = "0x6489265Bf18185cA693017E7448bD77E8F80A524";
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalConnect, setShowModalConnect] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);




  const [showModalonce, setShowModalonce] = useState(true);
  const [nftAmount, setNftAmount] = useState(0);
  let [price, setPrice] = useState(0);
  let [count, setCount] = useState(0);
  let [data, setData] = useState(0);




  // const contract = new web3.eth.Contract(abi, contractAddress);

  async function fetchData() {
    // let price = await contract.methods.mintPrice().call();
    // let count = await contract.methods.nftCount().call();
    // let data = await contract.methods.maxTokenID().call();

    setPrice(price);
    setCount(count);
    setData(data);
  }

  price = price * quantity;

  const call = async () => {




    try {
      // const data = await contract.methods.mintNFT(connectedAddress, quantity).send({ from: connectedAddress });
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

  const handleCloseModalconnect = () => {
    setShowModalConnect(false);
  };

  const handleOpenModalconnect = () => {
    setShowModalConnect(true);
  };


    // Function to handle wallet connect button click
    const handleWalletConnect = () => {
      // const provider = new WalletConnectProvider({
      //   rpc: {
      //     56: 'https://bsc-dataseed1.binance.org/',
      //   },
      // });
      // provider
      //   .enable()
      //   .then(() => {
      //     const web3 = new Web3(provider);
      //     setWeb3(web3);

      //     web3.eth.getAccounts().then((accounts) => {
      //       const address = accounts[0];
      //       setConnectedAddress(address);
      //       handleCloseModalconnect();
      //       // Additional logic after successful connection
      //     });
      //   })
      //   .catch((error) => {
      //     console.error('Error connecting with WalletConnect:', error);
      //   });
    };

    // Function to handle MetaMask button click
    const handleMetaMaskConnect  = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);

          const accounts = await web3.eth.getAccounts();
          const address = accounts[0];
          setConnectedAddress(address);
          handleCloseModalconnect()
          // Additional logic after successful connection
        } catch (error) {
          console.error("Error connecting to Metamask:", error);
        }
      } else {
        console.error("Metamask not found");
      }
    }

    const handleLogout = () => {
      setConnectedAddress(null);
      // Additional logic for logging out
    };


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
<div className="flex flex-col sm:flex-row justify-between text-black items-center w-8/12 mx-auto mt-12">
        <div className="mx-auto flex items-center">

          {connectedAddress ? (
            <div className="flex items-center bg-[#0ea5e9] rounded-lg px-4 py-2">
                          <img
              src="https://ipfs.thirdwebcdn.com/ipfs/QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png"
              alt="Binance Smart Chain"
              className="w-6 h-6 mr-2"
            />
              <p
                className="text-gray-600 cursor-pointer"
                onClick={handleLogout}
              >
                {connectedAddress.substring(0, 6)}...
                {connectedAddress.substring(connectedAddress.length - 4)}
              </p>
              {connectedAddress && (
                <img
                  src="https://ipfs.thirdwebcdn.com/ipfs/QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg"
                  alt="Metamask"
                  className="w-6 h-6 ml-2"
                />
              )}
            </div>
          ) : (
            <button
              onClick={handleOpenModalconnect}
              className="bg-[#0ea5e9] rounded-lg px-4 py-2 text-white font-semibold"
            >
              Connect wallet
            </button>
          )}
        </div>
      </div>

      <div className="flex  flex-col flex-wrap justify-between text-black w-8/12 mx-auto mt-12">
        <div className="flex flex-col justify-start font-bold text-2xl mx-auto">

          <div className="mt-12">
            Quantity{" "}
            <input
              className="w-12 text-center border-2 border-gray-400"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between font-bold text-xl lg:text-2xl mx-auto">
          <div>
            <div>
              <button onClick={handleClick} className="card">
                MINT NFT{" "}
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
    <div className="text-center text-2xl mt-8">INCREDIBULLS MINTED</div>
              <div className="text-center text-[#fd5a08]">
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
              : "0"}
          </div>
            </div>
          </div>
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

                    <h5 className="sm:text-7xl text-2xl text-center text-[#fd5a08] font-extrabold">
                      INCREDIBULLS
                    </h5>
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
            {showModalConnect && (
        <div>
          <div className="w-screen h-screen bg-black absolute top-0 opacity-60 "></div>
          <div className="absolute w-screen h-screen top-0">
            <div class="grid place-items-center h-screen mx-auto">
              <div className="p-4  bg-[#161618] opacity-100 rounded-xl w-6/12">
                <div className="text-white font-semibold text-2xl flex justify-between">
                  <p>choose your wallet</p>
                  <button onClick={handleCloseModalconnect}>X</button>
                </div>
                <div className="sm:px-4">
                  <div className="flex flex-col space-y-4 mt-4">
                    <button id="metamask" onClick={handleMetaMaskConnect} className="bg-[#232326] px-4 py-2 rounded-lg flex flex-row justify-start items-center space-x-4"><img src="https://ipfs.thirdwebcdn.com/ipfs/QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg" alt="" srcset="" /> <p>Metamask</p></button>
                    <button id="walletconnect"   onClick={handleWalletConnect} className="bg-[#232326] px-4 py-2 rounded-lg flex flex-row justify-start items-center space-x-4"><img src="https://ipfs.thirdwebcdn.com/ipfs/QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg" alt="" srcset="" /> <p>Metamask</p></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
