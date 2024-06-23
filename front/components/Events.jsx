import React from 'react';

import GetStatus from './GetStatus';

// Alternative to switch-case using an object
const statusDescriptions = {
  0: 'RegisteringVoters',
  1: 'ProposalsRegistrationStarted',
  2: 'ProposalsRegistrationEnded',
  3: 'VotingSessionStarted',
  4: 'VotingSessionEnded',
  5: 'VotesTallied',
};

const getStatusDescription = (status) => statusDescriptions[status] || 'UnknownStatus';

const Events = () => {




  return (
    <>
      <div className="flex justify-center items-center p-8 bg-blue-950">
        <h2 className="text-2xl font-bold mt-4">Events</h2>
        <GetStatus />
        <div>{getStatusDescription(status)}</div>
      </div>
      

      
    </>
  );
};

// Function to determine badge color based on event type
const getBadgeColor = (eventType) => {
  switch (eventType) {
    case 'ProposalRegistered':
    case 'Voted':
      return 'info';
    case 'VoterRegistered':
      return 'gray';
    case 'WorkflowStatusChange':
      return 'success';
    default:
      return 'failure';
  }
};

// Function to render event details based on event type
const renderEventDetails = (event) => {
  switch (event.type) {
    case 'VoterRegistered':
      return `Voter Address: ${event.address}`;
    case 'ProposalRegistered':
      return `Proposal ID: ${event.proposalId}`;
    case 'Voted':
      return `Voter Address: ${event.address}, Proposal ID: ${event.proposalId}`;
    case 'WorkflowStatusChange':
      return `Previous Status: ${getStatusDescription(event.previousStatus)}, New Status: ${getStatusDescription(event.newStatus)}`;
    default:
      return '';
  }
};

export default Events;