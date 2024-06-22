// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * FLOW description
 * 1. Owner can register voters
 * 2. Owner can start proposal registration
 * 3. Voters can register proposals
 * 4. Owner can end proposal registration
 * 5. Owner can start voting session
 * 6. Voters can vote
 * 7. Owner can end voting session
 * 8. Owner can tally votes
 * 9. Owner can end voting session
 */

/// @title Voting contract
/// @author Ty Ha, Mohammed Ghaciri
/// @notice You can use this contract for only the most basic voting mechanism



contract Voting is Ownable {

    /// @notice ID of Winning Proposal 
    uint public winningProposalID;

    /// @notice Voter struct
    /** @dev 
    * isRegistered : The voter is registered 
    * hasVoted : The voter has already voted 
    * votedProposalId : Proposal ID voted 
    */
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint votedProposalId;
    }

    /// @notice Propasal struct with description and vote count
    struct Proposal {
        string description;
        uint voteCount;
    }

    /// @notice List of Workflow status
    enum  WorkflowStatus {
        RegisteringVoters,
        ProposalsRegistrationStarted,
        ProposalsRegistrationEnded,
        VotingSessionStarted,
        VotingSessionEnded,
        VotesTallied
    }

    /// @notice Current Workflow status
    WorkflowStatus public workflowStatus;

    /// @notice Proposal Array
    Proposal[] proposalsArray;

    /// @notice Mapping of Voter struct
    mapping (address => Voter) voters;


    /// @notice Events
    event VoterRegistered(address voterAddress); 
    event WorkflowStatusChange(WorkflowStatus previousStatus, WorkflowStatus newStatus);
    event ProposalRegistered(uint proposalId);
    event Voted (address voter, uint proposalId);

    constructor() Ownable(msg.sender) {    }
    
    modifier onlyVoters() {
        require(voters[msg.sender].isRegistered, "You're not a voter");
        _;
    }
    
    // on peut faire un modifier pour les états

    // ::::::::::::: GETTERS ::::::::::::: //

    /// @notice Return Voter information from an address
    /** @dev 
    * onlyVoters can call this function
    * return a Voter struct
    */
    /// @param _addr : address of a Voter

    function getVoter(address _addr) external onlyVoters view returns (Voter memory) {
        return voters[_addr];
    }

    /// @notice Get the proposal from ID (Description, voteCount)
    /** @dev 
    * onlyVoters can call this function
    * return a Proposal struct
    */
    /// @param _id : ID of Proposal
    function getOneProposal(uint _id) external onlyVoters view returns (Proposal memory) {
        return proposalsArray[_id];
    }

 
    // ::::::::::::: REGISTRATION ::::::::::::: // 

    /// @notice Register a new Voter 
    /** @dev only Owner can register. WorkflowStatus changes
    * the current status must be RegisteringVoters
    * the Voter have not be registered
    * emit a VoterRegistered event
    * Set Voter as registered
    */
    /// @param _addr : address of a Voter
    function addVoter(address _addr) external onlyOwner {
        require(workflowStatus == WorkflowStatus.RegisteringVoters, 'Voters registration is not open yet');
        require(voters[_addr].isRegistered != true, 'Already registered');
    
        voters[_addr].isRegistered = true;
        emit VoterRegistered(_addr);
    }
 

    // ::::::::::::: PROPOSAL ::::::::::::: // 
    
    /** 
    @notice Register a new proposal
    @param _desc : description of the proposal
    @dev only voters can call this function
    * the current status must be ProposalsRegistrationStarted
    * the description must not be empty
    * emit a ProposalRegistered event
    * add the proposal to the proposalsArray
    * increment the proposal ID
    * increment the voteCount of the proposal
    */

    function addProposal(string calldata _desc) external onlyVoters {
        require(workflowStatus == WorkflowStatus.ProposalsRegistrationStarted, 'Proposals are not allowed yet');
        require(keccak256(abi.encode(_desc)) != keccak256(abi.encode("")), 'Vous ne pouvez pas ne rien proposer'); // facultatif
        // voir que desc est different des autres

        Proposal memory proposal;
        proposal.description = _desc;
        proposalsArray.push(proposal);
        // proposalsArray.push(Proposal(_desc,0));
        emit ProposalRegistered(proposalsArray.length-1);
    }

    // ::::::::::::: VOTE ::::::::::::: //
    
    
    /** 
    @notice Function to vote for a proposal
    @param _id : ID of the proposal
    @dev only voters can call this function
    * the current status must be VotingSessionStarted
    * the voter must not have already voted
    * the proposal must exist
    * emit a Voted event
    */

    function setVote( uint _id) external onlyVoters {
        require(workflowStatus == WorkflowStatus.VotingSessionStarted, 'Voting session havent started yet');
        require(voters[msg.sender].hasVoted != true, 'You have already voted');
        require(_id < proposalsArray.length, 'Proposal not found'); // pas obligé, et pas besoin du >0 car uint

        voters[msg.sender].votedProposalId = _id;
        voters[msg.sender].hasVoted = true;
        proposalsArray[_id].voteCount++;

         if (proposalsArray[_id].voteCount > proposalsArray[winningProposalID].voteCount) {
               winningProposalID = _id;
          }

        emit Voted(msg.sender, _id);
    }

    // ::::::::::::: STATE ::::::::::::: //


    /** 
    @notice Function to start the registration of voters
    @dev only the owner can call this function
    * the current status must be RegisteringVoters
    * the new status will be ProposalsRegistrationStarted
    * add a default proposal "GENESIS" to the proposalsArray
    * emit a WorkflowStatusChange event
    */

    function startProposalsRegistering() external onlyOwner {
        require(workflowStatus == WorkflowStatus.RegisteringVoters, 'Registering proposals cant be started now');
        workflowStatus = WorkflowStatus.ProposalsRegistrationStarted;
        
        Proposal memory proposal;
        proposal.description = "GENESIS";
        proposalsArray.push(proposal);
        
        emit WorkflowStatusChange(WorkflowStatus.RegisteringVoters, WorkflowStatus.ProposalsRegistrationStarted);
    }

    
    /** 
    @notice Function to End the proposals registration
    @dev only the owner can call this function
    * the current status must be ProposalsRegistrationStarted
    * the new status will be ProposalsRegistrationEnded
    */

    function endProposalsRegistering() external onlyOwner {
        require(workflowStatus == WorkflowStatus.ProposalsRegistrationStarted, 'Registering proposals havent started yet');
        workflowStatus = WorkflowStatus.ProposalsRegistrationEnded;
        emit WorkflowStatusChange(WorkflowStatus.ProposalsRegistrationStarted, WorkflowStatus.ProposalsRegistrationEnded);
    }

    
    /** 
    @notice Function to start the voting session
    @dev only the owner can call this function
    * the current status must be ProposalsRegistrationEnded
    * the new status will be VotingSessionStarted
    */

    function startVotingSession() external onlyOwner {
        require(workflowStatus == WorkflowStatus.ProposalsRegistrationEnded, 'Registering proposals phase is not finished');
        workflowStatus = WorkflowStatus.VotingSessionStarted;
        emit WorkflowStatusChange(WorkflowStatus.ProposalsRegistrationEnded, WorkflowStatus.VotingSessionStarted);
    }

    /** 
    @notice Function to End the voting session
    @dev only the owner can call this function
    * the current status must be VotingSessionStarted
    * the new status will be VotingSessionEnded
    */

    function endVotingSession() external onlyOwner {
        require(workflowStatus == WorkflowStatus.VotingSessionStarted, 'Voting session havent started yet');
        workflowStatus = WorkflowStatus.VotingSessionEnded;
        emit WorkflowStatusChange(WorkflowStatus.VotingSessionStarted, WorkflowStatus.VotingSessionEnded);
    }

/** 
    @notice Tally the votes and end the voting session
    @dev only the owner can call this function
    * the current status must be VotingSessionEnded
    * the new status will be VotesTallied
    * emit a WorkflowStatusChange event
    */

   function tallyVotes() external onlyOwner {
       require(workflowStatus == WorkflowStatus.VotingSessionEnded, "Current status is not voting session ended");
       workflowStatus = WorkflowStatus.VotesTallied;
       emit WorkflowStatusChange(WorkflowStatus.VotingSessionEnded, WorkflowStatus.VotesTallied);
    }
}