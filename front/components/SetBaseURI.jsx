"use client";
import { useState } from "react";

import { Button } from "flowbite-react";

import { useWriteContract, useReadContract } from "wagmi";

import { contractAddress, contractAbi } from "@/constants";

const SetBaseURI = () => {
  const [description, setDescription] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { writeContract } = useWriteContract();

  const setBaseURI = async () => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "setBaseURI",
      args: [description],
    });
  };

  

  const handleSetBaseURI = () => {
    console.log(description);
    setBaseURI();
    setConfirmation("BaseURI successfully updated");
  };
  

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-center items-start pb-12 w-full bg-blue-950 md:h-[20vh] h-[24vh]">
      <div className="px-8">
        <h2 className="text-white md:mt-6 mt-12 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          Update Base URI
        </h2>

        <div className="flex">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter your BaseURI"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleSetBaseURI}
            className="ml-4"
          >
            Update
          </Button>
        </div>
        <div className="mt-4 w-80">
          {confirmation && <div>{confirmation}</div>}
          {/* Display the proposal if not loading and proposal is not null */}
          {!loading && proposal && (
            <div>
              <h3>Update Details</h3>
              {/* Display proposal details here */}
              <p>{proposal}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SetBaseURI;
