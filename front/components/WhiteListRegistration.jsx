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

  const ownerAddress = "0xfdb8D26D4faB21C3c506A3781583a46aEDc5833d";


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
        setConfirmation("Voter successfully added to whitelist");
      } else {
        // Transaction failed
        throw new Error("Voter registration failed");
      }
    } catch (error) {
      console.error("Error adding voter:", error);
      setShowAlert(true);
      setConfirmation("Error adding voter to whitelist");
    }
  };
  
/*
  const addVoter = async () => {
  
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "addVoter",
        args: [voterAddress],
      });
      
  };
  */
  
  const handleRegister = () => {
    console.log(voterAddress);
    addVoter();
  };

  // Check if the current user is the owner
  const isOwner = address === ownerAddress;

  if (!isOwner) {
    return (
      <>
        <div className="flex flex-col text-orange-700 h-80 text-center items-center">
          <h2 className="text-orange-700 text-center text-4xl mt-10">
            You do not have permission to access to White List Registration.
          </h2>
          <p className="text-orange-700 text-center text-2xl mt-4 mb-6">
            Please connect as Admin
          </p>
          <ConnectButton
            label="Connect as Admin"
            className="text-center mt-4"
          />
        </div>
      </>
    );
  }

  return (
    <section className="flex justify-left items-start w-full bg-green-700 pt-20 h-[30vh]">
      <div className="xl:pl-60 lg:pl-32">
        <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold mb-6 leading-loose">
          1. White List Registration (Only for Admin)
        </h2>

        <div className="flex">
          <input
            type="text"
            value={voterAddress}
            onChange={(e) => setVoterAddress(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter Voter Address"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleRegister}
            className="ml-4"
          >
            Add a voter to whitelist
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
