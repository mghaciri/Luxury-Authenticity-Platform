"use client";
import { contractAddress, contractAbi } from "@/constants";
import { useReadContract, useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";

import { parseAbiItem } from "viem";

import { publicClient } from "@/utils/client";

export default function TestContract() {
    const { address, isConnected } = useAccount();
    return (
        <div>
            <h2>Test Connexion Metamask</h2>
            <p>Connected with {address}</p>

        </div>
    )
}