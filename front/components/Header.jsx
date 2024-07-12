import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {

  return (
    <nav className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[10vh]">
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