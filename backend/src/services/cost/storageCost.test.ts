import { describe, it, expect } from "vitest";
import { storageCost } from "./storageCost";
import { SimulationInput } from "./totalCost";
import { StoragePricing } from "../../data/pricingData";


describe("storageCost Test", () => {


    it("Test 1: Returns 0 when no usage", () => {
        const input = {
            storageGB: 0
        };
    
        const pricing = {
            perGBMonth: 0
        };

        const result = storageCost(input as SimulationInput, 
            pricing as StoragePricing);
        expect(result).toBe(0);
    });

    it("Test 2: Returns request cost correctly ", () => {
        const input = {
            storageGB: 2
        };
        const pricing = { 
            perGBMonth: 3
        }
        const result = storageCost(input as SimulationInput,
            pricing as StoragePricing);
        expect(result).toBe(6);
    });
});