"use client";
import Home from "@/components/Home";
import WhiteListRegistration from "@/components/WhiteListRegistration";
import VotingStartSessionButton from "@/components/VotingStartSessionButton";
import VotingSessionEndButton from "@/components/VotingSessionEndButton";
import ProposalRegistrationStartButton from "@/components/ProposalRegistrationStartButton";
import ProposalRegistrationEndButton from "@/components/ProposalRegistrationEndButton";
import TallyVotesButton from "@/components/TallyVotesButton";


import Image from "next/image";

const App = () => {
  return (
    <>
      <Home />
      <ProposalRegistrationStartButton />
      <WhiteListRegistration />
      <ProposalRegistrationEndButton />
      <VotingStartSessionButton />
      <VotingSessionEndButton />
      <TallyVotesButton />
      
      <Home />
    </>
  );
};

export default App;
