'use client';
import { useState, useEffect } from "react";
import { parseAbiItem, formatEther } from "viem";
import { publicClient } from "@/utils/client";
import { contractAddress, contractAbi } from '../constants';

/*
const client = createPublicClient({
  chain: mainnet,
  transport: http('https://mainnet.infura.io/v3/1caf516b251d4527822bdfef7f97858b')
})
*/
export default function GetLastTransactions() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    console.log(contractAddress);
    const getInfos = async() => {
      const logs = await publicClient.getLogs({
        address: contractAddress,
        //event: parseAbiItem('event mintMontre(uint16, address indexed, string, string, string)'),
        event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
        fromBlock: BigInt(process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER),
//        fromBlock: 6290859n,
        toBlock: 6295028n
//        toBlock: 'latest'
      })
      setEvents(logs);
     }
    getInfos();
  }, [])

  console.log(events);

	// formatEther() permet de convertir de WEI en Ether
 return (
    <p className="justify-center items-center p-8 bg-blue-950">
      <div className="text-center text-2xl font-bold mt-4">Dernières transactions </div>

      {events.length > 0 && events.map((event) => {
        return (
          <p key={crypto.randomUUID()}>
            { event.eventName } - From : {event.args[0]} - To : {formatEther(event.args[1])} 
            
          </p>
        )
      })}
    </p>
  );


}