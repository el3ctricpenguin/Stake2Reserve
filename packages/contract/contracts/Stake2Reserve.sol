// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Stake2Reserve is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 NY_SUMMER_TIME_2023_01_01 = 1672545600;

    mapping (address=>ShopStatus) shops;
    struct ShopStatus{
        // essential data
        bool[7] openingWeekDay; // 0~6: Sun~Sat
        uint256 openingTime;
        uint256 closingTime;
        mapping (uint256=>Course) courses;

        // extra data
        string name;
        string imageURL;
        string genre;
        string description;
        string shopAddress;
    }
    struct Course{
        string name;
        uint256 cancelFee;
        string[] imageURLs;
    }

    mapping (uint256=>ReservationData) reservations;
    struct ReservationData{
        string name;
        uint256 startingTime; // unix time
        uint256 endingTime; // unix time
        uint256 guestCount;
    }


    constructor() ERC721("Stake2Reserve NFT", "S2R"){
        shops[address(0)].openingWeekDay = [true, false, true, true, true, true, true];
        shops[address(0)].openingTime = 60*60*10;
        shops[address(0)].closingTime = 60*60*18;
    }

    function reserve (address _shopAddress, uint256 _startTime, uint256 _endTime) public {
        require(shops[_shopAddress].openingWeekDay[getWeekDay(_startTime)], "Shop is closed on the reservation date");
        require(isReservationWithinOpeningTime(_shopAddress, _startTime, _endTime), "Shop is closed on the reservation time");
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
        uint256 diffTimeWeek = diffTimeYear%(60*60*24*7);
        uint256 week = uint256(diffTimeWeek/(60*60*24));
        return week;
    }

    function getTime(uint256 _unixTime) public view returns(uint256){
        uint256 diffTimeYear = _unixTime - NY_SUMMER_TIME_2023_01_01; // seconds from 2023/01/01 (NY Summertime, Sunday)
        uint256 diffTimeDay = diffTimeYear%(60*60*24);
        return diffTimeDay;
    }

    function isReservationWithinOpeningTime(address _shopAddress, uint256 _openingTime, uint256 _closingTime) private view returns(bool) {
        if(getTime(_openingTime)>shops[_shopAddress].openingTime && getTime(_closingTime)<shops[_shopAddress].closingTime){
            return true;
        }else{
            return false;
        }
    }

    function exists (uint256 _tokenId) public view returns (bool){
        return _exists(_tokenId);
    }
}