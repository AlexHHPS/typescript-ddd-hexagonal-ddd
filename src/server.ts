import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import fastifyRateLimit from "@fastify/rate-limit";
import sensible from "@fastify/sensible";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import type { FastifyInstance, FastifyLoggerOptions } from "fastify";
import fastify from "fastify";
import type { PinoLoggerOptions } from "fastify/types/logger.js";
import BaseRouter from "./infrastructure/routes/base.router.js";

export class Server {
	readonly app: FastifyInstance;
	private readonly loggingConfigs: Record<
		string,
		{
			logging: boolean | (FastifyLoggerOptions & PinoLoggerOptions);
			disableRequestLogging?: boolean;
		}
	> = {
		development: {
			logging: {
				level: process.env.LOG_LEVEL ?? "debug",
				transport: {
					targets: [
						{
							target: "@mgcrea/pino-pretty-compact",
							options: {
								translateTime: "SYS:HH:MM:ss.l Z",
								ignore: "pid,hostname",
								colorize: true,
								singleLine: true,
							},
						},
						{
							target: "pino/file",
							options: {
								destination: `./logs/${new Date().toISOString()}.log`,
								ignore: "pid,hostname",
								mkdir: true,
							},
						},
					],
				},
			},
			disableRequestLogging: false,
		},
		production: { logging: true },
		test: { logging: false },
	} as const;

	constructor() {
		this.app = fastify({
			logger: this.loggingConfigs[process.env.NODE_ENV ?? "production"].logging,
			disableRequestLogging:
				this.loggingConfigs[process.env.NODE_ENV ?? "production"]
					.disableRequestLogging,
		}).withTypeProvider<TypeBoxTypeProvider>();

		this.app.register(helmet);
		this.app.register(cors);
		this.app.register(sensible);
		this.app.register(fastifyRateLimit, {
			max: 10,
			timeWindow: 1000,
			allowList: ["127.0.0.1"],
		});

		// To register Swagger/OpenAPI documentation
		// this.app.register(swagger, {
		// 	swagger: {
		// 		info: {
		// 			title: "Payment Reconciliation API",
		// 			description: "Testing the Fastify swagger API",
		// 			version: pkg.default.version,
		// 		},
		// 	},
		// });
		// this.app.register(swaggerUI, {
		// 	routePrefix: "/docs",
		// 	uiConfig: {
		// 		deepLinking: true,
		// 	},
		// });

		this.app.setErrorHandler((error, _request, reply) => {
			if (error.statusCode === 429) {
				reply.tooManyRequests("Rate limit exceeded. Try again later.");
			}
			reply.send(error);
		});

		// Single router setup. Add more routers here
		this.app.register(BaseRouter);
	}

	start(port = 3000): void {
		this.app.listen({ port }, (err, address) => {
			if (err) {
				this.app.log.error(err);
				process.exit(1);
			}
			console.log(`Server litening on ${address}`);
		});
	}

	async stop(): Promise<void> {
		await this.app.close();
	}
}
