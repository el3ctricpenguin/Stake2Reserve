export const S2RABI = [
    {
        _format: "hh-sol-artifact-1",
        contractName: "Stake2Reserve",
        sourceName: "contracts/Stake2Reserve.sol",
        abi: [
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_USDCAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "_S2RNFTAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "_S2RAaveAddress",
                        type: "address",
                    },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "customerPaymentAmount",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "address",
                        name: "customerAddress",
                        type: "address",
                    },
                ],
                name: "CheckOut",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        indexed: false,
                        internalType: "bool[7]",
                        name: "openingWeekDays",
                        type: "bool[7]",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "openingTime",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "closingTime",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "uint256",
                                name: "cancelFee",
                                type: "uint256",
                            },
                            {
                                internalType: "string[]",
                                name: "imageURLs",
                                type: "string[]",
                            },
                        ],
                        indexed: false,
                        internalType: "struct Stake2Reserve.Course[]",
                        name: "courses",
                        type: "tuple[]",
                    },
                    {
                        indexed: false,
                        internalType: "string",
                        name: "imageURL",
                        type: "string",
                    },
                    {
                        indexed: false,
                        internalType: "string",
                        name: "genre",
                        type: "string",
                    },
                    {
                        indexed: false,
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                ],
                name: "RegisterShopProperty",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: "address",
                        name: "shopAddress",
                        type: "address",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "startingTime",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "endingTime",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "guestCount",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "courseId",
                        type: "uint256",
                    },
                ],
                name: "Reservation",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "uint256",
                        name: "paymentAmount",
                        type: "uint256",
                    },
                    {
                        indexed: false,
                        internalType: "address",
                        name: "shopAddress",
                        type: "address",
                    },
                ],
                name: "SetPaymentAmount",
                type: "event",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                    },
                ],
                name: "checkOut",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_shopAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "_courseId",
                        type: "uint256",
                    },
                ],
                name: "getCourses",
                outputs: [
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "uint256",
                                name: "cancelFee",
                                type: "uint256",
                            },
                            {
                                internalType: "string[]",
                                name: "imageURLs",
                                type: "string[]",
                            },
                        ],
                        internalType: "struct Stake2Reserve.Course",
                        name: "",
                        type: "tuple",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_shopAddress",
                        type: "address",
                    },
                ],
                name: "getEligibleNFTs",
                outputs: [
                    {
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_shopAddress",
                        type: "address",
                    },
                ],
                name: "getNoShowNFTs",
                outputs: [
                    {
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                    },
                ],
                name: "getReservationData",
                outputs: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "shopAddress",
                                type: "address",
                            },
                            {
                                internalType: "string",
                                name: "shopName",
                                type: "string",
                            },
                            {
                                internalType: "uint256",
                                name: "startingTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endingTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "guestCount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "courseId",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "paymentAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "bool",
                                name: "isCheckedOut",
                                type: "bool",
                            },
                        ],
                        internalType: "struct Stake2Reserve.ReservationData",
                        name: "",
                        type: "tuple",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [],
                name: "getShopAddresses",
                outputs: [
                    {
                        internalType: "address[]",
                        name: "",
                        type: "address[]",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_shopAddress",
                        type: "address",
                    },
                ],
                name: "getShopStatus",
                outputs: [
                    {
                        components: [
                            {
                                internalType: "bool[7]",
                                name: "openingWeekDays",
                                type: "bool[7]",
                            },
                            {
                                internalType: "uint256",
                                name: "openingTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "closingTime",
                                type: "uint256",
                            },
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "imageURL",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "genre",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "description",
                                type: "string",
                            },
                        ],
                        internalType: "struct Stake2Reserve.ShopStatusWithoutCources",
                        name: "",
                        type: "tuple",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_unixTime",
                        type: "uint256",
                    },
                ],
                name: "getTime",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_unixTime",
                        type: "uint256",
                    },
                ],
                name: "getWeekDay",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "string",
                        name: "_name",
                        type: "string",
                    },
                    {
                        internalType: "bool[7]",
                        name: "_openingWeekDays",
                        type: "bool[7]",
                    },
                    {
                        internalType: "uint256",
                        name: "_openingTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "_closingTime",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "uint256",
                                name: "cancelFee",
                                type: "uint256",
                            },
                            {
                                internalType: "string[]",
                                name: "imageURLs",
                                type: "string[]",
                            },
                        ],
                        internalType: "struct Stake2Reserve.Course[]",
                        name: "_courses",
                        type: "tuple[]",
                    },
                    {
                        internalType: "string",
                        name: "_imageURL",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "_genre",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "_description",
                        type: "string",
                    },
                ],
                name: "registerShopProperty",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "_shopAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "_startingTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "_endingTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "_guestCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "_courseId",
                        type: "uint256",
                    },
                ],
                name: "reserve",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "_paymentAmount",
                        type: "uint256",
                    },
                ],
                name: "setPaymentAmount",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                    },
                ],
                name: "withdrawCancelFee",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
        ],
        bytecode:
            "0x60806040526363b1054060015561a8c0600255620f42406007553480156200002657600080fd5b50604051620059a4380380620059a483398181016040528101906200004c9190620002e1565b6200005d836200016a60201b60201c565b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200039a565b6200020a816040516024016200018191906200034e565b6040516020818303038152906040527f2c2ecbc2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200020d60201b60201c565b50565b62000233816200022e6200023660201b62002de4176200025760201b60201c565b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6200026b60201b620032e517819050919050565b620002756200036b565b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002a9826200027c565b9050919050565b620002bb816200029c565b8114620002c757600080fd5b50565b600081519050620002db81620002b0565b92915050565b600080600060608486031215620002fd57620002fc62000277565b5b60006200030d86828701620002ca565b93505060206200032086828701620002ca565b92505060406200033386828701620002ca565b9150509250925092565b62000348816200029c565b82525050565b60006020820190506200036560008301846200033d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b6155fa80620003aa6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634c871bda1161008c5780637362782611610066578063736278261461020e57806390fdac8f1461023e578063a87090f01461026e578063e8de3b591461029e576100cf565b80634c871bda146101a657806361e7f070146101d65780636a56cee9146101f2576100cf565b806303ad76d5146100d45780631bd2eeee146101045780631eaa6779146101205780631f70a2841461013c5780632f69326b146101585780634c2ff11114610188575b600080fd5b6100ee60048036038101906100e9919061358f565b6102ce565b6040516100fb9190613767565b60405180910390f35b61011e6004803603810190610119919061358f565b610431565b005b61013a60048036038101906101359190613c08565b610c6b565b005b61015660048036038101906101519190613d7c565b610d53565b005b610172600480360381019061016d9190613df7565b6118a0565b60405161017f9190613f50565b60405180910390f35b610190611a83565b60405161019d9190614021565b60405180910390f35b6101c060048036038101906101bb9190614043565b611b11565b6040516101cd919061411f565b60405180910390f35b6101f060048036038101906101eb919061358f565b611ecf565b005b61020c60048036038101906102079190614141565b6123ef565b005b6102286004803603810190610223919061358f565b612523565b6040516102359190614190565b60405180910390f35b6102586004803603810190610253919061358f565b612553565b6040516102659190614190565b60405180910390f35b61028860048036038101906102839190614043565b612597565b604051610295919061411f565b60405180910390f35b6102b860048036038101906102b39190614043565b612954565b6040516102c591906142fe565b60405180910390f35b6102d66132ef565b600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461035b9061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546103879061434f565b80156103d45780601f106103a9576101008083540402835291602001916103d4565b820191906000526020600020905b8154815290600101906020018083116103b757829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b815260040161048e9190614190565b602060405180830381865afa1580156104ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cf9190614395565b90506000600a6000848152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105589061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546105849061434f565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050600060086000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008360a0015181526020019081526020016000206001015490506000600a6000868152602001908152602001600020600601549050600082826106b591906143f1565b9050600082116106fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f190614482565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161075691906144b1565b602060405180830381865afa158015610773573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079791906144e1565b10156107d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf9061455a565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161083692919061457a565b602060405180830381865afa158015610853573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087791906144e1565b10156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af906145ef565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb3c7d918760075486610905919061460f565b6040518363ffffffff1660e01b8152600401610922929190614651565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0d7d1188786600001518760200151886040015189606001518a608001518b60a00151600860008e6000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008e60a001518152602001908152602001600020600101546040518963ffffffff1660e01b8152600401610a339897969594939291906146b3565b600060405180830381600087803b158015610a4d57600080fd5b505af1158015610a61573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060075485610ab3919061460f565b6040518463ffffffff1660e01b8152600401610ad193929190614738565b6020604051808303816000875af1158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b149190614784565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600a600089815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660075485610b98919061460f565b6040518363ffffffff1660e01b8152600401610bb59291906147b1565b6020604051808303816000875af1158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190614784565b506001600a600088815260200190815260200160002060070160006101000a81548160ff0219169083151502179055507f72396be48787e0a7d1ac8ca616587ab73864c662e65244c3a233c251d0380826868287604051610c5b939291906147da565b60405180910390a1505050505050565b610c753389612e05565b610c7f3388612e59565b610c8a338787612eaf565b610c943385612f42565b610ca13389858585613014565b6009339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f148366cee1989b474bc7f14a5ac3ace2ddabd9c95b55d19c178c54503c9ea88a8888888888888888604051610d4198979695949392919061498c565b60405180910390a15050505050505050565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001610d9e85612553565b60078110610daf57610dae614a33565b5b602091828204019190069054906101000a900460ff16610e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfb90614ad4565b60405180910390fd5b610e0f8585856130a7565b610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4590614b66565b60405180910390fd5b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206001015403610ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede90614bd2565b60405180910390fd5b828410610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090614c3e565b60405180910390fd5b834210610f6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6290614caa565b60405180910390fd5b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600083815260200190815260200160002060010154905060075481610fd4919061460f565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161102f91906144b1565b602060405180830381865afa15801561104c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107091906144e1565b10156110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a89061455a565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161110f92919061457a565b602060405180830381865afa15801561112c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115091906144e1565b1015611191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611188906145ef565b60405180910390fd5b61126d6040518060400160405280600981526020017f616c6c6f77616e63650000000000000000000000000000000000000000000000815250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161122792919061457a565b602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126891906144e1565b613167565b6112b96040518060400160405280600981526020017f63616e63656c4665650000000000000000000000000000000000000000000000815250600754836112b4919061460f565b613167565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060075485611307919061460f565b6040518463ffffffff1660e01b815260040161132593929190614738565b6020604051808303816000875af1158015611344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113689190614784565b506113a76040518060400160405280600481526020017f646f6e6500000000000000000000000000000000000000000000000000000000815250613203565b60006113b3600061329c565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660075485611424919061460f565b6040518363ffffffff1660e01b81526004016114419291906147b1565b6020604051808303816000875af1158015611460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114849190614784565b5060075482611493919061460f565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040161151292919061457a565b602060405180830381865afa15801561152f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155391906144e1565b1015611594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158b90614d16565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352a4aace82600754856115e1919061460f565b6040518363ffffffff1660e01b81526004016115fe929190614651565b600060405180830381600087803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b5050505086600a600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600a600083815260200190815260200160002060010190816116e99190614f0d565b5085600a60008381526020019081526020016000206002018190555084600a60008381526020019081526020016000206003018190555083600a60008381526020019081526020016000206004018190555082600a60008381526020019081526020016000206005018190555061176060006132aa565b6000600860008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635bc1fae989836004018a8a8a8a8860030160008d8152602001908152602001600020600101546040518863ffffffff1660e01b81526004016118259796959493929190615079565b600060405180830381600087803b15801561183f57600080fd5b505af1158015611853573d6000803e3d6000fd5b505050507f0bf215d1ca6fcc964f5accc4fcdd0355e9d5e64262b0a3e6dee664e47c50ac63888888888860405161188e9594939291906150ef565b60405180910390a15050505050505050565b6118a861334c565b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206040518060600160405290816000820180546119169061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546119429061434f565b801561198f5780601f106119645761010080835404028352916020019161198f565b820191906000526020600020905b81548152906001019060200180831161197257829003601f168201915b505050505081526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020016000905b82821015611a735783829060005260206000200180546119e69061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054611a129061434f565b8015611a5f5780601f10611a3457610100808354040283529160200191611a5f565b820191906000526020600020905b815481529060010190602001808311611a4257829003601f168201915b5050505050815260200190600101906119c7565b5050505081525050905092915050565b60606009805480602002602001604051908101604052809291908181526020018280548015611b0757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abd575b5050505050905090565b60606000611b1f600061329c565b905060008167ffffffffffffffff811115611b3d57611b3c613793565b5b604051908082528060200260200182016040528015611b6b5781602001602082028036833780820191505090505b5090506000805b83811015611e1c576000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611c019061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2d9061434f565b8015611c7a5780601f10611c4f57610100808354040283529160200191611c7a565b820191906000526020600020905b815481529060010190602001808311611c5d57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505090508673ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16148015611d1357508060e00151155b8015611d305750426002548260600151611d2d9190615142565b11155b8015611dd45750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634f558e79836040518263ffffffff1660e01b8152600401611d929190614190565b602060405180830381865afa158015611daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd39190614784565b5b15611e085781848481518110611ded57611dec614a33565b5b6020026020010181815250508280611e0490615176565b9350505b508080611e1490615176565b915050611b72565b5060008167ffffffffffffffff811115611e3957611e38613793565b5b604051908082528060200260200182016040528015611e675781602001602082028036833780820191505090505b50905060005b82811015611ec257838181518110611e8857611e87614a33565b5b6020026020010151828281518110611ea357611ea2614a33565b5b6020026020010181815250508080611eba90615176565b915050611e6d565b5080945050505050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6a9061520a565b60405180910390fd5b600a600082815260200190815260200160002060070160009054906101000a900460ff1615611fd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fce9061529c565b60405180910390fd5b4261a8c0600a600084815260200190815260200160002060030154611ffc9190615142565b1061203c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120339061532e565b60405180910390fd5b6000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546120c39061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546120ef9061434f565b801561213c5780601f106121115761010080835404028352916020019161213c565b820191906000526020600020905b81548152906001019060200180831161211f57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050600060086000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008360a001518152602001908152602001600020600101549050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb3c7d9184836040518363ffffffff1660e01b8152600401612254929190614651565b600060405180830381600087803b15801561226e57600080fd5b505af1158015612282573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016123199291906147b1565b6020604051808303816000875af1158015612338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235c9190614784565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663be085260846040518263ffffffff1660e01b81526004016123b89190614190565b600060405180830381600087803b1580156123d257600080fd5b505af11580156123e6573d6000803e3d6000fd5b50505050505050565b600a600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161248a906153c0565b60405180910390fd5b80600a6000848152602001908152602001600020600601819055507fe4ab10d0c243f7db9d59452abbc1366d244c1c403b77e29ce6a7bc6a3492d7c38282600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051612517939291906147da565b60405180910390a15050565b6000806001548361253491906143f1565b905060006201518082612547919061540f565b90508092505050919050565b6000806001548361256491906143f1565b9050600062093a8082612577919061540f565b90506000620151808261258a9190615440565b9050809350505050919050565b606060006125a5600061329c565b905060008167ffffffffffffffff8111156125c3576125c2613793565b5b6040519080825280602002602001820160405280156125f15781602001602082028036833780820191505090505b5090506000805b838110156128a1576000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546126879061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546126b39061434f565b80156127005780601f106126d557610100808354040283529160200191612700565b820191906000526020600020905b8154815290600101906020018083116126e357829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505090508673ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614801561279957508060e00151155b80156127b557504260025482606001516127b39190615142565b115b80156128595750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634f558e79836040518263ffffffff1660e01b81526004016128179190614190565b602060405180830381865afa158015612834573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128589190614784565b5b1561288d578184848151811061287257612871614a33565b5b602002602001018181525050828061288990615176565b9350505b50808061289990615176565b9150506125f8565b5060008167ffffffffffffffff8111156128be576128bd613793565b5b6040519080825280602002602001820160405280156128ec5781602001602082028036833780820191505090505b50905060005b828110156129475783818151811061290d5761290c614a33565b5b602002602001015182828151811061292857612927614a33565b5b602002602001018181525050808061293f90615176565b9150506128f2565b5080945050505050919050565b61295c61336d565b6040518060e00160405280600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600780602002604051908101604052809291908260078015612a05576020028201916000905b82829054906101000a900460ff161515815260200190600101906020826000010492830192600103820291508084116129cf5790505b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201548152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018054612aec9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612b189061434f565b8015612b655780601f10612b3a57610100808354040283529160200191612b65565b820191906000526020600020905b815481529060010190602001808311612b4857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018054612bbc9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612be89061434f565b8015612c355780601f10612c0a57610100808354040283529160200191612c35565b820191906000526020600020905b815481529060010190602001808311612c1857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206006018054612c8c9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612cb89061434f565b8015612d055780601f10612cda57610100808354040283529160200191612d05565b820191906000526020600020905b815481529060010190602001808311612ce857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206007018054612d5c9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612d889061434f565b8015612dd55780601f10612daa57610100808354040283529160200191612dd5565b820191906000526020600020905b815481529060010190602001808311612db857829003601f168201915b50505050508152509050919050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b80600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019081612e549190615471565b505050565b80600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001906007612eaa9291906133b0565b505050565b81600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550505050565b60005b815181101561300f57818181518110612f6157612f60614a33565b5b6020026020010151600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206000820151816000019081612fd19190615471565b50602082015181600101556040820151816002019080519060200190612ff8929190613449565b50905050808061300790615176565b915050612f45565b505050565b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050848160040190816130689190615471565b508381600501908161307a9190615471565b508281600601908161308c9190615471565b508181600701908161309e9190615471565b50505050505050565b6000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546130f584612523565b1015801561314d5750600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015461314a83612523565b11155b1561315b5760019050613160565b600090505b9392505050565b6131ff828260405160240161317d929190615543565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506132c0565b5050565b613299816040516024016132179190615573565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506132c0565b50565b600081600001549050919050565b6001816000016000828254019250508190555050565b6132d7816132cf612de46132da565b63ffffffff16565b50565b6132e5819050919050565b6132ed615595565b565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60405180606001604052806060815260200160008152602001606081525090565b6040518060e001604052806133806134a2565b81526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b826007601f016020900481019282156134385791602002820160005b8382111561340957835183826101000a81548160ff02191690831515021790555092602001926001016020816000010492830192600103026133cc565b80156134365782816101000a81549060ff0219169055600101602081600001049283019260010302613409565b505b50905061344591906134c4565b5090565b828054828255906000526020600020908101928215613491579160200282015b828111156134905782518290816134809190615471565b5091602001919060010190613469565b5b50905061349e91906134e1565b5090565b6040518060e00160405280600790602082028036833780820191505090505090565b5b808211156134dd5760008160009055506001016134c5565b5090565b5b8082111561350157600081816134f89190613505565b506001016134e2565b5090565b5080546135119061434f565b6000825580601f106135235750613542565b601f01602090049060005260206000209081019061354191906134c4565b5b50565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61356c81613559565b811461357757600080fd5b50565b60008135905061358981613563565b92915050565b6000602082840312156135a5576135a461354f565b5b60006135b38482850161357a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135e7826135bc565b9050919050565b6135f7816135dc565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561363757808201518184015260208101905061361c565b60008484015250505050565b6000601f19601f8301169050919050565b600061365f826135fd565b6136698185613608565b9350613679818560208601613619565b61368281613643565b840191505092915050565b61369681613559565b82525050565b60008115159050919050565b6136b18161369c565b82525050565b6000610100830160008301516136d060008601826135ee565b50602083015184820360208601526136e88282613654565b91505060408301516136fd604086018261368d565b506060830151613710606086018261368d565b506080830151613723608086018261368d565b5060a083015161373660a086018261368d565b5060c083015161374960c086018261368d565b5060e083015161375c60e08601826136a8565b508091505092915050565b6000602082019050818103600083015261378181846136b7565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6137cb82613643565b810181811067ffffffffffffffff821117156137ea576137e9613793565b5b80604052505050565b60006137fd613545565b905061380982826137c2565b919050565b600067ffffffffffffffff82111561382957613828613793565b5b61383282613643565b9050602081019050919050565b82818337600083830152505050565b600061386161385c8461380e565b6137f3565b90508281526020810184848401111561387d5761387c61378e565b5b61388884828561383f565b509392505050565b600082601f8301126138a5576138a4613789565b5b81356138b584826020860161384e565b91505092915050565b600067ffffffffffffffff8211156138d9576138d8613793565b5b602082029050919050565b600080fd5b6138f28161369c565b81146138fd57600080fd5b50565b60008135905061390f816138e9565b92915050565b6000613928613923846138be565b6137f3565b90508060208402830185811115613942576139416138e4565b5b835b8181101561396b57806139578882613900565b845260208401935050602081019050613944565b5050509392505050565b600082601f83011261398a57613989613789565b5b6007613997848285613915565b91505092915050565b600067ffffffffffffffff8211156139bb576139ba613793565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff8211156139f1576139f0613793565b5b602082029050602081019050919050565b6000613a15613a10846139d6565b6137f3565b90508083825260208201905060208402830185811115613a3857613a376138e4565b5b835b81811015613a7f57803567ffffffffffffffff811115613a5d57613a5c613789565b5b808601613a6a8982613890565b85526020850194505050602081019050613a3a565b5050509392505050565b600082601f830112613a9e57613a9d613789565b5b8135613aae848260208601613a02565b91505092915050565b600060608284031215613acd57613acc6139cc565b5b613ad760606137f3565b9050600082013567ffffffffffffffff811115613af757613af66139d1565b5b613b0384828501613890565b6000830152506020613b178482850161357a565b602083015250604082013567ffffffffffffffff811115613b3b57613b3a6139d1565b5b613b4784828501613a89565b60408301525092915050565b6000613b66613b61846139a0565b6137f3565b90508083825260208201905060208402830185811115613b8957613b886138e4565b5b835b81811015613bd057803567ffffffffffffffff811115613bae57613bad613789565b5b808601613bbb8982613ab7565b85526020850194505050602081019050613b8b565b5050509392505050565b600082601f830112613bef57613bee613789565b5b8135613bff848260208601613b53565b91505092915050565b6000806000806000806000806101c0898b031215613c2957613c2861354f565b5b600089013567ffffffffffffffff811115613c4757613c46613554565b5b613c538b828c01613890565b9850506020613c648b828c01613975565b975050610100613c768b828c0161357a565b965050610120613c888b828c0161357a565b95505061014089013567ffffffffffffffff811115613caa57613ca9613554565b5b613cb68b828c01613bda565b94505061016089013567ffffffffffffffff811115613cd857613cd7613554565b5b613ce48b828c01613890565b93505061018089013567ffffffffffffffff811115613d0657613d05613554565b5b613d128b828c01613890565b9250506101a089013567ffffffffffffffff811115613d3457613d33613554565b5b613d408b828c01613890565b9150509295985092959890939650565b613d59816135dc565b8114613d6457600080fd5b50565b600081359050613d7681613d50565b92915050565b600080600080600060a08688031215613d9857613d9761354f565b5b6000613da688828901613d67565b9550506020613db78882890161357a565b9450506040613dc88882890161357a565b9350506060613dd98882890161357a565b9250506080613dea8882890161357a565b9150509295509295909350565b60008060408385031215613e0e57613e0d61354f565b5b6000613e1c85828601613d67565b9250506020613e2d8582860161357a565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000613e6f8383613654565b905092915050565b6000602082019050919050565b6000613e8f82613e37565b613e998185613e42565b935083602082028501613eab85613e53565b8060005b85811015613ee75784840389528151613ec88582613e63565b9450613ed383613e77565b925060208a01995050600181019050613eaf565b50829750879550505050505092915050565b60006060830160008301518482036000860152613f168282613654565b9150506020830151613f2b602086018261368d565b5060408301518482036040860152613f438282613e84565b9150508091505092915050565b60006020820190508181036000830152613f6a8184613ef9565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000613faa83836135ee565b60208301905092915050565b6000602082019050919050565b6000613fce82613f72565b613fd88185613f7d565b9350613fe383613f8e565b8060005b83811015614014578151613ffb8882613f9e565b975061400683613fb6565b925050600181019050613fe7565b5085935050505092915050565b6000602082019050818103600083015261403b8184613fc3565b905092915050565b6000602082840312156140595761405861354f565b5b600061406784828501613d67565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006140a8838361368d565b60208301905092915050565b6000602082019050919050565b60006140cc82614070565b6140d6818561407b565b93506140e18361408c565b8060005b838110156141125781516140f9888261409c565b9750614104836140b4565b9250506001810190506140e5565b5085935050505092915050565b6000602082019050818103600083015261413981846140c1565b905092915050565b600080604083850312156141585761415761354f565b5b60006141668582860161357a565b92505060206141778582860161357a565b9150509250929050565b61418a81613559565b82525050565b60006020820190506141a56000830184614181565b92915050565b600060079050919050565b600081905092915050565b6000819050919050565b60006141d783836136a8565b60208301905092915050565b6000602082019050919050565b6141f9816141ab565b61420381846141b6565b925061420e826141c1565b8060005b8381101561423f57815161422687826141cb565b9650614231836141e3565b925050600181019050614212565b505050505050565b60006101a08301600083015161426060008601826141f0565b50602083015161427360e086018261368d565b50604083015161428761010086018261368d565b5060608301518482036101208601526142a08282613654565b91505060808301518482036101408601526142bb8282613654565b91505060a08301518482036101608601526142d68282613654565b91505060c08301518482036101808601526142f18282613654565b9150508091505092915050565b600060208201905081810360008301526143188184614247565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061436757607f821691505b60208210810361437a57614379614320565b5b50919050565b60008151905061438f81613d50565b92915050565b6000602082840312156143ab576143aa61354f565b5b60006143b984828501614380565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006143fc82613559565b915061440783613559565b925082820390508181111561441f5761441e6143c2565b5b92915050565b600082825260208201905092915050565b7f7061796d656e74416d6f756e74206973206e6f74207365740000000000000000600082015250565b600061446c601883614425565b915061447782614436565b602082019050919050565b6000602082019050818103600083015261449b8161445f565b9050919050565b6144ab816135dc565b82525050565b60006020820190506144c660008301846144a2565b92915050565b6000815190506144db81613563565b92915050565b6000602082840312156144f7576144f661354f565b5b6000614505848285016144cc565b91505092915050565b7f496e73756666696369656e7420555344432042616c616e636500000000000000600082015250565b6000614544601983614425565b915061454f8261450e565b602082019050919050565b6000602082019050818103600083015261457381614537565b9050919050565b600060408201905061458f60008301856144a2565b61459c60208301846144a2565b9392505050565b7f496e73756666696369656e74205553444320416c6c6f77616e63650000000000600082015250565b60006145d9601b83614425565b91506145e4826145a3565b602082019050919050565b60006020820190508181036000830152614608816145cc565b9050919050565b600061461a82613559565b915061462583613559565b925082820261463381613559565b9150828204841483151761464a576146496143c2565b5b5092915050565b60006040820190506146666000830185614181565b6146736020830184614181565b9392505050565b6000614685826135fd565b61468f8185614425565b935061469f818560208601613619565b6146a881613643565b840191505092915050565b6000610100820190506146c9600083018b614181565b6146d6602083018a6144a2565b81810360408301526146e8818961467a565b90506146f76060830188614181565b6147046080830187614181565b61471160a0830186614181565b61471e60c0830185614181565b61472b60e0830184614181565b9998505050505050505050565b600060608201905061474d60008301866144a2565b61475a60208301856144a2565b6147676040830184614181565b949350505050565b60008151905061477e816138e9565b92915050565b60006020828403121561479a5761479961354f565b5b60006147a88482850161476f565b91505092915050565b60006040820190506147c660008301856144a2565b6147d36020830184614181565b9392505050565b60006060820190506147ef6000830186614181565b6147fc6020830185614181565b61480960408301846144a2565b949350505050565b600081905092915050565b614825816141ab565b61482f8184614811565b925061483a826141c1565b8060005b8381101561486b57815161485287826141cb565b965061485d836141e3565b92505060018101905061483e565b505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060608301600083015184820360008601526148bc8282613654565b91505060208301516148d1602086018261368d565b50604083015184820360408601526148e98282613e84565b9150508091505092915050565b6000614902838361489f565b905092915050565b6000602082019050919050565b600061492282614873565b61492c818561487e565b93508360208202850161493e8561488f565b8060005b8581101561497a578484038952815161495b85826148f6565b94506149668361490a565b925060208a01995050600181019050614942565b50829750879550505050505092915050565b60006101c08201905081810360008301526149a7818b61467a565b90506149b6602083018a61481c565b6149c4610100830189614181565b6149d2610120830188614181565b8181036101408301526149e58187614917565b90508181036101608301526149fa818661467a565b9050818103610180830152614a0f818561467a565b90508181036101a0830152614a24818461467a565b90509998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f53686f7020697320636c6f736564206f6e20746865207265736572766174696f60008201527f6e20646174650000000000000000000000000000000000000000000000000000602082015250565b6000614abe602683614425565b9150614ac982614a62565b604082019050919050565b60006020820190508181036000830152614aed81614ab1565b9050919050565b7f53686f7020697320636c6f736564206f6e20746865207265736572766174696f60008201527f6e2074696d650000000000000000000000000000000000000000000000000000602082015250565b6000614b50602683614425565b9150614b5b82614af4565b604082019050919050565b60006020820190508181036000830152614b7f81614b43565b9050919050565b7f636f757273654964206973206e6f742065786973747300000000000000000000600082015250565b6000614bbc601683614425565b9150614bc782614b86565b602082019050919050565b60006020820190508181036000830152614beb81614baf565b9050919050565b7f7374617274696e6754696d65203e20656e64696e6754696d6500000000000000600082015250565b6000614c28601983614425565b9150614c3382614bf2565b602082019050919050565b60006020820190508181036000830152614c5781614c1b565b9050919050565b7f7374617274696e6754696d652069732070617374000000000000000000000000600082015250565b6000614c94601483614425565b9150614c9f82614c5e565b602082019050919050565b60006020820190508181036000830152614cc381614c87565b9050919050565b7f496e73756666696369656e74205553444320416c6c6f77616e63652041415645600082015250565b6000614d00602083614425565b9150614d0b82614cca565b602082019050919050565b60006020820190508181036000830152614d2f81614cf3565b9050919050565b600081549050614d458161434f565b9050919050565b60008190508160005260206000209050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302614dc37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614d86565b614dcd8683614d86565b95508019841693508086168417925050509392505050565b6000819050919050565b6000614e0a614e05614e0084613559565b614de5565b613559565b9050919050565b6000819050919050565b614e2483614def565b614e38614e3082614e11565b848454614d93565b825550505050565b600090565b614e4d614e40565b614e58818484614e1b565b505050565b5b81811015614e7c57614e71600082614e45565b600181019050614e5e565b5050565b601f821115614ec157614e9281614d4c565b614e9b84614d76565b81016020851015614eaa578190505b614ebe614eb685614d76565b830182614e5d565b50505b505050565b600082821c905092915050565b6000614ee460001984600802614ec6565b1980831691505092915050565b6000614efd8383614ed3565b9150826002028217905092915050565b818103614f1b575050614ff3565b614f2482614d36565b67ffffffffffffffff811115614f3d57614f3c613793565b5b614f47825461434f565b614f52828285614e80565b6000601f831160018114614f815760008415614f6f578287015490505b614f798582614ef1565b865550614fec565b601f198416614f8f87614d61565b9650614f9a86614d4c565b60005b82811015614fc257848901548255600182019150600185019450602081019050614f9d565b86831015614fdf5784890154614fdb601f891682614ed3565b8355505b6001600288020188555050505b5050505050505b565b600081546150028161434f565b61500c8186614425565b94506001821660008114615027576001811461503d57615070565b60ff198316865281151560200286019350615070565b61504685614d4c565b60005b8381101561506857815481890152600182019150602081019050615049565b808801955050505b50505092915050565b600060e08201905061508e600083018a6144a2565b81810360208301526150a08189614ff5565b90506150af6040830188614181565b6150bc6060830187614181565b6150c96080830186614181565b6150d660a0830185614181565b6150e360c0830184614181565b98975050505050505050565b600060a08201905061510460008301886144a2565b6151116020830187614181565b61511e6040830186614181565b61512b6060830185614181565b6151386080830184614181565b9695505050505050565b600061514d82613559565b915061515883613559565b92508282019050808211156151705761516f6143c2565b5b92915050565b600061518182613559565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036151b3576151b26143c2565b5b600182019050919050565b7f6d73672e73656e646572206973206e6f742073686f70206f776e657200000000600082015250565b60006151f4601c83614425565b91506151ff826151be565b602082019050919050565b60006020820190508181036000830152615223816151e7565b9050919050565b7f546865207265736572766174696f6e20697320616c726561647920636865636b60008201527f6564206f75740000000000000000000000000000000000000000000000000000602082015250565b6000615286602683614425565b91506152918261522a565b604082019050919050565b600060208201905081810360008301526152b581615279565b9050919050565b7f43616e63656c20666565207769746864726177616c207374617274732072657360008201527f6572766174696f6e456e6454696d65202b20302e352064617973000000000000602082015250565b6000615318603a83614425565b9150615323826152bc565b604082019050919050565b600060208201905081810360008301526153478161530b565b9050919050565b7f6d73672e73656e6465722073686f756c64206265207468652073686f70206f7760008201527f6e65720000000000000000000000000000000000000000000000000000000000602082015250565b60006153aa602383614425565b91506153b58261534e565b604082019050919050565b600060208201905081810360008301526153d98161539d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061541a82613559565b915061542583613559565b925082615435576154346153e0565b5b828206905092915050565b600061544b82613559565b915061545683613559565b925082615466576154656153e0565b5b828204905092915050565b61547a826135fd565b67ffffffffffffffff81111561549357615492613793565b5b61549d825461434f565b6154a8828285614e80565b600060209050601f8311600181146154db57600084156154c9578287015190505b6154d38582614ef1565b86555061553b565b601f1984166154e986614d4c565b60005b82811015615511578489015182556001820191506020850194506020810190506154ec565b8683101561552e578489015161552a601f891682614ed3565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261555d818561467a565b905061556c6020830184614181565b9392505050565b6000602082019050818103600083015261558d818461467a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212209d583e4a5fbd5784b2cb68bb36a9e06a6fdef631488faa3a5e23fc0d4c1c72f064736f6c63430008130033",
        deployedBytecode:
            "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634c871bda1161008c5780637362782611610066578063736278261461020e57806390fdac8f1461023e578063a87090f01461026e578063e8de3b591461029e576100cf565b80634c871bda146101a657806361e7f070146101d65780636a56cee9146101f2576100cf565b806303ad76d5146100d45780631bd2eeee146101045780631eaa6779146101205780631f70a2841461013c5780632f69326b146101585780634c2ff11114610188575b600080fd5b6100ee60048036038101906100e9919061358f565b6102ce565b6040516100fb9190613767565b60405180910390f35b61011e6004803603810190610119919061358f565b610431565b005b61013a60048036038101906101359190613c08565b610c6b565b005b61015660048036038101906101519190613d7c565b610d53565b005b610172600480360381019061016d9190613df7565b6118a0565b60405161017f9190613f50565b60405180910390f35b610190611a83565b60405161019d9190614021565b60405180910390f35b6101c060048036038101906101bb9190614043565b611b11565b6040516101cd919061411f565b60405180910390f35b6101f060048036038101906101eb919061358f565b611ecf565b005b61020c60048036038101906102079190614141565b6123ef565b005b6102286004803603810190610223919061358f565b612523565b6040516102359190614190565b60405180910390f35b6102586004803603810190610253919061358f565b612553565b6040516102659190614190565b60405180910390f35b61028860048036038101906102839190614043565b612597565b604051610295919061411f565b60405180910390f35b6102b860048036038101906102b39190614043565b612954565b6040516102c591906142fe565b60405180910390f35b6102d66132ef565b600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461035b9061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546103879061434f565b80156103d45780601f106103a9576101008083540402835291602001916103d4565b820191906000526020600020905b8154815290600101906020018083116103b757829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b815260040161048e9190614190565b602060405180830381865afa1580156104ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cf9190614395565b90506000600a6000848152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105589061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546105849061434f565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050600060086000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008360a0015181526020019081526020016000206001015490506000600a6000868152602001908152602001600020600601549050600082826106b591906143f1565b9050600082116106fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f190614482565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161075691906144b1565b602060405180830381865afa158015610773573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079791906144e1565b10156107d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf9061455a565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161083692919061457a565b602060405180830381865afa158015610853573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087791906144e1565b10156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af906145ef565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb3c7d918760075486610905919061460f565b6040518363ffffffff1660e01b8152600401610922929190614651565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0d7d1188786600001518760200151886040015189606001518a608001518b60a00151600860008e6000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008e60a001518152602001908152602001600020600101546040518963ffffffff1660e01b8152600401610a339897969594939291906146b3565b600060405180830381600087803b158015610a4d57600080fd5b505af1158015610a61573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060075485610ab3919061460f565b6040518463ffffffff1660e01b8152600401610ad193929190614738565b6020604051808303816000875af1158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b149190614784565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600a600089815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660075485610b98919061460f565b6040518363ffffffff1660e01b8152600401610bb59291906147b1565b6020604051808303816000875af1158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190614784565b506001600a600088815260200190815260200160002060070160006101000a81548160ff0219169083151502179055507f72396be48787e0a7d1ac8ca616587ab73864c662e65244c3a233c251d0380826868287604051610c5b939291906147da565b60405180910390a1505050505050565b610c753389612e05565b610c7f3388612e59565b610c8a338787612eaf565b610c943385612f42565b610ca13389858585613014565b6009339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f148366cee1989b474bc7f14a5ac3ace2ddabd9c95b55d19c178c54503c9ea88a8888888888888888604051610d4198979695949392919061498c565b60405180910390a15050505050505050565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001610d9e85612553565b60078110610daf57610dae614a33565b5b602091828204019190069054906101000a900460ff16610e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfb90614ad4565b60405180910390fd5b610e0f8585856130a7565b610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4590614b66565b60405180910390fd5b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206001015403610ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede90614bd2565b60405180910390fd5b828410610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090614c3e565b60405180910390fd5b834210610f6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6290614caa565b60405180910390fd5b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600083815260200190815260200160002060010154905060075481610fd4919061460f565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161102f91906144b1565b602060405180830381865afa15801561104c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107091906144e1565b10156110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a89061455a565b60405180910390fd5b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161110f92919061457a565b602060405180830381865afa15801561112c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115091906144e1565b1015611191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611188906145ef565b60405180910390fd5b61126d6040518060400160405280600981526020017f616c6c6f77616e63650000000000000000000000000000000000000000000000815250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161122792919061457a565b602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126891906144e1565b613167565b6112b96040518060400160405280600981526020017f63616e63656c4665650000000000000000000000000000000000000000000000815250600754836112b4919061460f565b613167565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060075485611307919061460f565b6040518463ffffffff1660e01b815260040161132593929190614738565b6020604051808303816000875af1158015611344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113689190614784565b506113a76040518060400160405280600481526020017f646f6e6500000000000000000000000000000000000000000000000000000000815250613203565b60006113b3600061329c565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660075485611424919061460f565b6040518363ffffffff1660e01b81526004016114419291906147b1565b6020604051808303816000875af1158015611460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114849190614784565b5060075482611493919061460f565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040161151292919061457a565b602060405180830381865afa15801561152f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155391906144e1565b1015611594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158b90614d16565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352a4aace82600754856115e1919061460f565b6040518363ffffffff1660e01b81526004016115fe929190614651565b600060405180830381600087803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b5050505086600a600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600a600083815260200190815260200160002060010190816116e99190614f0d565b5085600a60008381526020019081526020016000206002018190555084600a60008381526020019081526020016000206003018190555083600a60008381526020019081526020016000206004018190555082600a60008381526020019081526020016000206005018190555061176060006132aa565b6000600860008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635bc1fae989836004018a8a8a8a8860030160008d8152602001908152602001600020600101546040518863ffffffff1660e01b81526004016118259796959493929190615079565b600060405180830381600087803b15801561183f57600080fd5b505af1158015611853573d6000803e3d6000fd5b505050507f0bf215d1ca6fcc964f5accc4fcdd0355e9d5e64262b0a3e6dee664e47c50ac63888888888860405161188e9594939291906150ef565b60405180910390a15050505050505050565b6118a861334c565b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206040518060600160405290816000820180546119169061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546119429061434f565b801561198f5780601f106119645761010080835404028352916020019161198f565b820191906000526020600020905b81548152906001019060200180831161197257829003601f168201915b505050505081526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020016000905b82821015611a735783829060005260206000200180546119e69061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054611a129061434f565b8015611a5f5780601f10611a3457610100808354040283529160200191611a5f565b820191906000526020600020905b815481529060010190602001808311611a4257829003601f168201915b5050505050815260200190600101906119c7565b5050505081525050905092915050565b60606009805480602002602001604051908101604052809291908181526020018280548015611b0757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abd575b5050505050905090565b60606000611b1f600061329c565b905060008167ffffffffffffffff811115611b3d57611b3c613793565b5b604051908082528060200260200182016040528015611b6b5781602001602082028036833780820191505090505b5090506000805b83811015611e1c576000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611c019061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2d9061434f565b8015611c7a5780601f10611c4f57610100808354040283529160200191611c7a565b820191906000526020600020905b815481529060010190602001808311611c5d57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505090508673ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16148015611d1357508060e00151155b8015611d305750426002548260600151611d2d9190615142565b11155b8015611dd45750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634f558e79836040518263ffffffff1660e01b8152600401611d929190614190565b602060405180830381865afa158015611daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd39190614784565b5b15611e085781848481518110611ded57611dec614a33565b5b6020026020010181815250508280611e0490615176565b9350505b508080611e1490615176565b915050611b72565b5060008167ffffffffffffffff811115611e3957611e38613793565b5b604051908082528060200260200182016040528015611e675781602001602082028036833780820191505090505b50905060005b82811015611ec257838181518110611e8857611e87614a33565b5b6020026020010151828281518110611ea357611ea2614a33565b5b6020026020010181815250508080611eba90615176565b915050611e6d565b5080945050505050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6a9061520a565b60405180910390fd5b600a600082815260200190815260200160002060070160009054906101000a900460ff1615611fd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fce9061529c565b60405180910390fd5b4261a8c0600a600084815260200190815260200160002060030154611ffc9190615142565b1061203c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120339061532e565b60405180910390fd5b6000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546120c39061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546120ef9061434f565b801561213c5780601f106121115761010080835404028352916020019161213c565b820191906000526020600020905b81548152906001019060200180831161211f57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050600060086000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008360a001518152602001908152602001600020600101549050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb3c7d9184836040518363ffffffff1660e01b8152600401612254929190614651565b600060405180830381600087803b15801561226e57600080fd5b505af1158015612282573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016123199291906147b1565b6020604051808303816000875af1158015612338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235c9190614784565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663be085260846040518263ffffffff1660e01b81526004016123b89190614190565b600060405180830381600087803b1580156123d257600080fd5b505af11580156123e6573d6000803e3d6000fd5b50505050505050565b600a600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161248a906153c0565b60405180910390fd5b80600a6000848152602001908152602001600020600601819055507fe4ab10d0c243f7db9d59452abbc1366d244c1c403b77e29ce6a7bc6a3492d7c38282600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051612517939291906147da565b60405180910390a15050565b6000806001548361253491906143f1565b905060006201518082612547919061540f565b90508092505050919050565b6000806001548361256491906143f1565b9050600062093a8082612577919061540f565b90506000620151808261258a9190615440565b9050809350505050919050565b606060006125a5600061329c565b905060008167ffffffffffffffff8111156125c3576125c2613793565b5b6040519080825280602002602001820160405280156125f15781602001602082028036833780820191505090505b5090506000805b838110156128a1576000600a6000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546126879061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546126b39061434f565b80156127005780601f106126d557610100808354040283529160200191612700565b820191906000526020600020905b8154815290600101906020018083116126e357829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505090508673ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614801561279957508060e00151155b80156127b557504260025482606001516127b39190615142565b115b80156128595750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634f558e79836040518263ffffffff1660e01b81526004016128179190614190565b602060405180830381865afa158015612834573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128589190614784565b5b1561288d578184848151811061287257612871614a33565b5b602002602001018181525050828061288990615176565b9350505b50808061289990615176565b9150506125f8565b5060008167ffffffffffffffff8111156128be576128bd613793565b5b6040519080825280602002602001820160405280156128ec5781602001602082028036833780820191505090505b50905060005b828110156129475783818151811061290d5761290c614a33565b5b602002602001015182828151811061292857612927614a33565b5b602002602001018181525050808061293f90615176565b9150506128f2565b5080945050505050919050565b61295c61336d565b6040518060e00160405280600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600780602002604051908101604052809291908260078015612a05576020028201916000905b82829054906101000a900460ff161515815260200190600101906020826000010492830192600103820291508084116129cf5790505b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201548152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018054612aec9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612b189061434f565b8015612b655780601f10612b3a57610100808354040283529160200191612b65565b820191906000526020600020905b815481529060010190602001808311612b4857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018054612bbc9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612be89061434f565b8015612c355780601f10612c0a57610100808354040283529160200191612c35565b820191906000526020600020905b815481529060010190602001808311612c1857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206006018054612c8c9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612cb89061434f565b8015612d055780601f10612cda57610100808354040283529160200191612d05565b820191906000526020600020905b815481529060010190602001808311612ce857829003601f168201915b50505050508152602001600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206007018054612d5c9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612d889061434f565b8015612dd55780601f10612daa57610100808354040283529160200191612dd5565b820191906000526020600020905b815481529060010190602001808311612db857829003601f168201915b50505050508152509050919050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b80600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019081612e549190615471565b505050565b80600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001906007612eaa9291906133b0565b505050565b81600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550505050565b60005b815181101561300f57818181518110612f6157612f60614a33565b5b6020026020010151600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008381526020019081526020016000206000820151816000019081612fd19190615471565b50602082015181600101556040820151816002019080519060200190612ff8929190613449565b50905050808061300790615176565b915050612f45565b505050565b6000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050848160040190816130689190615471565b508381600501908161307a9190615471565b508281600601908161308c9190615471565b508181600701908161309e9190615471565b50505050505050565b6000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546130f584612523565b1015801561314d5750600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015461314a83612523565b11155b1561315b5760019050613160565b600090505b9392505050565b6131ff828260405160240161317d929190615543565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506132c0565b5050565b613299816040516024016132179190615573565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506132c0565b50565b600081600001549050919050565b6001816000016000828254019250508190555050565b6132d7816132cf612de46132da565b63ffffffff16565b50565b6132e5819050919050565b6132ed615595565b565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60405180606001604052806060815260200160008152602001606081525090565b6040518060e001604052806133806134a2565b81526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b826007601f016020900481019282156134385791602002820160005b8382111561340957835183826101000a81548160ff02191690831515021790555092602001926001016020816000010492830192600103026133cc565b80156134365782816101000a81549060ff0219169055600101602081600001049283019260010302613409565b505b50905061344591906134c4565b5090565b828054828255906000526020600020908101928215613491579160200282015b828111156134905782518290816134809190615471565b5091602001919060010190613469565b5b50905061349e91906134e1565b5090565b6040518060e00160405280600790602082028036833780820191505090505090565b5b808211156134dd5760008160009055506001016134c5565b5090565b5b8082111561350157600081816134f89190613505565b506001016134e2565b5090565b5080546135119061434f565b6000825580601f106135235750613542565b601f01602090049060005260206000209081019061354191906134c4565b5b50565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61356c81613559565b811461357757600080fd5b50565b60008135905061358981613563565b92915050565b6000602082840312156135a5576135a461354f565b5b60006135b38482850161357a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135e7826135bc565b9050919050565b6135f7816135dc565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561363757808201518184015260208101905061361c565b60008484015250505050565b6000601f19601f8301169050919050565b600061365f826135fd565b6136698185613608565b9350613679818560208601613619565b61368281613643565b840191505092915050565b61369681613559565b82525050565b60008115159050919050565b6136b18161369c565b82525050565b6000610100830160008301516136d060008601826135ee565b50602083015184820360208601526136e88282613654565b91505060408301516136fd604086018261368d565b506060830151613710606086018261368d565b506080830151613723608086018261368d565b5060a083015161373660a086018261368d565b5060c083015161374960c086018261368d565b5060e083015161375c60e08601826136a8565b508091505092915050565b6000602082019050818103600083015261378181846136b7565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6137cb82613643565b810181811067ffffffffffffffff821117156137ea576137e9613793565b5b80604052505050565b60006137fd613545565b905061380982826137c2565b919050565b600067ffffffffffffffff82111561382957613828613793565b5b61383282613643565b9050602081019050919050565b82818337600083830152505050565b600061386161385c8461380e565b6137f3565b90508281526020810184848401111561387d5761387c61378e565b5b61388884828561383f565b509392505050565b600082601f8301126138a5576138a4613789565b5b81356138b584826020860161384e565b91505092915050565b600067ffffffffffffffff8211156138d9576138d8613793565b5b602082029050919050565b600080fd5b6138f28161369c565b81146138fd57600080fd5b50565b60008135905061390f816138e9565b92915050565b6000613928613923846138be565b6137f3565b90508060208402830185811115613942576139416138e4565b5b835b8181101561396b57806139578882613900565b845260208401935050602081019050613944565b5050509392505050565b600082601f83011261398a57613989613789565b5b6007613997848285613915565b91505092915050565b600067ffffffffffffffff8211156139bb576139ba613793565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff8211156139f1576139f0613793565b5b602082029050602081019050919050565b6000613a15613a10846139d6565b6137f3565b90508083825260208201905060208402830185811115613a3857613a376138e4565b5b835b81811015613a7f57803567ffffffffffffffff811115613a5d57613a5c613789565b5b808601613a6a8982613890565b85526020850194505050602081019050613a3a565b5050509392505050565b600082601f830112613a9e57613a9d613789565b5b8135613aae848260208601613a02565b91505092915050565b600060608284031215613acd57613acc6139cc565b5b613ad760606137f3565b9050600082013567ffffffffffffffff811115613af757613af66139d1565b5b613b0384828501613890565b6000830152506020613b178482850161357a565b602083015250604082013567ffffffffffffffff811115613b3b57613b3a6139d1565b5b613b4784828501613a89565b60408301525092915050565b6000613b66613b61846139a0565b6137f3565b90508083825260208201905060208402830185811115613b8957613b886138e4565b5b835b81811015613bd057803567ffffffffffffffff811115613bae57613bad613789565b5b808601613bbb8982613ab7565b85526020850194505050602081019050613b8b565b5050509392505050565b600082601f830112613bef57613bee613789565b5b8135613bff848260208601613b53565b91505092915050565b6000806000806000806000806101c0898b031215613c2957613c2861354f565b5b600089013567ffffffffffffffff811115613c4757613c46613554565b5b613c538b828c01613890565b9850506020613c648b828c01613975565b975050610100613c768b828c0161357a565b965050610120613c888b828c0161357a565b95505061014089013567ffffffffffffffff811115613caa57613ca9613554565b5b613cb68b828c01613bda565b94505061016089013567ffffffffffffffff811115613cd857613cd7613554565b5b613ce48b828c01613890565b93505061018089013567ffffffffffffffff811115613d0657613d05613554565b5b613d128b828c01613890565b9250506101a089013567ffffffffffffffff811115613d3457613d33613554565b5b613d408b828c01613890565b9150509295985092959890939650565b613d59816135dc565b8114613d6457600080fd5b50565b600081359050613d7681613d50565b92915050565b600080600080600060a08688031215613d9857613d9761354f565b5b6000613da688828901613d67565b9550506020613db78882890161357a565b9450506040613dc88882890161357a565b9350506060613dd98882890161357a565b9250506080613dea8882890161357a565b9150509295509295909350565b60008060408385031215613e0e57613e0d61354f565b5b6000613e1c85828601613d67565b9250506020613e2d8582860161357a565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000613e6f8383613654565b905092915050565b6000602082019050919050565b6000613e8f82613e37565b613e998185613e42565b935083602082028501613eab85613e53565b8060005b85811015613ee75784840389528151613ec88582613e63565b9450613ed383613e77565b925060208a01995050600181019050613eaf565b50829750879550505050505092915050565b60006060830160008301518482036000860152613f168282613654565b9150506020830151613f2b602086018261368d565b5060408301518482036040860152613f438282613e84565b9150508091505092915050565b60006020820190508181036000830152613f6a8184613ef9565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000613faa83836135ee565b60208301905092915050565b6000602082019050919050565b6000613fce82613f72565b613fd88185613f7d565b9350613fe383613f8e565b8060005b83811015614014578151613ffb8882613f9e565b975061400683613fb6565b925050600181019050613fe7565b5085935050505092915050565b6000602082019050818103600083015261403b8184613fc3565b905092915050565b6000602082840312156140595761405861354f565b5b600061406784828501613d67565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006140a8838361368d565b60208301905092915050565b6000602082019050919050565b60006140cc82614070565b6140d6818561407b565b93506140e18361408c565b8060005b838110156141125781516140f9888261409c565b9750614104836140b4565b9250506001810190506140e5565b5085935050505092915050565b6000602082019050818103600083015261413981846140c1565b905092915050565b600080604083850312156141585761415761354f565b5b60006141668582860161357a565b92505060206141778582860161357a565b9150509250929050565b61418a81613559565b82525050565b60006020820190506141a56000830184614181565b92915050565b600060079050919050565b600081905092915050565b6000819050919050565b60006141d783836136a8565b60208301905092915050565b6000602082019050919050565b6141f9816141ab565b61420381846141b6565b925061420e826141c1565b8060005b8381101561423f57815161422687826141cb565b9650614231836141e3565b925050600181019050614212565b505050505050565b60006101a08301600083015161426060008601826141f0565b50602083015161427360e086018261368d565b50604083015161428761010086018261368d565b5060608301518482036101208601526142a08282613654565b91505060808301518482036101408601526142bb8282613654565b91505060a08301518482036101608601526142d68282613654565b91505060c08301518482036101808601526142f18282613654565b9150508091505092915050565b600060208201905081810360008301526143188184614247565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061436757607f821691505b60208210810361437a57614379614320565b5b50919050565b60008151905061438f81613d50565b92915050565b6000602082840312156143ab576143aa61354f565b5b60006143b984828501614380565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006143fc82613559565b915061440783613559565b925082820390508181111561441f5761441e6143c2565b5b92915050565b600082825260208201905092915050565b7f7061796d656e74416d6f756e74206973206e6f74207365740000000000000000600082015250565b600061446c601883614425565b915061447782614436565b602082019050919050565b6000602082019050818103600083015261449b8161445f565b9050919050565b6144ab816135dc565b82525050565b60006020820190506144c660008301846144a2565b92915050565b6000815190506144db81613563565b92915050565b6000602082840312156144f7576144f661354f565b5b6000614505848285016144cc565b91505092915050565b7f496e73756666696369656e7420555344432042616c616e636500000000000000600082015250565b6000614544601983614425565b915061454f8261450e565b602082019050919050565b6000602082019050818103600083015261457381614537565b9050919050565b600060408201905061458f60008301856144a2565b61459c60208301846144a2565b9392505050565b7f496e73756666696369656e74205553444320416c6c6f77616e63650000000000600082015250565b60006145d9601b83614425565b91506145e4826145a3565b602082019050919050565b60006020820190508181036000830152614608816145cc565b9050919050565b600061461a82613559565b915061462583613559565b925082820261463381613559565b9150828204841483151761464a576146496143c2565b5b5092915050565b60006040820190506146666000830185614181565b6146736020830184614181565b9392505050565b6000614685826135fd565b61468f8185614425565b935061469f818560208601613619565b6146a881613643565b840191505092915050565b6000610100820190506146c9600083018b614181565b6146d6602083018a6144a2565b81810360408301526146e8818961467a565b90506146f76060830188614181565b6147046080830187614181565b61471160a0830186614181565b61471e60c0830185614181565b61472b60e0830184614181565b9998505050505050505050565b600060608201905061474d60008301866144a2565b61475a60208301856144a2565b6147676040830184614181565b949350505050565b60008151905061477e816138e9565b92915050565b60006020828403121561479a5761479961354f565b5b60006147a88482850161476f565b91505092915050565b60006040820190506147c660008301856144a2565b6147d36020830184614181565b9392505050565b60006060820190506147ef6000830186614181565b6147fc6020830185614181565b61480960408301846144a2565b949350505050565b600081905092915050565b614825816141ab565b61482f8184614811565b925061483a826141c1565b8060005b8381101561486b57815161485287826141cb565b965061485d836141e3565b92505060018101905061483e565b505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060608301600083015184820360008601526148bc8282613654565b91505060208301516148d1602086018261368d565b50604083015184820360408601526148e98282613e84565b9150508091505092915050565b6000614902838361489f565b905092915050565b6000602082019050919050565b600061492282614873565b61492c818561487e565b93508360208202850161493e8561488f565b8060005b8581101561497a578484038952815161495b85826148f6565b94506149668361490a565b925060208a01995050600181019050614942565b50829750879550505050505092915050565b60006101c08201905081810360008301526149a7818b61467a565b90506149b6602083018a61481c565b6149c4610100830189614181565b6149d2610120830188614181565b8181036101408301526149e58187614917565b90508181036101608301526149fa818661467a565b9050818103610180830152614a0f818561467a565b90508181036101a0830152614a24818461467a565b90509998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f53686f7020697320636c6f736564206f6e20746865207265736572766174696f60008201527f6e20646174650000000000000000000000000000000000000000000000000000602082015250565b6000614abe602683614425565b9150614ac982614a62565b604082019050919050565b60006020820190508181036000830152614aed81614ab1565b9050919050565b7f53686f7020697320636c6f736564206f6e20746865207265736572766174696f60008201527f6e2074696d650000000000000000000000000000000000000000000000000000602082015250565b6000614b50602683614425565b9150614b5b82614af4565b604082019050919050565b60006020820190508181036000830152614b7f81614b43565b9050919050565b7f636f757273654964206973206e6f742065786973747300000000000000000000600082015250565b6000614bbc601683614425565b9150614bc782614b86565b602082019050919050565b60006020820190508181036000830152614beb81614baf565b9050919050565b7f7374617274696e6754696d65203e20656e64696e6754696d6500000000000000600082015250565b6000614c28601983614425565b9150614c3382614bf2565b602082019050919050565b60006020820190508181036000830152614c5781614c1b565b9050919050565b7f7374617274696e6754696d652069732070617374000000000000000000000000600082015250565b6000614c94601483614425565b9150614c9f82614c5e565b602082019050919050565b60006020820190508181036000830152614cc381614c87565b9050919050565b7f496e73756666696369656e74205553444320416c6c6f77616e63652041415645600082015250565b6000614d00602083614425565b9150614d0b82614cca565b602082019050919050565b60006020820190508181036000830152614d2f81614cf3565b9050919050565b600081549050614d458161434f565b9050919050565b60008190508160005260206000209050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302614dc37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614d86565b614dcd8683614d86565b95508019841693508086168417925050509392505050565b6000819050919050565b6000614e0a614e05614e0084613559565b614de5565b613559565b9050919050565b6000819050919050565b614e2483614def565b614e38614e3082614e11565b848454614d93565b825550505050565b600090565b614e4d614e40565b614e58818484614e1b565b505050565b5b81811015614e7c57614e71600082614e45565b600181019050614e5e565b5050565b601f821115614ec157614e9281614d4c565b614e9b84614d76565b81016020851015614eaa578190505b614ebe614eb685614d76565b830182614e5d565b50505b505050565b600082821c905092915050565b6000614ee460001984600802614ec6565b1980831691505092915050565b6000614efd8383614ed3565b9150826002028217905092915050565b818103614f1b575050614ff3565b614f2482614d36565b67ffffffffffffffff811115614f3d57614f3c613793565b5b614f47825461434f565b614f52828285614e80565b6000601f831160018114614f815760008415614f6f578287015490505b614f798582614ef1565b865550614fec565b601f198416614f8f87614d61565b9650614f9a86614d4c565b60005b82811015614fc257848901548255600182019150600185019450602081019050614f9d565b86831015614fdf5784890154614fdb601f891682614ed3565b8355505b6001600288020188555050505b5050505050505b565b600081546150028161434f565b61500c8186614425565b94506001821660008114615027576001811461503d57615070565b60ff198316865281151560200286019350615070565b61504685614d4c565b60005b8381101561506857815481890152600182019150602081019050615049565b808801955050505b50505092915050565b600060e08201905061508e600083018a6144a2565b81810360208301526150a08189614ff5565b90506150af6040830188614181565b6150bc6060830187614181565b6150c96080830186614181565b6150d660a0830185614181565b6150e360c0830184614181565b98975050505050505050565b600060a08201905061510460008301886144a2565b6151116020830187614181565b61511e6040830186614181565b61512b6060830185614181565b6151386080830184614181565b9695505050505050565b600061514d82613559565b915061515883613559565b92508282019050808211156151705761516f6143c2565b5b92915050565b600061518182613559565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036151b3576151b26143c2565b5b600182019050919050565b7f6d73672e73656e646572206973206e6f742073686f70206f776e657200000000600082015250565b60006151f4601c83614425565b91506151ff826151be565b602082019050919050565b60006020820190508181036000830152615223816151e7565b9050919050565b7f546865207265736572766174696f6e20697320616c726561647920636865636b60008201527f6564206f75740000000000000000000000000000000000000000000000000000602082015250565b6000615286602683614425565b91506152918261522a565b604082019050919050565b600060208201905081810360008301526152b581615279565b9050919050565b7f43616e63656c20666565207769746864726177616c207374617274732072657360008201527f6572766174696f6e456e6454696d65202b20302e352064617973000000000000602082015250565b6000615318603a83614425565b9150615323826152bc565b604082019050919050565b600060208201905081810360008301526153478161530b565b9050919050565b7f6d73672e73656e6465722073686f756c64206265207468652073686f70206f7760008201527f6e65720000000000000000000000000000000000000000000000000000000000602082015250565b60006153aa602383614425565b91506153b58261534e565b604082019050919050565b600060208201905081810360008301526153d98161539d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061541a82613559565b915061542583613559565b925082615435576154346153e0565b5b828206905092915050565b600061544b82613559565b915061545683613559565b925082615466576154656153e0565b5b828204905092915050565b61547a826135fd565b67ffffffffffffffff81111561549357615492613793565b5b61549d825461434f565b6154a8828285614e80565b600060209050601f8311600181146154db57600084156154c9578287015190505b6154d38582614ef1565b86555061553b565b601f1984166154e986614d4c565b60005b82811015615511578489015182556001820191506020850194506020810190506154ec565b8683101561552e578489015161552a601f891682614ed3565b8355505b6001600288020188555050505b505050505050565b6000604082019050818103600083015261555d818561467a565b905061556c6020830184614181565b9392505050565b6000602082019050818103600083015261558d818461467a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212209d583e4a5fbd5784b2cb68bb36a9e06a6fdef631488faa3a5e23fc0d4c1c72f064736f6c63430008130033",
        linkReferences: {},
        deployedLinkReferences: {},
    },
];
