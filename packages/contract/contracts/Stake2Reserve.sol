// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Stake2Reserve is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 NY_SUMMER_TIME_2023_01_01 = 1672545600;

    mapping (uint256=>ReservationData) reservations;

    struct ReservationData{
        string name;
        uint256 startingTime; // unix time
        uint256 endingTime; // unix time
        uint256 guestCount;
        // courses;
    }

    constructor() ERC721("Stake2Reserve NFT", "S2R"){}

    function reserve () public {
        mintNFT();
    }

    function mintNFT () public {
        uint256 newItemId = _tokenIds.current();

        string memory tokenURI = '{"name": "Stake2Reserve NFT", "description": "Penguin", "image: "https://i.imgur.com/T2F51Kn.jpeg"}';
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }

    function burnNFT (uint256 _tokenId) public {
        _burn(_tokenId);
    }

    function getWeekDay(uint256 _unixTime) public view returns(uint256){
        uint256 diffTimeYear = _unixTime - NY_SUMMER_TIME_2023_01_01; // seconds from 2023/01/01 (NY Summertime, Sunday)
        console.log("diffTimeYear", diffTimeYear);
        console.log(diffTimeYear/(60*60*24*7));
        uint256 diffTimeWeek = diffTimeYear%(60*60*24*7);
        console.log("diffTimeWeek", diffTimeWeek);
        console.log("week", diffTimeWeek/(60*60*24));
        uint256 week = uint256(diffTimeWeek/(60*60*24));
        console.log("week", week);
        return week;
    }

    function exists (uint256 _tokenId) public view returns (bool){
        return _exists(_tokenId);
    }
}