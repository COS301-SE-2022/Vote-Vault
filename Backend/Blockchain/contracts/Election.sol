 pragma solidity^0.5.0;

 contract Election{
    //Store users that are allowed to vote in this election in an array
    //Once removed, they have voted
    struct Vote {
        uint age;
        bool gender;    //true for Male, false for Female
        uint votes[3];  //stores indices
    }
 }