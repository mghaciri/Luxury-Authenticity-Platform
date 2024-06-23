'use client';

import React, { useEffect } from "react";
import { useReadContract } from "wagmi";
import { Progress, Button } from "flowbite-react";
import { contractAddress, contractAbi } from "../constants";

const statusDescriptions = {
  0: "RegisteringVoters",
  1: "ProposalsRegistrationStarted",
  2: "ProposalsRegistrationEnded",
  3: "VotingSessionStarted",
  4: "VotingSessionEnded",
  5: "VotesTallied",
};

function GetStatus() {
  const { data: status, refetch } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "workflowStatus",
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (status === undefined) {
    return <div className="text-black bg-[#0a1835]">Chargement du statut...</div>;
  }

  // Use the statusDescriptions object to get the status message
  const statusMessage = statusDescriptions[status] || "Unknown Status";

  return (
    <div className="flex flex-row justify-center items-center w-full bg-[#0a1835] h-[10vh]">
      <div className="text-white text-3xl text-center items-center mr-12">
        Statut actuel {status} : {statusMessage}
      </div>
      <Progress
        color="teal"
        progress={status * 20}
        progressLabelPosition="inside"
        textLabel="Workflow Progress"
        textLabelPosition="outside"
        size="lg"
        labelProgress
        labelText
        

      />
      <Button gradientMonochrome="teal" className='text-white ml-6' onClick={() => refetch()}>Refresh...</Button>
    </div>
  );
}

export default GetStatus;
