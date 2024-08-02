import type { User } from "../../../domain/domain1/entities/user.entity.js";
import type { UserRepository } from "../../../domain/domain1/repositories/user.repository.js";

import type { FindUserUseCaseInput as GetUserUseCaseInput } from "./getUserUseCase.input.js";

export class GetUserUseCase {
	constructor(private readonly repository: UserRepository) {}

	async execute(input: GetUserUseCaseInput): Promise<User> {
		const result = await this.repository.getById(input.id);
		return result;
	}
}
