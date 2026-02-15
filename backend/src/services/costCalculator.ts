import { pricing } from "../data/pricingData";

// user given input for sim
export interface SimulationInput {
    computeRequests: number;
    avgExecutionMs: number;
    storageGB: number;
    outboundGB: number;
    dbReads: number;
    dbWrites: number;
}

export const calculateCost = (input: SimulationInput) => {
    // Request Cost per APIs
    const computeRequestCost = 
    (input.computeRequests / 1_000_000) 
    * pricing.compute.requestPerMillion;

    // Computation Duration Cost
    const computeDurationCost = 
    input.computeRequests *
    input.avgExecutionMs *
    pricing.compute.durationPerMs;

    // Storage Cost
    const storageCost = 
    input.storageGB *
    pricing.storage.perGBMonth;

    // Transfer cost
    const transferCost = 
    input.outboundGB * 
    pricing.transfer.outboundPerGB;

    // Database Read Cost
    const dbReadCost = 
    (input.dbReads / 1_000_000) * 
    pricing.database.readPerMillion;

    // Database Write Cost
    const dbWriteCost = 
    (input.dbWrites / 1_000_000) * 
    pricing.database.writePerMillion;

    // Total Cost
    const total =
    computeRequestCost + 
    computeDurationCost + 
    storageCost +
    transferCost +
    dbReadCost +
    dbWriteCost;

    // 4 decimal places
    return Number(total.toFixed(4));
};