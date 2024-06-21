import RainbowKitAndWagmiProvider from "./RainbowKitAndWagmiProvider";
import Layout from "../components/Layout";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voting DApp",
  description: "Voting Dapp for Alyra Blockchain Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RainbowKitAndWagmiProvider>
          <Layout>{children}</Layout>
        </RainbowKitAndWagmiProvider>
      </body>
    </html>
  );
}
