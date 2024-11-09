import type { FastifyInstance } from "fastify";
import { usersController } from "../controller/users.controller.js";

export default async function BaseRouter(fastify: FastifyInstance) {
	fastify.register(usersController, {
		prefix: "/v1/users",
	});
	// Add more routes here
}
