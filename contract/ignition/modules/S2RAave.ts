import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("S2RAave", (m) => {
    const s2rAave = m.contract("S2RAave");
    return { s2rAave };
});
