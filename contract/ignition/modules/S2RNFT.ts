import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("S2RNFT2", (m) => {
    const s2rNFT = m.contract("S2RNFT");
    return { s2rNFT };
});