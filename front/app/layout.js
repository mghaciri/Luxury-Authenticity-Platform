import RainbowKitAndWagmiProvider from "./RainbowKitAndWagmiProvider";
import Layout from "../components/Layout";

import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Luxury Authenticity Platform",
  description: "Luxury Authenticity Platform for Alyra Blockchain Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <RainbowKitAndWagmiProvider>
          <Layout>{children}</Layout>
        </RainbowKitAndWagmiProvider>
      </body>
    </html>
  );
}
