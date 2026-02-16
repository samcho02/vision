import { FastifyInstance } from "fastify";
import { calculateCost } from "../services/costCalculator";
import { SimulationInput } from "../services/costCalculator";
import { simulationSchema } from "../schemas/simulation.schema";

export default async function simulateRoute(app: FastifyInstance) {
    app.post("/simulate", 
        { schema: simulationSchema } , 
        async (request) => {
        const body = request.body as SimulationInput;
        const totalCost = calculateCost(body);
        return { totalCost };
        }
    ); 
}