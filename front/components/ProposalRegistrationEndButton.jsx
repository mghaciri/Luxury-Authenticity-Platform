"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const ProposalRegistrationEndButton = () => {
  //  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract();

  const handleEndProposal = () => {
    console.log("ProposalRegistrationEndButton");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "endProposalsRegistering",
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-blue-900 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        4. Proposal Registration End
      </h2>

      <Button gradientMonochrome="purple" onClick={handleEndProposal}>
        End Proposal Registration
      </Button>
    </section>
  );
};

export default ProposalRegistrationEndButton;
