import type { UserRepository } from "../../../domain/domain1/repositories/user.repository.js";
import type { CreateUserUseCaseInput } from "./createUserUseCase.input.js";
import type { CreateUserUseCaseOutput } from "./createUserUseCase.output.js";

export class CreateUserUseCase {
	constructor(private readonly repository: UserRepository) {}

	async execute({
		user,
	}: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
		await this.repository.save(user);
		// TO-DO: Send the createdUser event
		return { id: user.id };
	}
}
