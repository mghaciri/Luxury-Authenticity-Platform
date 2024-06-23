"use client";
import { useReadContract } from 'wagmi';
import { contractAbi, contractAddress } from "@/constants";

function Log() {
  const { data, isError, isLoading } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getVoter',
    args: ['0x429933BeFD6d4B467F714290dC312c1D71eEd3B4'],
  });

  // Handling loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  return (
    <div>
      <h1 className='text-black'>Log</h1>
      <p className='text-black'>{data ? JSON.stringify(data) : 'No data found'}</p>
    </div>
  );
}

export default Log;