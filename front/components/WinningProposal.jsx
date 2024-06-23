"use client";
import { useEffect } from "react"; // Ensure useEffect is imported
import { Button } from "flowbite-react"; // Removed unused import 'Card'
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

function WinningProposal() {

  const { data: winningProposalID, refetch } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'winningProposalID',
  });

  useEffect(() => {
    console.log("Dans useEffect");
    refetch();
  }, [refetch]);


  // Function to handle button click for refetching the winning proposal ID
  const handleRefetch = () => {
    refetch();
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-green-700 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        3. Winning Proposal
      </h2>
      <p className='text-black'>Winning Proposal : {(winningProposalID ?? 'Loading...').toString()}</p>
      <Button gradientMonochrome="purple" onClick={handleRefetch}>
        Show Winning Proposal
      </Button>
    </section>
  );
};

export default WinningProposal;