import { describe, it, expect } from "vitest";
import { SimulationInput, calculateCost } from "./totalCost";
import { Pricing } from "../../data/pricingData";

describe("totalCost Test", () => {
    const baseInput: SimulationInput = {
        computeRequests: 0,
        avgExecutionMs: 0,
        storageGB: 0,
        outboundGB: 0,
        dbReads: 0,
        dbWrites: 0,
    };

    const basePricing: Pricing = {
        compute: {
            requestPerMillion: 0,
            durationPerMs: 0
        },
        storage: {
            perGBMonth: 0
        },
        transfer: {
            outboundPerGB: 0
        },
        database: {
            readPerMillion: 0,
            writePerMillion: 0
        }
    };

    it("Test 1: Returns 0 when no usage", () => {
        const result = calculateCost(baseInput, basePricing);

        expect(result).toEqual({
            compute: 0,
            storage: 0,
            transfer: 0,
            database: 0,
            total: 0,
        });
    }); 

    it("Test 2: Calculates request cost correctly", () => {
        const input: SimulationInput = {
            computeRequests: 1_000_000,
            avgExecutionMs: 1000,
            storageGB: 2,
            outboundGB: 3,
            dbReads: 1_000_000,
            dbWrites: 1_000_000,
        };

        const pricing: Pricing = {
            compute: {
                requestPerMillion: 1,
                durationPerMs: 0
            },
            storage: {
                perGBMonth: 2
            },
            transfer: {
                outboundPerGB: 3
            },
            database: {
                readPerMillion: 1,
                writePerMillion: 2
            }
        };

        const result = calculateCost(input, pricing);
        
        // Calculate expected
        const expectedCompute = 1; // 1 mil * 1 + 0 duration
        const expectedStorage = 4; // 2 GB * 2  
        const expectedTransfer = 9; // 3 GB * 3
        const expectedDatabase = 3; // 1 + 2

        const expectedTotal = 
            expectedCompute + 
            expectedStorage + 
            expectedTransfer + 
            expectedDatabase;
        
        expect(result.compute).toBe(expectedCompute);
        expect(result.storage).toBe(expectedStorage);
        expect(result.transfer).toBe(expectedTransfer);
        expect(result.database).toBe(expectedDatabase);
        expect(result.total).toBe(expectedTotal);
    });
});