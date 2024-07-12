import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {

  return (
    <nav className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[10vh]">
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