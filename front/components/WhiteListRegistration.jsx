"use client";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Alert, Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";


import { contractAddress, contractAbi } from "@/constants";

const WhiteListRegistration = () => {
  const [voterAddress, setVoterAddress] = useState("");
  const [confirmation, setConfirmation] = useState(""); 
  const [registeredAddresses, setRegisteredAddresses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const ownerAddress = "0xfdb8D26D4faB21C3c506A3781583a46aEDc5833d";


  const addVoter = async () => {
    try {
      writeContract({
        addressOrName: contractAddress,
        contractInterface: contractAbi,
        functionName: "addVoter",
        args: [voterAddress],
      });

   
      if (voterAddress) {
        // Transaction successful
        setShowAlert(false);
        setConfirmation("Voter successfully added to whitelist");
      } else {
        // Transaction failed
        throw new Error("Voter registration failed");
      }
    } catch (error) {
      console.error("Error adding voter:", error);
      setShowAlert(true);
      setConfirmation("Error adding voter to whitelist");
    }
  };
  
  const handleRegister = () => {
    console.log(voterAddress);
    addVoter();
  };

  // Check if the current user is the owner
  const isOwner = address === ownerAddress;

  if (!isOwner) {
    return (
      <>
        <div className="flex flex-col text-orange-700 h-80 text-center items-center">
          <h2 className="text-orange-700 text-center text-4xl mt-10">
            You do not have permission to access to White List Registration.
          </h2>
          <p className="text-orange-700 text-center text-2xl mt-4 mb-6">
            Please connect as Admin
          </p>
          <ConnectButton
            label="Connect as Admin"
            className="text-center mt-4"
          />
        </div>
      </>
    );
  }

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-left items-start pb-20 w-full bg-green-600 pt-20 h-[95vh]">
      <div className="xl:pl-60 lg:pl-32 px-8">
        <h2 className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose">
          White List Registration (Only for Admin)
        </h2>

        <div className="flex">
          <input
            type="text"
            value={voterAddress}
            onChange={(e) => setVoterAddress(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black"
            placeholder="Enter Voter Address"
          />

          <Button
            gradientMonochrome="purple"
            onClick={handleRegister}
            className="ml-4"
          >
            Add a voter to whitelist
          </Button>
        </div>
        <div className="mt-4 w-80">
          {showAlert && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="text-sm">Invalid Eth address</span>
            </Alert>
          )}
          {confirmation && <div>{confirmation}</div>}
        </div>

        <div className="overflow-x-auto relative mt-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-black border-b border-gray-500"
                >
                  Voters list
                </th>
              </tr>
            </thead>
            <tbody>
              {registeredAddresses.map((address, index) => (
                <tr
                  key={index}
                  className="bg-blue-100 text-black border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhiteListRegistration;
