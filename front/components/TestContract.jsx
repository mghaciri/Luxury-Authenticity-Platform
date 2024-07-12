"use client";
import { contractAddress, contractAbi } from "@/constants";
import { useReadContract, useAccount } from "wagmi";


export default function TestContract() {

    const { data } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
          functionName: 'owner',
      });
    
    const { address, isConnected } = useAccount();

      
    return (
        <div className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[10vh]">
            <div>Adresse du contrat : {contractAddress} </div>
            <div>Owner Contract : {data?.toString()}</div>
            <div>User Metamask connecté : {address}</div>
        </div>
    )
}
