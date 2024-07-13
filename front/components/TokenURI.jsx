"use client";
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

function TokenURI() {

  const { data } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'tokenURI',
    args: [2],
  });

  return (
    <div className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] ">    
      <div className='flex flex-col items-center'>
          <span className='text-2xl font-bold'>Token URI</span>
          <span className='text-2xl font-bold'>[ {data?.toString()} ]</span>
      </div>
    </div>

    
  );
};

export default TokenURI;






