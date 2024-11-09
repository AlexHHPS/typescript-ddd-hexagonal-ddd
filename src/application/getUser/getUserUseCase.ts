import type { User } from "../../domain/entities/user.entity.js";
import type { UserRepository } from "../../domain/repositories/user.repository.js";
import type { GetUserUseCaseInput } from "./getUserUseCase.input.js";

export class GetUserUseCase {
	constructor(private readonly repository: UserRepository) {}

	async execute(input: GetUserUseCaseInput): Promise<User> {
		const result = await this.repository.getById(input.id);
		return result;
	}
}
