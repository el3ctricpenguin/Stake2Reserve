// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./S2RNFT.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Stake2Reserve {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 NY_SUMMER_TIME_2023_01_01 = 1672545600;
    uint256 penaltyStartTime = 60*60*12;
    ERC20 USDC;
    S2RNFT s2r;


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

    event Reservation(address shopAddress, uint256 startingTime, uint256 endingTime, uint256 guestCount, uint256 courseId);
    event RegisterShopProperty(string name, bool[7] openingWeekDays, uint256 openingTime, uint256 closingTime, Course[] courses, string imageURL, string genre, string description);
    event SetPaymentAmount(uint256 tokenId, uint256 paymentAmount, address shopAddress);
    event CheckOut(uint256 tokenId, uint256 customerPaymentAmount, address customerAddress);

    constructor(address _USDCAddress, address _S2RNFTAddress){
        console.log(_USDCAddress);
        USDC = ERC20(_USDCAddress);
        s2r = S2RNFT(_S2RNFTAddress);
    }

    function reserve (address _shopAddress, uint256 _startingTime, uint256 _endingTime, uint256 _guestCount, uint256 _courseId) public {
        // Date & Time validation
        // console.log("getWeekDay(_startingTime): ",getWeekDay(_startingTime));
        // console.log("shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)]: ",shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)]);
        require(shops[_shopAddress].openingWeekDays[getWeekDay(_startingTime)], "Shop is closed on the reservation date");
        require(isReservationWithinOpeningTime(_shopAddress, _startingTime, _endingTime), "Shop is closed on the reservation time");
        
        // check if courseId exists
        require(shops[_shopAddress].courses[_courseId].cancelFee!=0, "courseId is not exists");

        // check if not past and endTime>startTime
        require(_startingTime<_endingTime, "startingTime > endingTime");
        require(block.timestamp<_startingTime, "startingTime is past");

        // check if custormer can pay the cancel fee
        uint256 cancelFee = shops[_shopAddress].courses[_courseId].cancelFee;
        require(USDC.balanceOf(msg.sender) >= cancelFee, "Insufficient USDC Balance");
        require(USDC.allowance(msg.sender, address(this)) >= cancelFee, "Insufficient USDC Allowance");

        // USDC.transferFrom(msg.sender, address(this), cancelFee); // don't know why but require doesn't work well

        // depositStakeToAave()

        uint256 newItemId = _tokenIds.current();
        // set parameters
        reservations[newItemId].shopAddress = _shopAddress;
        reservations[newItemId].shopName = shops[_shopAddress].name;
        reservations[newItemId].startingTime = _startingTime;
        reservations[newItemId].endingTime = _endingTime;
        reservations[newItemId].guestCount = _guestCount;
        reservations[newItemId].courseId = _courseId;

        _tokenIds.increment();
        ShopStatus storage shop = shops[_shopAddress];
        s2r.mintReservationNFT(_shopAddress, shop.name, _startingTime, _endingTime, _guestCount, _courseId, shop.courses[_courseId].cancelFee);
        emit Reservation(_shopAddress, _startingTime, _endingTime, _guestCount, _courseId);
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
        emit SetPaymentAmount(_tokenId, _paymentAmount, reservations[_tokenId].shopAddress);
    }

    function checkOut(uint256 _tokenId) public {
        address customerAddress = s2r.ownerOf(_tokenId);
        uint256 customerPaymentAmount = reservations[_tokenId].paymentAmount;
        // check if Payment Amount is registered
        require(customerPaymentAmount>0, "paymentAmount is not set");
        // check if enough USDC customer has
        require(USDC.balanceOf(msg.sender) >= customerPaymentAmount, "Insufficient USDC Balance");
        // check if enough USDC allowance the contract has
        require(USDC.allowance(msg.sender, address(this)) >= customerPaymentAmount, "Insufficient USDC Allowance");
        
        // withdrawStakeFromAave()
        
        // convertReservationNFTtoVisitedNFT()
        reservations[_tokenId].isCheckedOut = true;
        emit CheckOut(_tokenId, customerPaymentAmount, customerAddress);
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
        emit RegisterShopProperty(_name, _openingWeekDays, _openingTime, _closingTime, _courses, _imageURL, _genre, _description);
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
    
    function getNoShowNFTs(address _shopAddress) view public returns(uint256[] memory){
        uint256 tokenCount = _tokenIds.current();
        uint256[] memory noShowNFTIdsTemp = new uint256[](tokenCount); // cannot use push and declare variable-length arrays in view
        uint256 arrayCount = 0;
        for(uint i=0;i<tokenCount;i++){ // i: tokenId
            ReservationData memory reservation = reservations[i];
            if(reservation.shopAddress == _shopAddress && !reservation.isCheckedOut && (reservation.endingTime+penaltyStartTime)<= block.timestamp && s2r.exists(i)){
                noShowNFTIdsTemp[arrayCount]=i;
                arrayCount++;
            }
        }
        uint256[] memory noShowNFTIds = new uint256[](arrayCount);
        for(uint i=0;i<arrayCount;i++){
            noShowNFTIds[i]=noShowNFTIdsTemp[i];
        }
        return noShowNFTIds;
    }
    function getEligibleNFTs(address _shopAddress) view public returns(uint256[] memory){
        uint256 tokenCount = _tokenIds.current();
        uint256[] memory eligibleIdsTemp = new uint256[](tokenCount); // cannot use push and declare variable-length arrays in view
        uint256 arrayCount = 0;
        for(uint i=0;i<tokenCount;i++){ // i: tokenId
            ReservationData memory reservation = reservations[i];
            if(reservation.shopAddress == _shopAddress && !reservation.isCheckedOut && (reservation.endingTime+penaltyStartTime)> block.timestamp && s2r.exists(i)){
                eligibleIdsTemp[arrayCount]=i;
                arrayCount++;
            }
        }
        uint256[] memory eligibleIds = new uint256[](arrayCount);
        for(uint i=0;i<arrayCount;i++){
            eligibleIds[i]=eligibleIdsTemp[i];
        }
        return eligibleIds;
    }
}