import type { FastifyInstance } from "fastify";
import { CreateUserUseCase } from "../../../application/createUser/createUserUseCase.js";
import type { CreateUserUseCaseOutput } from "../../../application/createUser/createUserUseCase.output.js";
import { User } from "../../../domain/entities/user.entity.js";
import { InsertError } from "../../../domain/errors/insert.error.js";
import { NotFoundError } from "../../../domain/errors/notFound.error.js";
import { UUIDv7 } from "../../../domain/value_objects/uuidv7.js";
import { LocalDBUserRepository } from "../../database/localDBUserRepository.adapter.js";
import type { CreateUserDTO } from "../dtos/incoming/createUser.dto.js";

export async function usersController(fastify: FastifyInstance): Promise<void> {
	fastify.get<{ Params: { id: string } }>("/:id", async (req, res) => {
		try {
			const id = new UUIDv7(req.params.id);

			const result = await new LocalDBUserRepository().getById(id);

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
			const createUserUseCase = new CreateUserUseCase(
				new LocalDBUserRepository(),
			);

			const result = (await createUserUseCase.execute({
				user: new User({
					id: new UUIDv7(),
					name: req.body.name,
					createdAt: NOW,
					updatedAt: NOW,
				}),
			})) satisfies CreateUserUseCaseOutput;

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
