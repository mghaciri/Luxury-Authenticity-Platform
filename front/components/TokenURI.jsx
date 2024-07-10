"use client";
import { useEffect } from "react"; 
import { Button } from "flowbite-react"; 
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

function TokenURI() {

  const { data } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'baseURI',
//    args: [1],
  });

  return (
    <div className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">      
      <div className='flex flex-col items-center'>
          <span className='text-2xl font-bold'>Proposition gagnante</span>
          <span className='text-2xl font-bold'>ID: {data?.toString()}</span>
      </div>
    </div>

    
  );
};

export default TokenURI;






