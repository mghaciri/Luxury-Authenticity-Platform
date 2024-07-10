"use client";
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

function OwnerContract() {

  const { data } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
      functionName: 'baseURI',
  });

  return (
    <div className="border rounded-xl p-6 mb-10 space-x-4">
          <span>Owner Contract: {data?.toString()}</span>
    </div>

    
  );
};

export default OwnerContract;