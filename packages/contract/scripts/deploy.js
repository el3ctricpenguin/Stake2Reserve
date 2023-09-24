// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();

  const usdcFactory = await hre.ethers.getContractFactory("MockUSDC");
  const usdc = await usdcFactory.deploy("MockUSDC", "USDC", 10**10, owner.address);
  await usdc.waitForDeployment();
  // console.log(usdc);
  // const usdcTransferTx = await usdc.transfer(otherAccount, 100*(10**6));
  // await usdcTransferTx.wait();
  // await usdc.mintNewToken(100*(10**10));
  console.log("USDC deployed to: ", usdc.target);

  const contractFactory = await hre.ethers.getContractFactory("Stake2Reserve");
  const contract = await contractFactory.deploy(usdc.target);
  await contract.waitForDeployment();
  console.log("Stake2Reserve deployed to: ", contract.target);
  
  const registerShopDataTx = await registerShopData(contract);
  // console.log(registerShopDataTx);
  await registerShopDataTx.wait();

  const reservationStartTime = new Date(Date.UTC(2023, 10-1, 3, 12+4, 30, 0)).getTime()/1000;
  const reservationEndTime = new Date(Date.UTC(2023, 10-1, 3, 13+4, 30, 0)).getTime()/1000;
  const usdcApproveTx = await usdc.approve(contract.target, 100*(10*6));
  await usdcApproveTx.wait();
  const reserveTx = await contract.reserve(owner.address, reservationStartTime, reservationEndTime, 2, 1);
  await reserveTx.wait();
}

const registerShopData = async (contract)=>{
  const _name = "Shop Name Here";
  const openingWeekDays = [true, false, true, true, true, true, true]; // only closed on Monday
  const openingTime = 60*60*10; // from 10am
  const closingTime = 60*60*18; // to 6pm
  const courses = [{name: "delicious sushi", cancelFee: 100, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]},{name: "delicious sushi #2", cancelFee: 200, imageURLs: ["https://i.imgur.com/4dr7xZo.jpeg", "https://i.imgur.com/zWwZ1Bm.jpeg"]}];
  const imageURL = "https://i.imgur.com/FSmb6op.jpeg";
  const genre = "Japanese Food";
  const description = "ZenBite Sushi is a fictional sushi restaurant with a serene garden ambiance. Their menu includes both traditional and innovative sushi rolls, prepared by expert chefs at an open bar, providing a unique dining experience.";
  const registerShopPropertyTx = await contract.registerShopProperty(_name, openingWeekDays, openingTime, closingTime, courses, imageURL, genre, description);
  return registerShopPropertyTx;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
