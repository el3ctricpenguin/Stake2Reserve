import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("S2R_4", (m) => {
    const USDC_ADDRESS = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";
    const S2R_NFT_ADDRESS = "0xCEd656AC054C91C99235227f4536489549d70625";
    const S2R_AAVE_ADDRESS = "0x8Be3602c00c552a709c75145a04A6529A0074d31";
    const s2r = m.contract("Stake2Reserve", [USDC_ADDRESS, S2R_NFT_ADDRESS, S2R_AAVE_ADDRESS]);

    const name = "Galaxy Diner";
    const openingWeekDays = [true, false, true, true, true, true, true];
    const openingTime = 36000;
    const closingTime = 64800;
    const courses = [
        { name: "huge burger", cancelFee: 100, imageURLs: ["https://i.imgur.com/nDI0Qxt.jpeg", "https://i.imgur.com/a1GwO8A.jpeg"] },
        { name: "burned sandwich", cancelFee: 200, imageURLs: ["https://i.imgur.com/eogFKkd.jpeg", "https://i.imgur.com/5J9ZOyp.jpeg"] },
    ];
    const imageURL = "https://i.imgur.com/XHq6MkA.jpeg";
    const genre = "American Food";
    const description =
        "Galaxy Diner is a Star Wars-inspired restaurant that transports guests to a retro-futuristic space cantina. The vibrant atmosphere, filled with neon lights and space-themed decor, sets the stage for a menu of creatively named dishes. From towering burgers to sandwiches with a smoky, charred flavor, Galaxy Diner offers a fun and delicious dining experience for fans of the galaxy far, far away.";

    m.call(s2r, "registerShopProperty", [name, openingWeekDays, openingTime, closingTime, courses, imageURL, genre, description]);

    return { s2r };
});
