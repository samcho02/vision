import { describe, it, expect } from "vitest";
import { transferCost } from "./transferCost";
import { SimulationInput } from "./totalCost";
import { DatabasePricing, TransferPricing } from "../../data/pricingData";

describe("transferCost Test", () => {
    const baseInput : SimulationInput = {
        computeRequests: 0,
        avgExecutionMs: 0,
        storageGB: 0,
        outboundGB: 0,
        dbReads: 0,
        dbWrites: 0,
    }

    const basePricing : TransferPricing = {
        outboundPerGB: 0
    }
    
    it("Test 1: Returns 0 when no usage", () => {
        const input = {
            outboundGB: 0
        }

        const pricing = {
            outboundPerGB: 0
        }

        const res = transferCost(baseInput, basePricing);
        expect(res).toBe(0);
    });

    it("Test 2: Returns request cost correctly", () => {
        const input = {
            ...baseInput,
            outboundGB: 2
        }

        const pricing = {
            ...basePricing,
            outboundPerGB: 3
        }

        const res = transferCost(input, pricing);
        expect(res).toBe(6);
    });
}); 