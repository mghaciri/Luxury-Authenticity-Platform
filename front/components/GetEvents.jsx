import Events from './Events';
import React, { useEffect, useState } from 'react';
import { Alert, Badge, Button, Table } from 'flowbite-react';
import { useAccount, useReadContract } from 'wagmi';
import { contractAddress, contractAbi } from '../constants';



import { publicClient } from "@/utils/client";


const GetEvents = () => {
  const { address } = useAccount(); 
  const [events, setEvents] = useState([])


  const getEvents = async() => {
    const RegisteringVoters = await publicClient.getLogs({
      address: contractAddress,
      event: parseAbiItem('event RegisteringVoters(address indexed account, uint amount)'),
      fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
      toBlock: 'latest'
    })
    const ProposalsRegistrationStarted = await publicClient.getLogs({
        address: contractAddress,
        event: parseAbiItem('event ProposalsRegistrationStarted()'),
        fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
        toBlock: 'latest'
        })

    const ProposalsRegistrationEnded = await publicClient.getLogs({
        address: contractAddress,
        event: parseAbiItem('event ProposalsRegistrationEnded()'),
        fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
        toBlock: 'latest'
        })

    const VotingSessionStarted = await publicClient.getLogs({
        address: contractAddress,
        event: parseAbiItem('event VotingSessionStarted()'),
        fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
        toBlock: 'latest'
        })

    const VotingSessionEnded = await publicClient.getLogs({
        address: contractAddress,
        event: parseAbiItem('event VotingSessionEnded()'),
        fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
        toBlock: 'latest'
        })

    const VotesTallied = await publicClient.getLogs({
        address: contractAddress,
        event: parseAbiItem('event VotesTallied()'),
        fromBlock: process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER,
        toBlock: 'latest'
        })
    setEvents([
        ...RegisteringVoters,
        ...ProposalsRegistrationStarted,
        ...ProposalsRegistrationEnded,
        ...VotingSessionStarted,
        ...VotingSessionEnded,
        ...VotesTallied
        ])
    }

    useEffect(() => {
        const getAllEvents = async() => {
          if(address !== 'undefined') {
            await getEvents();
          }
        }
        getAllEvents();
      }, [address]);

      const { data: getWorkflowStatus, refetch: refetchWorkflowStatus } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'workflowStatus',
        watch: true,
      });



  return (
    <>
      
        <Events events={events} />
      
    </>
  );
};

export default GetEvents;
