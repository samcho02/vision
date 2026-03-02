// Shape of data
export interface ComputePricing {
  requestPerMillion: number;
  durationPerMs: number;
}

export interface StoragePricing {
  perGBMonth: number;
}

export interface TransferPricing {
  outboundPerGB: number;
}

export interface DatabasePricing {
  readPerMillion: number;
  writePerMillion: number;
}

export interface Pricing {
  compute: ComputePricing;
  storage: StoragePricing;
  transfer: TransferPricing;
  database: DatabasePricing;
}

// Dummy data
export const defaultPricing: Pricing = {
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
};