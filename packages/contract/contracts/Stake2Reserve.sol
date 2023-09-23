// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Stake2Reserve is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Stake2Reserve NFT", "S2R"){}

    function mintNFT () public {
        uint256 newItemId = _tokenIds.current();

        string memory tokenURI = '{"name": "Stake2Reserve NFT", "description": "Penguin", "image: "https://i.imgur.com/T2F51Kn.jpeg"}';
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }
}