"use client";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import TokenURI from "@/components/TokenURI";
import MintMontre from "@/components/MintMontre";
import ListeMontres from "@/components/ListeMontres";
import ListeMontres2 from "@/components/ListeMontres2";
import TestContract from "@/components/TestContract";
import GetLastTransactions from "@/components/GetLastTransactions";
import WhiteListRegistration from "@/components/WhiteListRegistration";



const App = () => {
  return (
    <>
      <Home />
      <ListeMontres2 />
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