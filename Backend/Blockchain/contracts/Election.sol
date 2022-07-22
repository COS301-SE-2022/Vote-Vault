pragma solidity^0.5.0;

 contract Election {
    
    uint [3][] public voteCount;
    uint public electionID;
    uint public startDate;
    uint public endDate;
    bytes32 [] public voters;

    constructor() public {
        this.electionID = "fakeID";
    }

    struct Vote {
        uint age;
        bool gender;    //true for Male, false for Female
        uint [3] votes;  //stores indices
    }

    function addVote(uint ballot, uint candidate) external {
        voteCount[ballot][candidate] += 1;
    }

    // function countVotes() public view {
    //     uint count = 0;

    //     for(uint i=0; i>0; i++) {
    //         for( uint j=0; j<=i; j++) {
    //             if (voteCount[i][j] > 0) {
    //                 count++;
    //             }
    //             else {
    //                 break;
    //             }
    //         }
    //     }

    //     returns (uint count)

    // }

    // function votePeriod() public view {
    //     uint days = (endDate - startDate) / 60 / 60 / 24;
    //     returns (uint days)
    // }

}

