"use client";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import TokenURI from "@/components/TokenURI";
import MintMontre from "@/components/MintMontre";
import ListeMontres from "@/components/ListeMontres";
import TestContract from "@/components/TestContract";
import GetLastTransactions from "@/components/GetLastTransactions";



const App = () => {
  return (
    <>
      <Home />
      <ListeMontres />
      <MintMontre />
      <GetLastTransactions />      
      <TokenURI />
      <TestContract />
      <Footer />
    </>
  );
};

export default App;