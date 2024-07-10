import { createPublicClient, http } from 'viem'
import { hardhat, mainnet } from 'viem/chains'
 
const publicClient = createPublicClient({ 
  chain: mainnet,
  transport: http()
})