export const Election = [
    {
        "contractName": "Election",
        "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "startDate",
            "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x0b97bc86"
        },
        {
            "constant": true,
            "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "name": "voteCount",
            "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xba329414"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "endDate",
            "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xc24a0f8b"
        },
        {
            "constant": true,
            "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "name": "voters",
            "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xda58c7d9"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "electionID",
            "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf8e78e9a"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "ballot",
                "type": "uint256"
            },
            {
                "name": "candidate",
                "type": "uint256"
            }
            ],
            "name": "addVote",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xfcca991b"
        }
        ],
        "bytecode": "0x608060405234801561001057600080fd5b506102c0806100206000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc861461007d578063ba329414146100a8578063c24a0f8b14610101578063da58c7d91461012c578063f8e78e9a1461017b578063fcca991b146101a6575b600080fd5b34801561008957600080fd5b506100926101eb565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100eb600480360360408110156100cb57600080fd5b8101908080359060200190929190803590602001909291905050506101f1565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610227565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b810190808035906020019092919050505061022d565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b50610190610250565b6040518082815260200191505060405180910390f35b3480156101b257600080fd5b506101e9600480360360408110156101c957600080fd5b810190808035906020019092919080359060200190929190505050610256565b005b60025481565b60008281548110151561020057fe5b90600052602060002090600302018160038110151561021b57fe5b01600091509150505481565b60035481565b60048181548110151561023c57fe5b906000526020600020016000915090505481565b60015481565b600160008381548110151561026757fe5b90600052602060002090600302018260038110151561028257fe5b0160008282540192505081905550505056fea165627a7a7230582035601f1a47684fd1fe0ea95361e35dffd208a094a3bbe97b772e35299ffda4910029",
        "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc861461007d578063ba329414146100a8578063c24a0f8b14610101578063da58c7d91461012c578063f8e78e9a1461017b578063fcca991b146101a6575b600080fd5b34801561008957600080fd5b506100926101eb565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100eb600480360360408110156100cb57600080fd5b8101908080359060200190929190803590602001909291905050506101f1565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610227565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b810190808035906020019092919050505061022d565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b50610190610250565b6040518082815260200191505060405180910390f35b3480156101b257600080fd5b506101e9600480360360408110156101c957600080fd5b810190808035906020019092919080359060200190929190505050610256565b005b60025481565b60008281548110151561020057fe5b90600052602060002090600302018160038110151561021b57fe5b01600091509150505481565b60035481565b60048181548110151561023c57fe5b906000526020600020016000915090505481565b60015481565b600160008381548110151561026757fe5b90600052602060002090600302018260038110151561028257fe5b0160008282540192505081905550505056fea165627a7a7230582035601f1a47684fd1fe0ea95361e35dffd208a094a3bbe97b772e35299ffda4910029",
        "sourceMap": "27:1011:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:1011:0;;;;;;;",
        "deployedSourceMap": "27:1011:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;121:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;121:21:0;;;;;;;;;;;;;;;;;;;;;;;58:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;58:27:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;58:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;149:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;149:19:0;;;;;;;;;;;;;;;;;;;;;;;175:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;175:24:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;175:24:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;92:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;92:22:0;;;;;;;;;;;;;;;;;;;;;;;357:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;357:107:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;357:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;121:21;;;;:::o;58:27::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;149:19::-;;;;:::o;175:24::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;92:22::-;;;;:::o;357:107::-;455:1;423:9;433:6;423:17;;;;;;;;;;;;;;;;;;;;441:9;423:28;;;;;;;;;;;:33;;;;;;;;;;;357:107;;:::o",
        "source": "pragma solidity^0.5.0;\r\n\r\n contract Election {\r\n    \r\n    uint [3][] public voteCount;\r\n    uint public electionID;\r\n    uint public startDate;\r\n    uint public endDate;\r\n    bytes32 [] public voters;\r\n\r\n    struct Vote {\r\n        uint age;\r\n        bool gender;    //true for Male, false for Female\r\n        uint [3] votes;  //stores indices\r\n    }\r\n\r\n    function addVote(uint ballot, uint candidate) external {\r\n        voteCount[ballot][candidate] += 1;\r\n    }\r\n\r\n    // function countVotes() public view {\r\n    //     uint count = 0;\r\n\r\n    //     for(uint i=0; i>0; i++) {\r\n    //         for( uint j=0; j<=i; j++) {\r\n    //             if (voteCount[i][j] > 0) {\r\n    //                 count++;\r\n    //             }\r\n    //             else {\r\n    //                 break;\r\n    //             }\r\n    //         }\r\n    //     }\r\n\r\n    //     returns (uint count)\r\n\r\n    // }\r\n\r\n    // function votePeriod() public view {\r\n    //     uint days = (endDate - startDate) / 60 / 60 / 24;\r\n    //     returns (uint days)\r\n    // }\r\n\r\n}\r\n\r\n",
        "sourcePath": "C:/Users/bevan/OneDrive/Documents/GitHub/Vote-Vault/Backend/Blockchain/contracts/Election.sol",
        "ast": {
        "absolutePath": "/C/Users/bevan/OneDrive/Documents/GitHub/Vote-Vault/Backend/Blockchain/contracts/Election.sol",
        "exportedSymbols": {
            "Election": [
            41
            ]
        },
        "id": 42,
        "nodeType": "SourceUnit",
        "nodes": [
            {
            "id": 1,
            "literals": [
                "solidity",
                "^",
                "0.5",
                ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:22:0"
            },
            {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 41,
            "linearizedBaseContracts": [
                41
            ],
            "name": "Election",
            "nodeType": "ContractDefinition",
            "nodes": [
                {
                "constant": false,
                "id": 6,
                "name": "voteCount",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "58:27:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage",
                    "typeString": "uint256[3][]"
                },
                "typeName": {
                    "baseType": {
                    "baseType": {
                        "id": 2,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "58:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        }
                    },
                    "id": 4,
                    "length": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 3,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "64:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                        },
                        "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "58:8:0",
                    "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                    }
                    },
                    "id": 5,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "58:10:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage_ptr",
                    "typeString": "uint256[3][]"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 8,
                "name": "electionID",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "92:22:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 7,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 10,
                "name": "startDate",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "121:21:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 12,
                "name": "endDate",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "149:19:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 11,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "149:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 15,
                "name": "voters",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "175:24:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                    "typeString": "bytes32[]"
                },
                "typeName": {
                    "baseType": {
                    "id": 13,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:0",
                    "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                    }
                    },
                    "id": 14,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "175:10:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "canonicalName": "Election.Vote",
                "id": 24,
                "members": [
                    {
                    "constant": false,
                    "id": 17,
                    "name": "age",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "231:8:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                    },
                    "typeName": {
                        "id": 16,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "231:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    },
                    {
                    "constant": false,
                    "id": 19,
                    "name": "gender",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "250:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                    },
                    "typeName": {
                        "id": 18,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "250:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    },
                    {
                    "constant": false,
                    "id": 23,
                    "name": "votes",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "309:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                    },
                    "typeName": {
                        "baseType": {
                        "id": 20,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "309:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "id": 22,
                        "length": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 21,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "315:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                        },
                        "value": "3"
                        },
                        "nodeType": "ArrayTypeName",
                        "src": "309:8:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    }
                ],
                "name": "Vote",
                "nodeType": "StructDefinition",
                "scope": 41,
                "src": "208:141:0",
                "visibility": "public"
                },
                {
                "body": {
                    "id": 39,
                    "nodeType": "Block",
                    "src": "412:52:0",
                    "statements": [
                    {
                        "expression": {
                        "argumentTypes": null,
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                                "argumentTypes": null,
                                "id": 31,
                                "name": "voteCount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6,
                                "src": "423:9:0",
                                "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage",
                                "typeString": "uint256[3] storage ref[] storage ref"
                                }
                            },
                            "id": 34,
                            "indexExpression": {
                                "argumentTypes": null,
                                "id": 32,
                                "name": "ballot",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26,
                                "src": "433:6:0",
                                "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                                }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "423:17:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$3_storage",
                                "typeString": "uint256[3] storage ref"
                            }
                            },
                            "id": 35,
                            "indexExpression": {
                            "argumentTypes": null,
                            "id": 33,
                            "name": "candidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "441:9:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "423:28:0",
                            "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                            }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 36,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "455:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "src": "423:33:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "id": 38,
                        "nodeType": "ExpressionStatement",
                        "src": "423:33:0"
                    }
                    ]
                },
                "documentation": null,
                "id": 40,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "addVote",
                "nodeType": "FunctionDefinition",
                "parameters": {
                    "id": 29,
                    "nodeType": "ParameterList",
                    "parameters": [
                    {
                        "constant": false,
                        "id": 26,
                        "name": "ballot",
                        "nodeType": "VariableDeclaration",
                        "scope": 40,
                        "src": "374:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        },
                        "typeName": {
                        "id": 25,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "374:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 28,
                        "name": "candidate",
                        "nodeType": "VariableDeclaration",
                        "scope": 40,
                        "src": "387:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        },
                        "typeName": {
                        "id": 27,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "387:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "value": null,
                        "visibility": "internal"
                    }
                    ],
                    "src": "373:29:0"
                },
                "returnParameters": {
                    "id": 30,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "412:0:0"
                },
                "scope": 41,
                "src": "357:107:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
                }
            ],
            "scope": 42,
            "src": "27:1011:0"
            }
        ],
        "src": "0:1042:0"
        },
        "legacyAST": {
        "absolutePath": "/C/Users/bevan/OneDrive/Documents/GitHub/Vote-Vault/Backend/Blockchain/contracts/Election.sol",
        "exportedSymbols": {
            "Election": [
            41
            ]
        },
        "id": 42,
        "nodeType": "SourceUnit",
        "nodes": [
            {
            "id": 1,
            "literals": [
                "solidity",
                "^",
                "0.5",
                ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:22:0"
            },
            {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 41,
            "linearizedBaseContracts": [
                41
            ],
            "name": "Election",
            "nodeType": "ContractDefinition",
            "nodes": [
                {
                "constant": false,
                "id": 6,
                "name": "voteCount",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "58:27:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage",
                    "typeString": "uint256[3][]"
                },
                "typeName": {
                    "baseType": {
                    "baseType": {
                        "id": 2,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "58:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        }
                    },
                    "id": 4,
                    "length": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 3,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "64:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                        },
                        "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "58:8:0",
                    "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                    }
                    },
                    "id": 5,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "58:10:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage_ptr",
                    "typeString": "uint256[3][]"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 8,
                "name": "electionID",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "92:22:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 7,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 10,
                "name": "startDate",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "121:21:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 12,
                "name": "endDate",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "149:19:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 11,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "149:4:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "constant": false,
                "id": 15,
                "name": "voters",
                "nodeType": "VariableDeclaration",
                "scope": 41,
                "src": "175:24:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                    "typeString": "bytes32[]"
                },
                "typeName": {
                    "baseType": {
                    "id": 13,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:0",
                    "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                    }
                    },
                    "id": 14,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "175:10:0",
                    "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                    }
                },
                "value": null,
                "visibility": "public"
                },
                {
                "canonicalName": "Election.Vote",
                "id": 24,
                "members": [
                    {
                    "constant": false,
                    "id": 17,
                    "name": "age",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "231:8:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                    },
                    "typeName": {
                        "id": 16,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "231:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    },
                    {
                    "constant": false,
                    "id": 19,
                    "name": "gender",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "250:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                    },
                    "typeName": {
                        "id": 18,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "250:4:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    },
                    {
                    "constant": false,
                    "id": 23,
                    "name": "votes",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "309:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                    },
                    "typeName": {
                        "baseType": {
                        "id": 20,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "309:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "id": 22,
                        "length": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 21,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "315:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                        },
                        "value": "3"
                        },
                        "nodeType": "ArrayTypeName",
                        "src": "309:8:0",
                        "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                        "typeString": "uint256[3]"
                        }
                    },
                    "value": null,
                    "visibility": "internal"
                    }
                ],
                "name": "Vote",
                "nodeType": "StructDefinition",
                "scope": 41,
                "src": "208:141:0",
                "visibility": "public"
                },
                {
                "body": {
                    "id": 39,
                    "nodeType": "Block",
                    "src": "412:52:0",
                    "statements": [
                    {
                        "expression": {
                        "argumentTypes": null,
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                                "argumentTypes": null,
                                "id": 31,
                                "name": "voteCount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6,
                                "src": "423:9:0",
                                "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_array$_t_uint256_$3_storage_$dyn_storage",
                                "typeString": "uint256[3] storage ref[] storage ref"
                                }
                            },
                            "id": 34,
                            "indexExpression": {
                                "argumentTypes": null,
                                "id": 32,
                                "name": "ballot",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26,
                                "src": "433:6:0",
                                "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                                }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "423:17:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$3_storage",
                                "typeString": "uint256[3] storage ref"
                            }
                            },
                            "id": 35,
                            "indexExpression": {
                            "argumentTypes": null,
                            "id": 33,
                            "name": "candidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "441:9:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "423:28:0",
                            "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                            }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 36,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "455:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "src": "423:33:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "id": 38,
                        "nodeType": "ExpressionStatement",
                        "src": "423:33:0"
                    }
                    ]
                },
                "documentation": null,
                "id": 40,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "addVote",
                "nodeType": "FunctionDefinition",
                "parameters": {
                    "id": 29,
                    "nodeType": "ParameterList",
                    "parameters": [
                    {
                        "constant": false,
                        "id": 26,
                        "name": "ballot",
                        "nodeType": "VariableDeclaration",
                        "scope": 40,
                        "src": "374:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        },
                        "typeName": {
                        "id": 25,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "374:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 28,
                        "name": "candidate",
                        "nodeType": "VariableDeclaration",
                        "scope": 40,
                        "src": "387:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                        },
                        "typeName": {
                        "id": 27,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "387:4:0",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        }
                        },
                        "value": null,
                        "visibility": "internal"
                    }
                    ],
                    "src": "373:29:0"
                },
                "returnParameters": {
                    "id": 30,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "412:0:0"
                },
                "scope": 41,
                "src": "357:107:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
                }
            ],
            "scope": 42,
            "src": "27:1011:0"
            }
        ],
        "src": "0:1042:0"
        },
        "compiler": {
        "name": "solc",
        "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
        },
        "networks": {
        "3": {
            "events": {},
            "links": {},
            "address": "0x76180da9F62ccDe81C5092CACa5818835FaD6900",
            "transactionHash": "0x483726f34c16722927b60b74473150452459bd9687805b75c468728e0cb7951a"
        },
        "5777": {
            "events": {},
            "links": {},
            "address": "0xf6f510a5b09439bEc46178e1C2D0ba66600F1c08",
            "transactionHash": "0x6aa1b4ff50c351e4582dd80d853276e17b97949ae762e0460d685496a8a166ed"
        }
        },
        "schemaVersion": "3.0.1",
        "updatedAt": "2022-07-22T12:23:39.343Z",
        "devdoc": {
        "methods": {}
        },
        "userdoc": {
        "methods": {}
        }
    },
];