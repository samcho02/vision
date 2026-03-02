import { describe, it, expect } from "vitest";
import { databaseCost } from "./databaseCost";
import { SimulationInput } from "./totalCost";
import { DatabasePricing } from "../../data/pricingData";

describe("databaseCost Test", () => {
    const baseInput : SimulationInput = {
        computeRequests: 0,
        avgExecutionMs: 0,
        storageGB: 0,
        outboundGB: 0,
        dbReads: 0,
        dbWrites: 0,
    };

    const basePricing : DatabasePricing = {  
        readPerMillion: 0,
        writePerMillion: 0
    };
    
    it("Test 1: Returns 0 when no usage", () => {
        const result = databaseCost(baseInput, basePricing);
        expect(result).toBe(0);
    });

    it("Test 2: Returns request cost correctly", () => {
        const input = {
            ...baseInput,
            dbReads: 1_000_000,
            dbWrites: 1_000_000
        };
        
        const pricing = {
            ...basePricing,
            readPerMillion: 2,
            writePerMillion: 2
        }

        const result = databaseCost(input, pricing);
        expect(result).toBe(4);
    });
});