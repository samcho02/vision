import Fastify from "fastify"
import simulateRoute from "./routes/simulate";

const app = Fastify({ logger: true })

app.register(simulateRoute, { prefix: "/api"});

app.get("/", async () => {
    return { message: "Vision API running" };
});

const start = async () => {
    try {
        await app.listen({ port: 3000 });
        console.log("Server running on http://localhost:3000");
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();