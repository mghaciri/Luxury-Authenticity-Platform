"use client";
import React, { useState } from "react";
import { ethers } from "ethers"; // Import d'ethers

import { Button } from "flowbite-react";
import { useReadContract, useAccount } from "wagmi";

import { contractAddress, contractAbi } from "@/constants";

const OneProposal = () => {
  const [enterProposalId, setEnterProposalId] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const { address } = useAccount();

  const { data: proposalData, isError, isLoading } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getOneProposal",
    args: [enterProposalId],
  });

  const handleGetOneProposal = () => {
    setProposalDescription(""); // Clear previous description
    setEnterProposalId(""); // Clear input field after clicking

    // The useEffect hook from useReadContract will handle the data fetching
  };

  // useEffect to handle proposalData changes
  React.useEffect(() => {
    if (proposalData) {
      setProposalDescription(proposalData.description);
    }
  }, [proposalData]);

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-left items-start pb-20 w-full bg-green-700 h-[25vh]">
      <div className="xl:pl-60 lg:pl-32 px-8">
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          One Proposal Get
        </h2>

        <div className="flex">
          <input
            type="text"
            value={enterProposalId}
            onChange={(e) => setEnterProposalId(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter your proposal ID"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleGetOneProposal}
            className="ml-4"
          >
            Get One Proposal
          </Button>
        </div>

        {isLoading && <p className="text-white mt-4">Loading...</p>}
        {isError && <p className="text-white mt-4">Error loading proposal.</p>}
        {proposalDescription && (
          <div className="mt-4">
            <p className="text-white">Description: {proposalDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OneProposal;
