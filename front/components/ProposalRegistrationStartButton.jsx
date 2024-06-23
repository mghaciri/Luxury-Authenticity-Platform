"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";
import { useStatus } from "@/context/StatusContext";

const ProposalRegistrationStartButton = () => {
  const [voterAddress, setVoterAddress] = useState("");
  const [registeredAddresses, setRegisteredAddresses] = useState([]);
  const { setRefetch } = useStatus();

  const { writeContract } = useWriteContract();

  const handleStartSession = () => {
    console.log("ProposalRegistrationStartButton");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "startProposalsRegistering",
    });
     // After the write operation, set a new refetch function to trigger a refetch in GetStatus
     setRefetch((prevRefetch) => {
      return () => {
        console.log("Refetching status...");
        prevRefetch();
      };
    });

  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-green-600 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        2. Start Proposal Registration
      </h2>
      <Button gradientMonochrome="purple" onClick={handleStartSession}>
      Start Proposal Registration
      </Button>
    </section>
  );
};

export default ProposalRegistrationStartButton;
