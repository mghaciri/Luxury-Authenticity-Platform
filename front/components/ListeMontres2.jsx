"use client";
import { useEffect, useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractAddress, contractAbi, ownerAddress } from "@/constants";
import Montre from "./Montre";

function ListeMontres2() {

 
  const { data : tokenIds } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'tokenIds'
  });

  return (
    <div className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] ">    
      <div className='flex flex-col items-center'>
          <span className='text-2xl font-bold'>Nombre total : {tokenIds?.toString()} </span>
          <div className="text-white justify-center items-center w-full bg-blue-950">
             <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <Montre id="1"/>
                  <Montre id="2"/>
                  <Montre id="3"/>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
  
};

export default ListeMontres2;