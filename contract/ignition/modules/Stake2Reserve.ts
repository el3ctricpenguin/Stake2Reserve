import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Stake2Reserve", (m) => {
    const USDC_ADDRESS = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";
    const S2R_NFT_ADDRESS = "0x6A4A497F85f7Cb020d6a7Cd5e24A9D382d87ac02";
    const S2R_AAVE_ADDRESS = "0x8Be3602c00c552a709c75145a04A6529A0074d31";
    const s2r = m.contract("Stake2Reserve", [USDC_ADDRESS, S2R_NFT_ADDRESS, S2R_AAVE_ADDRESS]);
    return { s2r };
});
