import { UserRepository } from '../../domain/domain1/user.repository.js';

import { CreateUserUseCaseInput } from './ExampleUseCase.input.js';
import { CreateUserUseCaseOutput } from './ExampleUseCase.output.js';

export class CreateUser {
	constructor(private readonly repository: UserRepository) {}

	async execute({ user }: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
		await this.repository.save(user);
		return { success: true };
	}
}
