pragma solidity^0.5.0;

 contract Election {
<<<<<<< HEAD

=======
    
>>>>>>> 1b2e36dab1c8ecb261cde6a6c3d029cbe83cce22
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 1b2e36dab1c8ecb261cde6a6c3d029cbe83cce22
