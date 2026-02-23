import { FastifyInstance } from "fastify";
import { calculateCost } from "../services/cost/totalCost";
import { SimulationInput } from "../services/cost/totalCost";
import { simulationSchema } from "../schemas/simulation.schema";
import { pricing } from "../data/pricingData";

export default async function simulateRoute(app: FastifyInstance) {
    app.post("/simulate", 
        { schema: simulationSchema } , 
        async (request) => {
        const body = request.body as SimulationInput;
        const totalCost = calculateCost(body, pricing);
        return { totalCost };
        }
    ); 
}