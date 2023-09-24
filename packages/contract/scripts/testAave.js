const hre = require("hardhat");
const erc20_abi = require("../abi/ERC20.json");

async function main() {
    const [owner] = await hre.ethers.getSigners();
    contractFactory = await hre.ethers.getContractFactory("S2RAave");
    // Sepolia 
    const AAVE_POOL_ADDRESS = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
    const USDC_ADDRESS = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";
    const USDC_A_TOKEN = "0x16dA4541aD1807f4443d92D26044C1147406EB80";
    contract = await contractFactory.deploy();
    console.log("Contract deploy started");
    await contract.waitForDeployment();
    console.log("Contract deployed to: ", contract.target);

    const USDC = new hre.ethers.Contract(USDC_ADDRESS, erc20_abi, owner);

    const amount = 100*(10**6);
    const approveTx = await USDC.approve(contract.target, amount);
    console.log("Approve USDC to Contract TX: ", approveTx);
    approveTx.wait();
    console.log("Done");

    const supplyTx = await contract.supplyUSDCToAave(amount);
    console.log("Supply USDC to Aave TX: ", supplyTx);
    await supplyTx.wait();
    console.log("Done");

    const withdrawTx = await contract.withdrawUSDCFromAave(amount);
    console.log("Supply USDC to Aave TX: ", supplyTx);
    await supplyTx.wait();
    console.log("Done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});