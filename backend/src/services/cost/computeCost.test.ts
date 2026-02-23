import { describe, it, expect } from "vitest";
import { computeCost } from "./computeCost";
import { ComputePricing } from "../../data/pricingData";
import { SimulationInput } from "./totalCost";

describe("computeCost Test", () => {
    const baseInput = {
        computeRequests: 0,
        avgExecutionMs: 0
    };

    const basePricing = {
        requestPerMillion: 1,
        durationPerMs: 1
    };

    it ("Test 1: Returns 0 when no usage", () => {
        const result = computeCost(baseInput as SimulationInput, basePricing as ComputePricing);
        expect(result).toBe(0);
    });

    it ("Test 2: Calculates request cost correctly", () => {
        const input = {
            ...baseInput,
            computeRequests: 1_000_000
        };

        const pricing = {
            ...basePricing,
            requestPerMillion: 3,
            durationPerMs: 0
        };

        const result = computeCost(input as SimulationInput, pricing as ComputePricing);
        expect(result).toBe(3);
    });
});