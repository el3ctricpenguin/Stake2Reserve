// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";


contract DateAndTime{
    uint256 NY_SUMMER_TIME_2023_01_01 = 1672545600;

    constructor(){}
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
}