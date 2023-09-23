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
            const {owner, contract} = await loadFixture(deployContract)
            await contract.mintNFT();
            expect(await contract.ownerOf(0)).to.equal(owner.address);
        });
    });
});