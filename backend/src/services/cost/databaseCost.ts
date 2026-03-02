import { DatabasePricing } from "../../data/pricingData";
import { SimulationInput } from "./totalCost";

export const databaseCost = (input: SimulationInput, price: DatabasePricing) => {
    // Database Read Cost
    const dbReadCost = 
    (input.dbReads / 1_000_000) * 
    price.readPerMillion;

    // Database Write Cost
    const dbWriteCost = 
    (input.dbWrites / 1_000_000) * 
    price.writePerMillion;
    
    return dbReadCost + dbWriteCost;     
};