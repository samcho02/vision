import { FastifyInstance } from "fastify";
import { calculateCost } from "../services/costCalculator";
import { SimulationInput } from "../services/costCalculator";

export default async function simulateRoute(app: FastifyInstance) {
    app.post("/simulate", async (request, reply) => {
        const body = request.body as SimulationInput;

        const totalCost = calculateCost(body);

        return { totalCost };
    }); 
}