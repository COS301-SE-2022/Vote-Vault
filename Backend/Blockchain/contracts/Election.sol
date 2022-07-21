 pragma solidity^0.5.0;

 contract Election {
    uint public voteCount;
    uint public electionID;

     struct Vote {
        uint age;
        bool gender;    //true for Male, false for Female
        uint votes[3];  //stores indices
    }
}
