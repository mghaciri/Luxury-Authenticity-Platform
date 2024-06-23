"use client";
import { useState } from "react";

import { Button } from "flowbite-react";

import { useWriteContract, useReadContract } from "wagmi";

import { contractAddress, contractAbi } from "@/constants";

const ProposalSubmission = () => {
  const [description, setDescription] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { writeContract } = useWriteContract();

  const addProposal = async () => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "addProposal",
      args: [description],
    });
  };

  const getOneProposal = async (proposalId) => {
    const { data, refetch } = useReadContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "getOneProposal",
      args: [proposalId],
    });
    useEffect(() => {
      refetch();
    }, [refetch]);
  

    useEffect(() => {
      const fetchProposal = async () => {
        await refetch();
        if (data) {
          setProposal(data);
          setLoading(false);
        }
      };
  
      fetchProposal();
    }, [refetch, data]);

    return { proposal, loading };
  };

  const handleAddProposal = () => {
    console.log(description);
    addProposal();
    setConfirmation("Proposal successfully added");
  };
  

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-left items-start pb-20 w-full bg-green-700 h-[25vh]">
      <div className="xl:pl-60 lg:pl-32 px-8">
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          3. Proposals submission
        </h2>

        <div className="flex">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter your proposal"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleAddProposal}
            className="ml-4"
          >
            Add your proposal
          </Button>
        </div>
        <div className="mt-4 w-80">
          {confirmation && <div>{confirmation}</div>}
          {/* Display the proposal if not loading and proposal is not null */}
          {!loading && proposal && (
            <div>
              <h3>Proposal Details</h3>
              {/* Display proposal details here */}
              <p>{proposal}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProposalSubmission;
