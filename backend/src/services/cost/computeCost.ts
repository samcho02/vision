import { ComputePricing } from "../../data/pricingData";
import { SimulationInput } from "./totalCost";

export const computeCost = (input: SimulationInput, price: ComputePricing) => {
    // Request Cost per APIs
    const computeRequestCost = 
    (input.computeRequests / 1_000_000) 
    * price.requestPerMillion;

    // Computation Duration Cost
    const computeDurationCost = 
    input.computeRequests *
    input.avgExecutionMs *
    price.durationPerMs;

    return computeRequestCost + computeDurationCost;
};