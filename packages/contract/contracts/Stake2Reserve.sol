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
        bool[7] openingWeekDays; // 0~6: Sun~Sat
        uint256 openingTime;
        uint256 closingTime;
        mapping (uint256=>Course) courses;

        // extra data
        string name;
        string imageURL;
        string genre;
        string description;
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
    }

    function reserve (address _shopAddress, uint256 _startTime, uint256 _endTime) public {
        require(shops[_shopAddress].openingWeekDays[getWeekDay(_startTime)], "Shop is closed on the reservation date");
        require(isReservationWithinOpeningTime(_shopAddress, _startTime, _endTime), "Shop is closed on the reservation time");
        mintNFT();
    }

    /*--------+
    |   NFT   |
    +--------*/
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

    function exists (uint256 _tokenId) public view returns (bool){
        return _exists(_tokenId);
    }

    /*------------------+
    |   Week and Time   |
    +------------------*/
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

    /*-------------------------+
    |    Register Shop Info    |
    +-------------------------*/
    function registerShopProperty(string memory _name, bool[7] memory _openingWeekDayss, uint256 _openingTime, uint256 _closingTime, Course[] memory _courses, string memory _imageURL, string memory _genre, string memory _description) public {
        // essential data
        setShopName(msg.sender, _name);
        setopeningWeekDayss(msg.sender, _openingWeekDayss);
        setShopOpeningTime(msg.sender, _openingTime, _closingTime);
        setShopCourses(msg.sender, _courses);
        // extra data
        setExtraData(msg.sender, _name, _imageURL, _genre, _description);
    }

    function setShopName(address _shopAddress, string memory _name) private {
        shops[_shopAddress].name = _name;
    }    
    function setopeningWeekDayss(address _shopAddress, bool[7] memory _openingWeekDayss) private {
        shops[_shopAddress].openingWeekDays = _openingWeekDayss;
    }
    function setShopOpeningTime(address _shopAddress, uint256 _openingTime, uint256 _closingTime) private {
        shops[_shopAddress].openingTime = _openingTime;
        shops[_shopAddress].closingTime = _closingTime;
    }
    function setShopCourses(address _shopAddress, Course[] memory _courses) private {
        for(uint256 i;i<_courses.length;i++){
            shops[_shopAddress].courses[i] = _courses[i];
        }
    }
    function setExtraData(address _shopAddress, string memory _name, string memory _imageURL, string memory _genre, string memory _description) private {
        ShopStatus storage shopStatus = shops[_shopAddress];
        shopStatus.name = _name;
        shopStatus.imageURL = _imageURL;
        shopStatus.genre = _genre;
        shopStatus.description = _description;
    }
}