// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Stake2Reserve is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 NY_SUMMER_TIME_2023_01_01 = 1672545600;
    ERC20 USDC;

    /*--------------+
    |   Variables   |
    +--------------*/

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
        address shopAddress;
        string shopName;
        uint256 startingTime; // unix time
        uint256 endingTime; // unix time
        uint256 guestCount;
        uint256 courseId;
        uint256 paymentAmount;
        bool isCheckedOut;
    }


    constructor(address _USDCAddress) ERC721("Stake2Reserve NFT", "S2R"){
        console.log(_USDCAddress);
        USDC = ERC20(_USDCAddress);
    }

    function reserve (address _shopAddress, uint256 _startingTime, uint256 _endingTime, uint256 _guestCount, uint256 _courseId) public {
        // Date & Time validation
        // console.log("getWeekDay(_startingTime): ",getWeekDay(_startingTime));
        // console.log("shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)]: ",shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)]);
        require(shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)], "Shop is closed on the reservation date");
        require(isReservationWithinOpeningTime(_shopAddress, _startingTime, _endingTime), "Shop is closed on the reservation time");
        // TODO: Does the course exists?


        // check if custormer can pay the cancel fee
        uint256 cancelFee = shops[_shopAddress].courses[_courseId].cancelFee;
        require(USDC.balanceOf(msg.sender) >= cancelFee, "Insufficient USDC Balance");
        require(USDC.allowance(msg.sender, address(this)) >= cancelFee, "Insufficient USDC Allowance");

        // depositStakeToAave()

        mintReservationNFT(_shopAddress, _startingTime, _endingTime, _guestCount, _courseId);
        // TODO: add an event
    }

    /*--------+
    |   NFT   |
    +--------*/
    function mintReservationNFT (address _shopAddress, uint256 _startingTime, uint256 _endingTime, uint256 _guestCount, uint256 _courseId) public {
        uint256 newItemId = _tokenIds.current();

        // set parameters
        reservations[newItemId].shopAddress = _shopAddress;
        reservations[newItemId].shopName = shops[_shopAddress].name;
        reservations[newItemId].startingTime = _startingTime;
        reservations[newItemId].endingTime = _endingTime;
        reservations[newItemId].guestCount = _guestCount;
        reservations[newItemId].courseId = _courseId;

        string memory tokenURI = makeTokenURI(_shopAddress, _startingTime, _endingTime, _guestCount, _courseId);
        // console.log(tokenURI);
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }

    function makeTokenURI (address _shopAddress, uint256 _startingTime, uint256 _endingTime, uint256 _guestCount, uint256 _courseId) private view returns(string memory) {
        Course memory _course = shops[_shopAddress].courses[_courseId];
        return string(abi.encodePacked("data:application/json;base64,", Base64.encode(abi.encodePacked(
            '{"name": "Stake2Reserve Reservation NFT",',
            '"description": "Penguin",',
            '"image": "https://i.imgur.com/T2F51Kn.jpeg",',
            '"attributes": [',
            '{"trait_type": "Shop Address",',
            '"value": "',Strings.toHexString(_shopAddress),'"},',
            '{"trait_type": "Shop Name",',
            '"value": "',shops[_shopAddress].name,'"},',
            '{"trait_type": "Reservation Date",',
            '"display_type": "date",',
            '"value": "',Strings.toString(_startingTime),'"},',
            '{"trait_type": "Reservation Start Time",',
            '"value": "',Strings.toString(_startingTime),'"},',
            '{"trait_type": "Reservation End Time",',
            '"value": "',Strings.toString(_endingTime),'"},',
            '{"trait_type": "Guest Count",',
            '"value": "',Strings.toString(_guestCount),'"},',
            '{"trait_type": "Course Id",',
            '"value": "',Strings.toString(_courseId),'"},',
            '{"trait_type": "Cancel Fee",',
            '"value": "',Strings.toString(_course.cancelFee),'"}',
            ']}'
        ))));
    }

    function burnReservationNFT (uint256 _tokenId) public {
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
        if(getTime(_openingTime)>=shops[_shopAddress].openingTime && getTime(_closingTime)<=shops[_shopAddress].closingTime){
            return true;
        }else{
            return false;
        }
    }
    /*-------------+
    |   Checkout   |
    +-------------*/
    function setPaymentAmount(uint256 _tokenId, uint256 _paymentAmount) public {
        require(msg.sender == reservations[_tokenId].shopAddress, "msg.sender should be the shop owner");
        reservations[_tokenId].paymentAmount = _paymentAmount;
    }

    function checkOut(uint256 _tokenId) public {
        uint256 customerPaymentAmount = reservations[_tokenId].paymentAmount;
        // check if Payment Amount is registered
        require(customerPaymentAmount>0, "paymentAmount is not set");
        // check if enough USDC customer has
        require(USDC.balanceOf(msg.sender) >= customerPaymentAmount, "Insufficient USDC Balance");
        // check if enough USDC allowance the contract has
        require(USDC.allowance(msg.sender, address(this)) >= customerPaymentAmount, "Insufficient USDC Allowance");
        
        // withdrawStakeFromAave()
        
        // convertReservationNFTtoVisitedNFT()
    }

    /*-------------------------+
    |    Register Shop Info    |
    +-------------------------*/
    function registerShopProperty(string memory _name, bool[7] memory _openingWeekDays, uint256 _openingTime, uint256 _closingTime, Course[] memory _courses, string memory _imageURL, string memory _genre, string memory _description) public {
        // essential data
        setShopName(msg.sender, _name);
        setOpeningWeekDays(msg.sender, _openingWeekDays);
        setShopOpeningTime(msg.sender, _openingTime, _closingTime);
        setShopCourses(msg.sender, _courses);
        // extra data
        setExtraData(msg.sender, _name, _imageURL, _genre, _description);
        // TODO: add an event
    }

    function setShopName(address _shopAddress, string memory _name) private {
        shops[_shopAddress].name = _name;
    }    
    function setOpeningWeekDays(address _shopAddress, bool[7] memory _openingWeekDays) private {
        shops[_shopAddress].openingWeekDays = _openingWeekDays;
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
    /*-------------------+
    |    For Frontend    |
    +-------------------*/
    function getReservationData(uint256 _tokenId) public view returns(ReservationData memory) {
        return reservations[_tokenId];
    }

    struct ShopStatusWithoutCources{ // Without Couses(mapping)
        // essential data
        bool[7] openingWeekDays; // 0~6: Sun~Sat
        uint256 openingTime;
        uint256 closingTime;

        // extra data
        string name;
        string imageURL;
        string genre;
        string description;
    }

    function getShopStatus(address _shopAddress) public view returns(ShopStatusWithoutCources memory){
        return ShopStatusWithoutCources(
            shops[_shopAddress].openingWeekDays,
            shops[_shopAddress].openingTime,
            shops[_shopAddress].closingTime,
            shops[_shopAddress].name,
            shops[_shopAddress].imageURL,
            shops[_shopAddress].genre,
            shops[_shopAddress].description
        );
    }
    function getCourses(address _shopAddress, uint256 _courseId) public view returns(Course memory){
        return shops[_shopAddress].courses[_courseId];
    }
}