pragma solidity^0.8.0;

 contract Election {
    
    //Votes in matrix mapped to ballots
    uint [][] public voteCount;

    //ID of election on firestore
    string public electionID;

    uint public startDate;
    uint public endDate;

    //Stores data of all voters
    Vote [] private voters;

    //Voters id's
    mapping (string => bool) public voted;

    struct Vote {
        uint age;
        string gender;    //true for Male, false for Female
        // uint [3] votes;  //stores indices
    }

    constructor(string memory id, uint sd, uint ed, uint [] memory numCandidates) public {
        electionID = id;
        startDate = sd;
        endDate = ed;

        //Map matrix
        voteCount = new uint[][](3);

        for (uint i=0; i<3; i++){
            voteCount[i] = new uint[](numCandidates[i]);
        }
    }

    //Register user for election
    function registerUser(string memory id, uint age, string memory gender) public{
        voted[id] = false;
        Vote memory newVote = Vote(age, gender);
        voters.push(newVote);
    }

    //Vote indices for the 3 ballots
    function addVote(string memory id, uint [] memory votes) public {
        require(
            !voted[id],
            "Already voted"
        );

        //Add votes to indices
        for(uint i = 0; i < 3; i++) {
            voteCount[i][votes[i]] += 1;
        }

        //Set voted to true
        voted[id] = true;
    }

    //Return vote results
    function getResults() public view returns (uint [][] memory) {
        return voteCount;
    }

    function getId() public view returns (string memory){
        return electionID;
    }

    function updateId(string memory id) public {
        electionID = id;
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

// pragma solidity^0.5.0;

//  contract Election {
    
//     uint [3][] public voteCount;
//     string public electionID;
//     uint public startDate;
//     uint public endDate;
//     string [] public voters;

//     constructor(string memory id, uint sd, string [] memory Voters, uint [] ballotLengths, uint [] numCandidates) public {
//         electionID = id;
//         startDate = sd;


//         for (uint i=0; i<3; i++){
//             voteCount[i] = i;
//         }

//         for(uint i=0; i<3; i++){
//             for(uint j=0; j< numCandidates.length; j++){
//                 voteCount[i][j].length = numCandidates[j];
//             }
//         }

//         voters.length = Voters.length;
//         for(uint i=0; i<voters.length; i++){
//             voters[i] = "";
//         }

//         for(uint i=0; i<voters.length; i++){
//             voters[i] = Voters[i];
//         }
//     }

//     struct Vote {
//         uint age;
//         bool gender;    //true for Male, false for Female
//         uint [3] votes;  //stores indices
//     }

//     function addVote(uint ballot, uint candidate) public {
//         voteCount[ballot][candidate] += 1;
//     }

//     function getId() public view returns (string memory){
//         return electionID;
//     }

//     function updateId(string memory id) public {
//         electionID = id;
//     }

//     // function countVotes() public view {
//     //     uint count = 0;

//     //     for(uint i=0; i>0; i++) {
//     //         for( uint j=0; j<=i; j++) {
//     //             if (voteCount[i][j] > 0) {
//     //                 count++;
//     //             }
//     //             else {
//     //                 break;
//     //             }
//     //         }
//     //     }

//     //     returns (uint count)

//     // }

//     // function votePeriod() public view {
//     //     uint days = (endDate - startDate) / 60 / 60 / 24;
//     //     returns (uint days)
//     // }



// }

