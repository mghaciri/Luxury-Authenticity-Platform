import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <nav className="navbar flex justify-between items-center bg-[#0a1835] py-2 px-4 md:py-4 md:px-10 border-b border-teal-500">
      <div className="text-white text-xl md:text-3xl">Luxury Authenticity Platform</div>
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