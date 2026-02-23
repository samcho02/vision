export const pricing = {
  compute: {
    requestPerMillion: 0.25,
    durationPerMs: 0.000002
  },

  storage: {
    perGBMonth: 0.023
  },

  transfer: {
    outboundPerGB: 0.09
  },

  database: {
    readPerMillion: 0.20,
    writePerMillion: 1.00
  }
} as const;

export type Pricing = typeof pricing;
export type ComputePricing = Pricing["compute"];
export type StoragePricing = Pricing["storage"];
export type TransferPricing = Pricing["transfer"];
export type DatabasePricing = Pricing["database"];