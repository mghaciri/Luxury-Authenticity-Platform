"use client";
import Home from "@/components/Home";
import SetBaseURI from "@/components/SetBaseURI";
import WhiteListRegistration from "@/components/WhiteListRegistration";
import Footer from "@/components/Footer";
import TokenURI from "@/components/TokenURI";
import OwnerContract from "@/components/OwnerContract";
import TestContract from "@/components/TestContract";



const App = () => {
  return (
    <>
      <Home />
      <TestContract />
      <OwnerContract />
      <TokenURI />
      <SetBaseURI />
      <WhiteListRegistration />
      <Footer />
    </>
  );
};

export default App;