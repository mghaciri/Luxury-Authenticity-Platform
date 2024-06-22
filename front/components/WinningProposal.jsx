"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const WinningProposal = () => {
  //  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract();

  const handleWinningProposal = () => {
    console.log("");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "",
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-green-700 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        3. Winning Proposal
      </h2>

      <Button gradientMonochrome="purple" onClick={handleEndVoting}>
        Show Winning Proposal
      </Button>
    </section>
  );
};

export default WinningProposal;
