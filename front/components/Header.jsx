import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <nav className="navbar flex justify-between bg-[#0a1835] py-4 px-10 border-b border-teal-500">
      <div className="text-white text-3xl">VOTING DAPP</div>
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
