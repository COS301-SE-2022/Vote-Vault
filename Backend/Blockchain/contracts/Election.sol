pragma solidity^0.5.0;

 contract Election {
    
    //Votes in matrix mapped to ballots
    // uint [][] public voteCount;
    uint [] public votes_one;
    uint [] public votes_two;
    uint [] public votes_three;

    //ID of election on firestore
    string public electionID;

    uint public startDate;
    uint public endDate;

    //Stores data of all voters
    Vote [] private voters;

    //Voters id's
    mapping (string => bool) private voted;

    struct Vote {
        uint age;
        string gender;    //true for Male, false for Female
        // uint [3] votes;  //stores indices
    }

    constructor(string memory id, uint sd, uint ed, uint [] memory numCandidates) public {
        electionID = id;
        startDate = sd;
        endDate = ed;

        votes_one = new uint[](numCandidates[0]);
        votes_two = new uint[](numCandidates[1]);
        votes_three = new uint[](numCandidates[2]);

        for(uint i = 0; i < numCandidates[0]; i++) {
            votes_one[i] = 0;
        }

        for(uint i = 0; i < numCandidates[1]; i++) {
            votes_two[i] = 0;
        }

        for(uint i = 0; i < numCandidates[2]; i++) {
            votes_three[i] = 0;
        }
        //Map matrix
        // voteCount = new uint[][](3);

        // for (uint i=0; i<3; i++){
        //     voteCount[i] = new uint[](numCandidates[i]);
        // }

        // for(uint i = 0; i < 3; i++) {
        //     for(uint j = 0; j < voteCount[i].length)
        // }
    }

    function getVotes1() public view returns( uint [] memory){
        return votes_one;
    }

    function getVotes2() public view returns( uint [] memory){
        return votes_two;
    }

    function getVotes3() public view returns( uint [] memory){
        return votes_three;
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
        votes_one[votes[0]] = votes_one[votes[0]]+1;

        votes_two[votes[1]] = votes_two[votes[1]]+1;

        votes_three[votes[2]] = votes_three[votes[2]]+1;

        //Set voted to true
        voted[id] = true;
    }

    //Return vote results
    // function getResults() public view returns (uint [][] memory) {
    //     return voteCount;
    // }

    function getId() public view returns (string memory){
        return electionID;
    }

    function updateId(string memory id) public {
        electionID = id;
    }

    // function countVotes() public view {
    //     uint [] memory winners = new uint[](3);
        
    //     uint count = 0;

        

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

