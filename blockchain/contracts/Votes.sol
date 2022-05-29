pragma solidity >=0.4.22 <0.9.0;

contract Votes {
    uint count;

    struct Vote {
        uint id;
        uint voter_id;
        uint election_candidate_id;
    }

    constructor(uint _voter_id, uint _election_candidate_id) public {
        createContract(_voter_id, _election_candidate_id);
    }

    mapping(uint => Vote) public votes;

    function createContract(uint voter_id, uint candidate_id) public {
        count++;
        votes = Vote()
    }
}