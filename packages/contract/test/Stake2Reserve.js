const { loadFixture, time } = require('@nomicfoundation/hardhat-network-helpers');
const { ethers } = require('hardhat');
const { expect } = require('chai');

describe("Stake2Reserve", ()=>{
    const deployContract = async()=>{
        const [owner, otherAccount] = await ethers.getSigners();
        contractFactory = await ethers.getContractFactory("Stake2Reserve");
        contract = await contractFactory.deploy();
        await contract.waitForDeployment();

        return {owner, otherAccount, contract};
    }
    describe("NFT", ()=>{
        it("should mint a NFT to msg.sender", async ()=>{
            const {owner, contract} = await loadFixture(deployContract);
            await contract.mintNFT();
            expect(await contract.ownerOf(0)).to.equal(owner.address);
        });
        it("should burn a NFT", async ()=>{
            const {owner, contract} = await loadFixture(deployContract);
            await contract.mintNFT();
            await contract.burnNFT(0);
            expect(await contract.exists(0)).to.equal(false);
        });
    });
    describe("Time", ()=>{
        it("should return correct week day #1 (Saturday, 6)", async()=>{
            const {contract} = await loadFixture(deployContract);
            // in Date.UTC, 0 is January, 11 is December
            console.log("01/01/2023 (NY, Unix Time): ", new Date(Date.UTC(2023, 1-1, 1, 0+4, 0, 0)).getTime()/1000);
            console.log("23/09/2023 (NY, Unix Time): ", new Date(Date.UTC(2023, 9-1, 23, 0+4, 45, 40)).getTime()/1000);
            expect(await contract.getWeekDay(new Date(Date.UTC(2023, 9-1, 23, 0+4, 45, 40)).getTime()/1000)).to.equal(6);
        });
        it("should return correct week day #2 (Wendesday, 3)", async()=>{
            const {contract} = await loadFixture(deployContract);
            // in Date.UTC, 0 is January, 11 is December
            expect(await contract.getWeekDay(new Date(Date.UTC(2023, 9-1, 13, 9+4, 15, 1)).getTime()/1000)).to.equal(3);
        });
        it("should return correct week day #3 (Wendesday, 0)", async()=>{
            const {contract} = await loadFixture(deployContract);
            // in Date.UTC, 0 is January, 11 is December
            expect(await contract.getWeekDay(new Date(Date.UTC(2024, 5-1, 5, 3+4, 23, 51)).getTime()/1000)).to.equal(0);
        });
        it("should return correct week day #4 (Friday, 5)", async()=>{
            const {contract} = await loadFixture(deployContract);
            // in Date.UTC, 0 is January, 11 is December
            expect(await contract.getWeekDay(new Date(Date.UTC(2024, 12-1, 27, 19+4, 2, 1)).getTime()/1000)).to.equal(5);
        });
    });
});