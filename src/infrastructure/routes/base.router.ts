import type { FastifyInstance } from "fastify";
import { exampleController } from "../incoming/controller/example.controller.js";

export default async function BaseRouter(fastify: FastifyInstance) {
	fastify.register(exampleController);
	// Add more routes here
}
