import { Pricing } from "../../data/pricingData";
import { roundTo } from "../../utils/math";
import { computeCost } from "./computeCost";
import { databaseCost } from "./databaseCost";
import { storageCost } from "./storageCost";
import { transferCost } from "./transferCost";

// user given input for sim
export interface SimulationInput {
    computeRequests: number;
    avgExecutionMs: number;
    storageGB: number;
    outboundGB: number;
    dbReads: number;
    dbWrites: number;
}

export const calculateCost = (input: SimulationInput, pricing: Pricing) => {
    const compute = computeCost(input, pricing.compute);
    const storage = storageCost(input, pricing.storage);
    const transfer = transferCost(input, pricing.transfer);
    const database = databaseCost(input, pricing.database);

    // Total Cost
    const total = 
    compute + 
    storage + 
    transfer +
    database;

    return {
        compute: roundTo(compute, 4),
        storage: roundTo(storage, 4),
        transfer: roundTo(transfer, 4),
        database: roundTo(database, 4),
        total: roundTo(total, 4),
    };
};