"use client";
import Home from "@/components/Home";
import GetStatus from "@/components/GetStatus";
import WhiteListRegistration from "@/components/WhiteListRegistration";
import ProposalRegistrationStartButton from "@/components/ProposalRegistrationStartButton";
import ProposalSubmission from "@/components/ProposalSubmission";
import ProposalRegistrationEndButton from "@/components/ProposalRegistrationEndButton";
import VotingStartSessionButton from "@/components/VotingStartSessionButton";
import Voting from "@/components/Voting";
import VotingSessionEndButton from "@/components/VotingSessionEndButton";
import TallyVotesButton from "@/components/TallyVotesButton";
import WinningProposal from "@/components/WinningProposal";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <WhiteListRegistration />

      <Footer />
    </>
  );
};

export default App;
