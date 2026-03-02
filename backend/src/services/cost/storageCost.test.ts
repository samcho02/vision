import { describe, it, expect } from "vitest";
import { storageCost } from "./storageCost";
import { SimulationInput } from "./totalCost";
import { StoragePricing } from "../../data/pricingData";


describe("storageCost Test", () => {
    const baseInput: SimulationInput = {
        computeRequests: 0,
        avgExecutionMs: 0,
        storageGB: 0,
        outboundGB: 0,
        dbReads: 0,
        dbWrites: 0,
    };

    const basePricing: StoragePricing = {
        perGBMonth: 0
    }; 

    it("Test 1: Returns 0 when no usage", () => {
        const result = storageCost(baseInput, basePricing);
        expect(result).toBe(0);
    });

    it("Test 2: Returns request cost correctly ", () => {
        const input = { ...baseInput, storageGB: 2 };
        const pricing = { ...basePricing, perGBMonth: 3 }
        
        const result = storageCost(input, pricing);
        
        expect(result).toBe(6);
    });
});