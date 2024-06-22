"use client";
import Image from "next/image";

import { Card, Button } from "flowbite-react";

const ButtonStart = () => {
  return (
    <a
      href="/loginHome"
      className="bg-[#92CD00] hover:bg-[#5aa73b] active:bg-[#92CD00] text-white sm:px-12 px-4 mt-8 py-3 sm:py-1.5 md:py-4 text-lg font-semibold rounded-full whitespace-nowrap"
    >
      VOTE NOW →
    </a>
  );
};

const FirstSection = () => {
  return (
    <section className="flex sm:flex-row flex-col-reverse justify-around items-center pb-20 w-full bg-green-500 pt-20 h-[95vh]">
      <div className="sm:w-1/2 xl:pl-60 lg:pl-32 px-8">
        
        <h2
          style={{ lineHeight: "1.2" }}
          className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose"
        >
          Welcome on our Voting Dapp
        </h2>
        <ButtonStart />
      </div>
      <div className="sm:w-1/2 xl:pr-60 lg:pr-32 px-8">
        <Image
          src="/images/home.png"
          alt="home image"
          width="600"
          height="600"
          className="rounded-[25px]"
        />
      </div>
    </section>
  );
};

const information = (title, paragraph, srcImage) => {
  return (
    <div className="lg:w-1/4 px-2 min-h-7 flex flex-col">
      <div className="flex flex-col items-center">
        <Image
          src={srcImage}
          color="#ECAA00"
          className="w-24 h-24 justify-center mb-4 border-2 rounded-full border-green-500"
          alt="Icon"
          width="500"
          height="500"
        />
        <h1
          className="text-black xl:text-xl lg:text-l text-m font-semibold whitespace-normal"
        >
          {title}
        </h1>
      </div>
      <p className="text-gray-500 whitespace-normal mt-4 mb-8 xl:text-l text-m  text-center">
        {paragraph}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      {FirstSection()}
     
       
      
   
    </>
  );
};

export default App;