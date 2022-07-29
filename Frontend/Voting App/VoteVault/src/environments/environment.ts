// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: "AIzaSyCp6Fe8i7QAlvtfgs9YWd1v154p7x7iT3A",
    authDomain: "votevault-23c86.firebaseapp.com",
    projectId: "votevault-23c86",
    storageBucket: "votevault-23c86.appspot.com",
    messagingSenderId: "173079414550",
    appId: "1:173079414550:web:d057d49d669af633043237",
  },

  contractABI : '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_one","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_two","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_three","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"id","type":"string"},{"name":"sd","type":"uint256"},{"name":"ed","type":"uint256"},{"name":"numCandidates","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"age","type":"uint256"},{"name":"gender","type":"string"}],"name":"registerUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"votes","type":"uint256[]"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"}],"name":"updateId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  contractBytecode : '0x60806040523480156200001157600080fd5b50604051620010f9380380620010f9833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b505092919060200180519060200190929190805190602001909291908051640100000000811115620000b657600080fd5b82810190506020810184811115620000cd57600080fd5b8151856020820283011164010000000082111715620000eb57600080fd5b505092919050505083600390805190602001906200010b9291906200034e565b5082600481905550816005819055508060008151811015156200012a57fe5b90602001906020020151604051908082528060200260200182016040528015620001635781602001602082028038833980820191505090505b50600090805190602001906200017b929190620003d5565b508060018151811015156200018c57fe5b90602001906020020151604051908082528060200260200182016040528015620001c55781602001602082028038833980820191505090505b5060019080519060200190620001dd929190620003d5565b50806002815181101515620001ee57fe5b90602001906020020151604051908082528060200260200182016040528015620002275781602001602082028038833980820191505090505b50600290805190602001906200023f929190620003d5565b5060008090505b8160008151811015156200025657fe5b906020019060200201518110156200029557600080828154811015156200027957fe5b9060005260206000200181905550808060010191505062000246565b5060008090505b816001815181101515620002ac57fe5b90602001906020020151811015620002ec576000600182815481101515620002d057fe5b906000526020600020018190555080806001019150506200029c565b5060008090505b8160028151811015156200030357fe5b90602001906020020151811015620003435760006002828154811015156200032757fe5b90600052602060002001819055508080600101915050620002f3565b50505050506200044f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039157805160ff1916838001178555620003c2565b82800160010185558215620003c2579182015b82811115620003c1578251825591602001919060010190620003a4565b5b509050620003d1919062000427565b5090565b82805482825590600052602060002090810192821562000414579160200282015b8281111562000413578251825591602001919060010190620003f6565b5b50905062000423919062000427565b5090565b6200044c91905b80821115620004485760008160009055506001016200042e565b5090565b90565b610c9a806200045f6000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100a9578063151cb180146100d45780635295da5d146101235780635d1ca6311461027f5780635ede13731461030f57806362609da4146103d7578063c24a0f8b14610540578063dfd66c6d1461056b578063f0b99cdd146105ba578063f8e78e9a14610609575b600080fd5b3480156100b557600080fd5b506100be610699565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b5061010d600480360360208110156100f757600080fd5b810190808035906020019092919050505061069f565b6040518082815260200191505060405180910390f35b34801561012f57600080fd5b5061027d6004803603604081101561014657600080fd5b810190808035906020019064010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184600183028401116401000000008311171561019757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156101fa57600080fd5b82018360208201111561020c57600080fd5b8035906020019184602083028401116401000000008311171561022e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506106c2565b005b34801561028b57600080fd5b50610294610888565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102d45780820151818401526020810190506102b9565b50505050905090810190601f1680156103015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031b57600080fd5b506103d56004803603602081101561033257600080fd5b810190808035906020019064010000000081111561034f57600080fd5b82018360208201111561036157600080fd5b8035906020019184600183028401116401000000008311171561038357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061092a565b005b3480156103e357600080fd5b5061053e600480360360608110156103fa57600080fd5b810190808035906020019064010000000081111561041757600080fd5b82018360208201111561042957600080fd5b8035906020019184600183028401116401000000008311171561044b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001906401000000008111156104b857600080fd5b8201836020820111156104ca57600080fd5b803590602001918460018302840111640100000000831117156104ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610944565b005b34801561054c57600080fd5b50610555610a45565b6040518082815260200191505060405180910390f35b34801561057757600080fd5b506105a46004803603602081101561058e57600080fd5b8101908080359060200190929190505050610a4b565b6040518082815260200191505060405180910390f35b3480156105c657600080fd5b506105f3600480360360208110156105dd57600080fd5b8101908080359060200190929190505050610a6e565b6040518082815260200191505060405180910390f35b34801561061557600080fd5b5061061e610a91565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561065e578082015181840152602081019050610643565b50505050905090810190601f16801561068b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60045481565b6000818154811015156106ae57fe5b906000526020600020016000915090505481565b600160008260008151811015156106d557fe5b906020019060200201518154811015156106eb57fe5b906000526020600020015401600082600081518110151561070857fe5b9060200190602002015181548110151561071e57fe5b90600052602060002001819055506001600082600181518110151561073f57fe5b9060200190602002015181548110151561075557fe5b906000526020600020015401600082600181518110151561077257fe5b9060200190602002015181548110151561078857fe5b9060005260206000200181905550600160008260028151811015156107a957fe5b906020019060200201518154811015156107bf57fe5b90600052602060002001540160008260028151811015156107dc57fe5b906020019060200201518154811015156107f257fe5b906000526020600020018190555060016007836040518082805190602001908083835b60208310151561083a5780518252602082019150602081019050602083039250610815565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff0219169083151502179055505050565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109205780601f106108f557610100808354040283529160200191610920565b820191906000526020600020905b81548152906001019060200180831161090357829003601f168201915b5050505050905090565b8060039080519060200190610940929190610b2f565b5050565b60006007846040518082805190602001908083835b60208310151561097e5780518252602082019150602081019050602083039250610959565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff0219169083151502179055506109d0610baf565b604080519081016040528084815260200183815250905060068190806001815401808255809150509060018203906000526020600020906002020160009091929091909150600082015181600001556020820151816001019080519060200190610a3b929190610bc9565b5050505050505050565b60055481565b600181815481101515610a5a57fe5b906000526020600020016000915090505481565b600281815481101515610a7d57fe5b906000526020600020016000915090505481565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b275780601f10610afc57610100808354040283529160200191610b27565b820191906000526020600020905b815481529060010190602001808311610b0a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b7057805160ff1916838001178555610b9e565b82800160010185558215610b9e579182015b82811115610b9d578251825591602001919060010190610b82565b5b509050610bab9190610c49565b5090565b604080519081016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0a57805160ff1916838001178555610c38565b82800160010185558215610c38579182015b82811115610c37578251825591602001919060010190610c1c565b5b509050610c459190610c49565b5090565b610c6b91905b80821115610c67576000816000905550600101610c4f565b5090565b9056fea165627a7a723058209fc548a31c2954fa8f0965fe95574c5125f09881e8aa594d7a13c3256c6c2bcf0029',
  privateKey : '0x1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
