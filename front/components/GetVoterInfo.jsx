import { useEffect, useState } from "react";
import { Alert } from "flowbite-react";
import { useAccount, useReadContract } from "wagmi";
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from 'viem';

const GetVoterInfo = () => {
  const [voterInfo, setVoterInfo] = useState({ isRegistered: false, hasVoted: false, votedProposalId: 0 });
  const [showAlert, setShowAlert] = useState(false);
  const [confirmation, setConfirmation] = useState(""); 
  const [userRights, setUserRights] = useState('loading');
  const { address } = useAccount();



  // Fetch voter information
  const { data: voterData, isLoading } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getVoter',
    args: [address],
  });

  useEffect(() => {
    if (voterData) {
      const [isRegistered, hasVoted, votedProposalId] = voterData;
      setVoterInfo({ isRegistered, hasVoted, votedProposalId });
    }
  }, [voterData]);

  const getEvents = async () => {
    const AddVoterEvents = await publicClient.getLogs({
      address: contractAddress,
      event: parseAbiItem('event VoterRegistered(address voterAddress)'),
      fromBlock: BigInt(process.env.NEXT_PUBLIC_EVENT_BLOCK_NUMBER),
      toBlock: 'latest'
    });
    // Handle events (this part is missing in your original code)
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (isLoading) {
    return <div>Loading voter information...</div>;
  }

  if (!voterInfo.isRegistered) {
    return (
      <div className="flex flex-col justify-center items-center pb-20 w-full bg-blue-300 h-[25vh]">
        <p className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          You are not registered as a voter.
        </p>
      </div>
    );
  }

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-left items-start pb-20 w-full bg-blue-950 h-[25vh]">
      {showAlert && <Alert>{confirmation}</Alert>}
      <div>
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">Voter Information</h2>
        <p>Registered: {voterInfo.isRegistered ? "Yes" : "No"}</p>
        <p>Has Voted: {voterInfo.hasVoted ? "Yes" : "No"}</p>
        {voterInfo.hasVoted && <p>Voted Proposal ID: {voterInfo.votedProposalId}</p>}
      </div>
    </section>
  );
};

export default GetVoterInfo;
