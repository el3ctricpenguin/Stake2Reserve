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
    };
    const deployedContractAndRegisteredShopProperty = async()=>{
        const {owner, otherAccount, contract} = await loadFixture(deployContract);
        const _name = "Shop Name Here";
        const openingWeekDays = [true, false, true, true, true, true, true]; // only closed on Monday
        const openingTime = 60*60*10; // from 10am
        const closingTime = 60*60*18; // to 6pm
        const courses = [{name: "delicious sushi", cancelFee: 100, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]},{name: "delicious sushi #2", cancelFee: 200, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]}];
        const imageURL = "https://i.imgur.com/FSmb6op.jpeg";
        const genre = "Japanese Food";
        const description = "ZenBite Sushi is a fictional sushi restaurant with a serene garden ambiance. Their menu includes both traditional and innovative sushi rolls, prepared by expert chefs at an open bar, providing a unique dining experience.";
        await contract.registerShopProperty(_name, openingWeekDays, openingTime, closingTime, courses, imageURL, genre, description);
        return {owner, otherAccount, contract};
    };
    const deployedContractAndRegisteredShopPropertyAndReservedSome = async()=>{
        const {owner, otherAccount, contract} = await loadFixture(deployedContractAndRegisteredShopProperty);
        await contract.connect(otherAccount).reserve(owner.address, new Date(Date.UTC(2023, 10-1, 3, 12+4, 30, 0)).getTime()/1000, new Date(Date.UTC(2023, 10-1, 3, 13+4, 30, 0)).getTime()/1000, 2, 0);
        await contract.connect(otherAccount).reserve(owner.address, new Date(Date.UTC(2023, 10-1, 6, 10+4, 0, 0)).getTime()/1000, new Date(Date.UTC(2023, 10-1, 6, 11+4, 0, 0)).getTime()/1000, 2, 1);
        return {owner, otherAccount, contract};
    };

    describe("NFT", ()=>{
        // it("should mint a NFT to msg.sender", async ()=>{
        //     const {owner, contract} = await loadFixture(deployContract);
        //     await contract.mintReservationNFT(_shopAddress, _startingTime, _endingTime, _guestCount, _courseId);
        //     expect(await contract.ownerOf(0)).to.equal(owner.address);
        // });
        // it("should burn a NFT", async ()=>{
        //     const {owner, contract} = await loadFixture(deployContract);
        //     await contract.mintReservationNFT();
        //     await contract.burnReservationNFT(0);
        //     expect(await contract.exists(0)).to.equal(false);
        // });
    });
    describe("Week and Time", ()=>{
        describe("Week", ()=>{
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
        describe("Time", ()=>{
            it("should return correct diff time #1", async()=>{
                const {contract} = await loadFixture(deployContract);
                expect(await contract.getTime(new Date(Date.UTC(2023, 9-1, 23, 0+4, 45, 40)).getTime()/1000)).to.equal(new Date(Date.UTC(1970, 1-1, 1, 0, 45, 40)).getTime()/1000);
            });
            it("should return correct diff time #2", async()=>{
                const {contract} = await loadFixture(deployContract);
                expect(await contract.getTime(new Date(Date.UTC(2023, 2-1, 3, 5+4, 15, 0)).getTime()/1000)).to.equal(new Date(Date.UTC(1970, 1-1, 1, 5, 15, 0)).getTime()/1000);
            });
            it("should return correct diff time #3", async()=>{
                const {contract} = await loadFixture(deployContract);
                expect(await contract.getTime(new Date(Date.UTC(2024, 9-1, 4, 3+4, 34, 21)).getTime()/1000)).to.equal(new Date(Date.UTC(1970, 1-1, 1, 3, 34, 21)).getTime()/1000);
            });
            it("should return correct diff time #4", async()=>{
                const {contract} = await loadFixture(deployContract);
                expect(await contract.getTime(new Date(Date.UTC(2025, 11-1, 2, 17+4, 16, 56)).getTime()/1000)).to.equal(new Date(Date.UTC(1970, 1-1, 1, 17, 16, 56)).getTime()/1000);
            });
        });
    });
    describe("Reservation", ()=>{
        describe("require", ()=>{
            it("should be reverted because of wrong week day", async()=>{
                const {owner, contract} = await loadFixture(deployedContractAndRegisteredShopProperty);
                const reservationStartTime = new Date(Date.UTC(2023, 10-1, 2, 0+4, 30, 0)).getTime()/1000;
                const reservationEndTime = new Date(Date.UTC(2023, 10-1, 2, 1+4, 30, 0)).getTime()/1000;
                await expect(contract.reserve(owner.address, reservationStartTime, reservationEndTime, 2, 1)).to.be.revertedWith("Shop is closed on the reservation date");
            });
            it("should be reverted because of wrong time", async()=>{
                const {owner, contract} = await loadFixture(deployedContractAndRegisteredShopProperty);
                const reservationStartTime = new Date(Date.UTC(2023, 10-1, 3, 0+4, 30, 0)).getTime()/1000;
                const reservationEndTime = new Date(Date.UTC(2023, 10-1, 3, 1+4, 30, 0)).getTime()/1000;
                await expect(contract.reserve(owner.address, reservationStartTime, reservationEndTime, 2, 1)).to.be.revertedWith("Shop is closed on the reservation time");
            });
            it("should not be reverted", async()=>{
                const {owner, contract} = await loadFixture(deployedContractAndRegisteredShopProperty);
                const reservationStartTime = new Date(Date.UTC(2023, 10-1, 3, 12+4, 30, 0)).getTime()/1000;
                const reservationEndTime = new Date(Date.UTC(2023, 10-1, 3, 13+4, 30, 0)).getTime()/1000;
                await expect(contract.reserve(owner.address, reservationStartTime, reservationEndTime, 2, 1)).not.to.be.reverted;
            });
        });
    });
    describe("Check Out", ()=>{
        describe("setPaymentAmount", ()=>{
            it("should be reverted because of wrong msg.sender", async()=>{
                const {owner, otherAccount, contract} = await loadFixture(deployedContractAndRegisteredShopPropertyAndReservedSome);
                await expect(contract.connect(otherAccount).setPaymentAmount(0, 200)).to.be.revertedWith("msg.sender should be the shop owner");
            });
            it("should not be reverted", async()=>{
                const {owner, otherAccount, contract} = await loadFixture(deployedContractAndRegisteredShopPropertyAndReservedSome);
                await expect(contract.setPaymentAmount(0, 200)).not.to.be.reverted;
            });
        });
    });
});