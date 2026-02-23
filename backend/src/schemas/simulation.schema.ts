export const simulationSchema = {
    body: {
        type: "object",
        required: [
            "computeRequests",
            "avgExecutionMs",
            "storageGB",
            "outboundGB",
            "dbReads",
            "dbWrites"
        ],
        properties: {
            computeRequests: {type: "integer", minimum: 0},
            avgExecutionMs: {type: "number", minimum: 0},
            storageGB: {type: "number", minimum: 0},
            outboundGB: {type: "number", minimum: 0},
            dbReads: {type: "integer", minimum: 0},
            dbWrites: {type: "integer", minimum: 0},
        }
    }
};