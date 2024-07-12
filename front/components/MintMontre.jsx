"use client";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Alert, Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";


import { contractAddress, contractAbi, ownerAddress } from "@/constants";

const MintMontre = () => {

    const [confirmation, setConfirmation] = useState(""); 
    const [registeredAddresses, setRegisteredAddresses] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [tokenURI, setTokenURI] = useState("");

    const { writeContract } = useWriteContract();
    const { address } = useAccount();

    const [tokenAddress, setTokenAddress] = useState(address);


    // MetaMask
    //const ownerAddress = "0xd038D8716C28A0598D14F74d14b15113Aa492adF";
    // Hardhat
    //const ownerAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

    const mintNFT = async () => {
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



  return (
    <section className="flex justify-center items-center w-full bg-blue-950 h-[20vh]">
      <div>
        <div className="flex">

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
