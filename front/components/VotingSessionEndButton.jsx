"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";
import { useStatus } from "@/context/StatusContext";

const VotingSessionEndButton = () => {
  //  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract();
  const { setRefetch } = useStatus();

  const handleEndVoting = () => {
    console.log("endVotingSession");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "endVotingSession",
    });
    setRefetch((prevRefetch) => {
      return () => {
        console.log("Refetching status...");
        prevRefetch();
      };
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-green-700 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        7. Session Vote End
      </h2>

      <Button gradientMonochrome="purple" onClick={handleEndVoting}>
        End Voting Session
      </Button>
    </section>
  );
};

export default VotingSessionEndButton;
