// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner, otherAccount] = await hre.ethers.getSigners();
  contractFactory = await hre.ethers.getContractFactory("Stake2Reserve");
  contract = await contractFactory.deploy();
  await contract.waitForDeployment();
  
  await registerShopData(contract);

  const reservationStartTime = new Date(Date.UTC(2023, 10-1, 3, 12+4, 30, 0)).getTime()/1000;
  const reservationEndTime = new Date(Date.UTC(2023, 10-1, 3, 13+4, 30, 0)).getTime()/1000;
  await contract.reserve(owner.address, reservationStartTime, reservationEndTime, 2, 1);
  
}

const registerShopData = async ()=>{
  const _name = "Shop Name Here";
  const openingWeekDays = [true, false, true, true, true, true, true]; // only closed on Monday
  const openingTime = 60*60*10; // from 10am
  const closingTime = 60*60*18; // to 6pm
  const courses = [{name: "delicious sushi", cancelFee: 100, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]},{name: "delicious sushi #2", cancelFee: 200, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]}];
  const imageURL = "https://i.imgur.com/FSmb6op.jpeg";
  const genre = "Japanese Food";
  const description = "ZenBite Sushi is a fictional sushi restaurant with a serene garden ambiance. Their menu includes both traditional and innovative sushi rolls, prepared by expert chefs at an open bar, providing a unique dining experience.";
  await contract.registerShopProperty(_name, openingWeekDays, openingTime, closingTime, courses, imageURL, genre, description);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
