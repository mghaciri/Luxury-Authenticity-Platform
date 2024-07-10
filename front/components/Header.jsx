import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useReadContract, useAccount } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const Header = () => {

  const { data } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
      functionName: 'baseURI',
  });

    const { address, isConnected } = useAccount();
    return (
        <div>
            <h2>Test Connexion Metamask</h2>
            <p>Connected with {address}</p>

        </div>
    )

  return (
    <nav className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[50vh]">
      <span>Owner Contract: {data?.toString()}</span>
      <span>Test Connexion Metamask: {address}</span>
      <div className="text-xl md:text-3xl">Luxury Authenticity Platform</div>
      <div>
        <ConnectButton
          label="Connect your wallet"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus="icon"
          showBalance={true}
        />
      </div>
    </nav>
  );
};

export default Header;