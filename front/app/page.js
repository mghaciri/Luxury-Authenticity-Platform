"use client";
import Home from "@/components/Home";
import WhiteListRegistration from "@/components/WhiteListRegistration";
import Image from "next/image";

const App = () => {
  return (
    <>
      <Home />
      <WhiteListRegistration />
      <Home />
    </>
  );
};

export default App;
