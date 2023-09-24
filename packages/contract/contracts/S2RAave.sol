// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";

import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "../aave-address-book/src/AaveV3Sepolia.sol";

contract S2RAave{
    address AAVE_POOL_ADDRESS = 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951;
    address USDC_ADDRESS = 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8;
    address USDC_A_TOKEN = 0x16dA4541aD1807f4443d92D26044C1147406EB80;
    IPool aavePool = IPool(AAVE_POOL_ADDRESS);
    ERC20 USDC = ERC20(USDC_ADDRESS);
    ERC20 aUSDC = ERC20(USDC_A_TOKEN);

    uint256[] tokenIds;
    mapping (uint => uint) stakeAmount; // Last Updated each aToken amount
    uint256 aTokenTotalAmount; // Last Updated aToken total amount on contract

    event SupplyUSDCToAave(address sender, uint256 amount);
    event WithdrawUSDCFromAave(address sender, uint256 amount);
    constructor(){
    }

    function supplyUSDCToAave(uint256 _tokenId, uint256 _amount) public {
        require(USDC.balanceOf(msg.sender) >= _amount, "Insufficient USDC Balance");
        require(USDC.allowance(msg.sender, address(this)) >= _amount, "Insufficient USDC Allowance");
        USDC.transferFrom(msg.sender, address(this), _amount);
        USDC.approve(AAVE_POOL_ADDRESS, _amount);
        IPool(aavePool).supply(USDC_ADDRESS, _amount, address(this), 0);
        
        // addStake(_tokenId, _amount);
        emit SupplyUSDCToAave(msg.sender, _amount);
    }
    function withdrawUSDCFromAave(uint256 _amount) public {
        IPool(aavePool).withdraw(USDC_ADDRESS, _amount, address(this));
        USDC.transfer(msg.sender, _amount);
        emit WithdrawUSDCFromAave(msg.sender, _amount);
    }
}