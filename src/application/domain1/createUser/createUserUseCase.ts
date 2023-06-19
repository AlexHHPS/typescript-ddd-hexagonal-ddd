import { UserRepository } from '../../../domain/domain1/user.repository.js';

import { CreateUserUseCaseInput } from './createUserUseCase.input.js';
import { CreateUserUseCaseOutput } from './createUserUseCase.output.js';

export class CreateUserUseCase {
	constructor(private readonly repository: UserRepository) {}

	async execute({ user }: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
		await this.repository.save(user);
		// TO-DO: Send the createdUser event
		return { success: true };
	}
}
