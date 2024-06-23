"use client";
import { useState } from "react";
import { Button } from "flowbite-react";
import { useContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const RegisteringVoterStart = () => {
  // State to store event data (optional)
  const [workflowStatus, setWorkflowStatus] = useState({ previousStatus: null, newStatus: null });


  // Listen for the WorkflowStatusChange event
  useContractEvent({
    address: contractAddress,
    abi: contractAbi,
    eventName: "WorkflowStatusChange",
    listener: (event) => {
      console.log("WorkflowStatusChange event:", event);
      setWorkflowStatus({ previousStatus: event[0], newStatus: event[1] });
    },
  });

  const handleStartSession = () => {
    console.log("RegisteringVoterStart");
    write();
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-blue-950 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        0. RegisteringVoters
      </h2>
      <Button gradientMonochrome="purple" onClick={handleStartSession}>
        Start Voter Registration
      </Button>
      {/* Optionally display the workflow status */}
      {workflowStatus.newStatus !== null && (
        <p className="text-white">New Workflow Status: {workflowStatus.newStatus}</p>
      )}
    </section>
  );
};

export default RegisteringVoterStart;