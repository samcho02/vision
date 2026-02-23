import { TransferPricing } from "../../data/pricingData";
import { SimulationInput } from "./totalCost";

export const transferCost = (input: SimulationInput, price: TransferPricing) => {
    return input.outboundGB * price.outboundPerGB;
};
