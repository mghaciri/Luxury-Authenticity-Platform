"use client";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Alert, Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";


import { contractAddress, contractAbi } from "@/constants";

const WhiteListRegistration = () => {
  const [voterAddress, setVoterAddress] = useState("");
  const [confirmation, setConfirmation] = useState(""); 
  const [registeredAddresses, setRegisteredAddresses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const ownerAddress = "0xd038D8716C28A0598D14F74d14b15113Aa492adF";


  const addVoter = async () => {
    try {
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "addVoter",
        args: [voterAddress],
      });

   
      if (voterAddress) {
        // Transaction successful
        setShowAlert(false);
        setConfirmation("Address successfully added to whitelist");
      } else {
        // Transaction failed
        throw new Error("Address registration failed");
      }
    } catch (error) {
      console.error("Error adding Address:", error);
      setShowAlert(true);
      setConfirmation("Error adding Address to whitelist");
    }
  };
  

  
  const handleRegister = () => {
    console.log(voterAddress);
    addVoter();
  };

  // Check if the current user is the owner
  const isOwner = address === ownerAddress;

  if (!isOwner) {
    return (
      <>
        <div className="flex flex-col text-orange-700 h-80 text-center items-center bg-blue-950">
          <h2 className="text-orange-700 text-center text-4xl mt-10">

          </h2>
          <p className="text-orange-700 text-center text-2xl mt-4 mb-6">
          </p>
          <ConnectButton
            label="Admin"
            className="text-center mt-4"
          />
        </div>
      </>
    );
  }

  return (
    <section className="flex justify-center items-center w-full bg-blue-950 h-[20vh]">
      <div className="">
        <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold mb-6 leading-loose">
        (Only for Admin)
        </h2>

        <div className="flex">
          <input
            type="text"
            value={voterAddress}
            onChange={(e) => setVoterAddress(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter an Address"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleRegister}
            className="ml-4"
          >
            Add an address to whitelist
          </Button>
        </div>
        <div className="mt-4 w-80">
          {showAlert && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="text-sm">Invalid Eth address</span>
            </Alert>
          )}
          {confirmation && <div>{confirmation}</div>}
        </div>

       
      </div>
    </section>
  );
};

export default WhiteListRegistration;
