import { StoragePricing } from "../../data/pricingData";
import { SimulationInput } from "./totalCost";

export const storageCost = (input: SimulationInput, price: StoragePricing) => {
    return input.storageGB * price.perGBMonth;
};