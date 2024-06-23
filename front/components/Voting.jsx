"use client";
import { useState } from "react";

import { Button } from "flowbite-react";

import { useWriteContract } from "wagmi";

import { contractAddress, contractAbi } from "@/constants";



const Voting = () => {
  const [proposalId, setProposalId] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const { writeContract } = useWriteContract();


  const setVote = async (proposalId) => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "setVote",
      args: [proposalId],
    });
  };

  const handleSetVote = () => {
    console.log(proposalId);
    setVote();
    setConfirmation("You've successfully voted for proposalId");
    
  };

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-left items-start pb-20 w-full bg-green-600 h-[25vh]">
      <div className="xl:pl-60 lg:pl-32 px-8">
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          6. Voting - Select a proposalId
        </h2>

        <div className="flex">
          <input
            type="text"
            value={proposalId}
            onChange={(e) => setProposalId(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter your proposalID choice"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleSetVote}
            className="ml-4"
          >
            Vote
          </Button>
        </div>
        <div className="mt-4 w-80">
          {confirmation && <div>{confirmation}</div>}
        </div>
      </div>
    </section>
  );
};

export default Voting;
