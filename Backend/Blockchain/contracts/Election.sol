 pragma solidity^0.5.0;

 contract Election {
    
    uint [3][] public voteCount;
    uint public electionID;
    uint public startDate;
    uint public endDate;
    byte32 [] public voters;

    struct Vote {
        uint age;
        bool gender;    //true for Male, false for Female
        uint votes[3];  //stores indices
    }
}
