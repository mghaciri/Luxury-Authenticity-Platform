"use client";
import Home from "@/components/Home";
import WhiteListRegistration from "@/components/WhiteListRegistration";
import ProposalRegistrationStartButton from "@/components/ProposalRegistrationStartButton";
import PropososalSubmission from "@/components/ProposalSubmission";
import VotingStartSessionButton from "@/components/VotingStartSessionButton";
import VotingSessionEndButton from "@/components/VotingSessionEndButton";

import ProposalRegistrationEndButton from "@/components/ProposalRegistrationEndButton";
import TallyVotesButton from "@/components/TallyVotesButton";


import Image from "next/image";

const App = () => {
  return (
    <>
      <Home />
      <WhiteListRegistration />
      <ProposalRegistrationStartButton />
      <PropososalSubmission />
      <ProposalRegistrationEndButton />
      <VotingStartSessionButton />
      <VotingSessionEndButton />
      <TallyVotesButton />
      
      <Home />
    </>
  );
};

export default App;
