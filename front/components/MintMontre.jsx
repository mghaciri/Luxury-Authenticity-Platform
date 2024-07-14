"use client";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Alert, Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";


import { contractAddress, contractAbi, ownerAddress } from "@/constants";

const MintMontre = () => {

    const [confirmation, setConfirmation] = useState(""); 
    const [showAlert, setShowAlert] = useState(false);
    const [tokenURI, setTokenURI] = useState("");

    const { writeContract } = useWriteContract();
    const { address } = useAccount();

    const [tokenAddress, setTokenAddress] = useState(address);
    

    const mintNFT = async () => {
      console.log(tokenAddress);
        try {
            writeContract({
                address: contractAddress,
                abi: contractAbi,
                functionName: "mintMontre",
                args: [ownerAddress, tokenURI, "Rolex", "Model1"],
            });

            console.log(tokenAddress);
            console.log(tokenURI);

            if (tokenURI) {
                // Transaction successful
                setShowAlert(false);
                setConfirmation("NFT successfully minted ");
            } else {
                // Transaction failed
                throw new Error("NFT mint failed");
            }
        } catch (error) {
            console.error("Error mint NFT:", error);
            setShowAlert(true);
            setConfirmation("Error mint NFT");
        }
    };
    
    
    const handleMint = () => {
        mintNFT();
    };

  // Check if the current user is the owner
  const isOwner = address === ownerAddress;

  if (!isOwner) {
    return (
      <>
        <div className="flex flex-col text-orange-700 h-80 text-center items-center bg-blue-950">
          <h2 className="text-orange-700 text-center text-4xl mt-10">

          </h2>
          <ConnectButton
            label="Admin"
            className="text-center mt-4"
          />
        </div>
      </>
    );
  }

  return (
    <section className="flex justify-center items-center w-full bg-blue-900 h-[20vh]">
      <div>
        <h3 className="text-white xl:text-3xl lg:text-3xl text-xl font-semibold mb-6 leading-loose">
          (Only for Admin)
        </h3>

        <div className="flex ">


          <input
            type="string"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter your Token URI"
          />

          <Button gradientMonochrome="purple"
                onClick={handleMint}
                className="ml-4">
            Mint NFT
          </Button>
        </div>
        <div className="mt-4 w-80">
          {showAlert && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="text-sm">Invalid Token URI</span>
            </Alert>
          )}
          {confirmation && <div>{confirmation}</div>}
        </div>
      </div>
    </section>
  );
};

export default MintMontre;
