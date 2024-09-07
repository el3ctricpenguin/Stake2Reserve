import hre from "hardhat";

async function main() {
    const contractAddress = "0xd67C423eC3109F2f00001df9768db821BdAfeeaE";
    const contractABI = require("../artifacts/contracts/Stake2Reserve.sol/Stake2Reserve.json").abi;
    const contract = new hre.ethers.Contract(contractAddress, contractABI, hre.ethers.provider);
    const [signer, other] = await hre.ethers.getSigners();
    console.log("other.address", other.address);
    const contractWithSigner = contract.connect(other);
    console.log("contractWithSigner.target", contractWithSigner.target);

    const name = "Food of Thrones";
    const openingWeekDays = [false, true, true, true, true, true, false];
    const openingTime = 28800;
    const closingTime = 57600;
    const courses = [
        {
            name: "King's Landing Roast Boar",
            cancelFee: 100,
            imageURLs: ["https://i.imgur.com/vFuKHqL.jpeg"],
        },
        { name: "Dragon's Fire Stew", cancelFee: 150, imageURLs: ["https://i.imgur.com/x8BJt87.jpeg"] },
        {
            name: "Winterfell Honeyed Chicken",
            cancelFee: 200,
            imageURLs: ["https://i.imgur.com/GnK1oaa.jpeg"],
        },
    ];
    const imageURL = "https://i.imgur.com/O7Mca89.jpeg";
    const genre = "Medieval Cuisine";
    const description =
        "Step into the epic world of Food of Thrones, where the Seven Kingdoms' most legendary dishes come to life. This medieval fantasy-themed restaurant transports you to the grand feasts of Westeros, offering a culinary experience worthy of royalty. Enjoy hearty, rustic meals inspired by the noble houses and fierce warriors of the realm, all in an ambiance that echoes the grandeur of the Iron Throne.";

    const tx = await contractWithSigner.registerShopProperty(
        name,
        openingWeekDays,
        openingTime,
        closingTime,
        courses,
        imageURL,
        genre,
        description
    );
    console.log("tx.hash", tx.hash);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
