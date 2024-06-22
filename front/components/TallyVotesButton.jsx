"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const tallyVotesButton = () => {
  //  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract();

  const handleTallyVotes = () => {
    console.log("tallyVotes");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "tallyVotes",
    });
  };

  return (
<section className="flex flex-col justify-center items-center w-full bg-green-600 pt-6 pb-6">
<h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        8. Tally Votes Start
      </h2>

      <Button gradientMonochrome="purple" onClick={handleTallyVotes}>
        Start Talling Votes
      </Button>
    </section>
  );
};

export default tallyVotesButton;
