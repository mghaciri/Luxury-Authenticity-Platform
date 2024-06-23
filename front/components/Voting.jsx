"use client";
import { useState } from "react";

import { Button } from "flowbite-react";

import { useWriteContract } from "wagmi";

import { contractAddress, contractAbi } from "@/constants";



const Voting = () => {
  const [proposalId, setProposalId] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const { writeContract } = useWriteContract();


  const setVote = async () => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "setVote",
      args: [proposalId],
    });
  };

  const handleSetVote = () => {
    setVote();
    setConfirmation("You've successfully voted for proposalId");
    
  };

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-center items-start pb-10 w-full bg-blue-900 h-[20vh]">
      <div className="px-8">
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          6. Voting - Select a proposalId
        </h2>

        <div className="flex">
          <input
            type="number"
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
