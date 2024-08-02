import type { FastifyInstance } from "fastify";
import { CreateUserUseCase } from "../../../application/domain1/createUser/createUserUseCase.js";
import type { CreateUserUseCaseOutput } from "../../../application/domain1/createUser/createUserUseCase.output.js";
import { User } from "../../../domain/domain1/entities/user.entity.js";
import { InsertError } from "../../../domain/domain1/errors/insert.error.js";
import { NotFoundError } from "../../../domain/domain1/errors/notFound.error.js";
import { UUIDv7 } from "../../../domain/value_objects/uuidv7.js";
import { LocalDBUserRepository } from "../../outgoing/database/localDBUserRepository.adapter.js";
import type { CreateUserDTO } from "../dtos/createUser.dto.js";

const useCaseExample: CreateUserUseCase = new CreateUserUseCase(
	new LocalDBUserRepository(),
);

export async function exampleController(
	fastify: FastifyInstance,
): Promise<void> {
	fastify.get<{ Params: { id: string } }>("/:id", async (req, res) => {
		try {
			const id = new UUIDv7(req.params.id);

			const result: User = await new LocalDBUserRepository().getById(id);

			res.status(200).send(result);
		} catch (error) {
			req.log.error(error as Error);
			if (error instanceof NotFoundError) {
				return res.notFound();
			}
			res.badRequest((error as Error).message);
		}
	});

	fastify.post<{ Body: CreateUserDTO }>("/", async (req, res) => {
		try {
			const NOW = new Date();
			const result: CreateUserUseCaseOutput = await useCaseExample.execute({
				user: new User({
					id: new UUIDv7(),
					name: req.body.name,
					createdAt: NOW,
					updatedAt: NOW,
				}),
			});

			res.status(201).send(result);
		} catch (error) {
			req.log.error(error as Error);
			// Do error handling here, to decide if to return a 400 or 500
			if (error instanceof InsertError) {
				return res.internalServerError();
			}
			res.badRequest((error as Error).message);
		}
	});
}
