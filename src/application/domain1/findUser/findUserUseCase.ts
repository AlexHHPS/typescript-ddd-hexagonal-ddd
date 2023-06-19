import { User } from '../../../domain/domain1/user.entity.js';
import { UserRepository } from '../../../domain/domain1/user.repository.js';

import { FindUserUseCaseInput } from './findUserUseCase.input.js';

export class FindUseUseCase {
	constructor(private readonly repository: UserRepository) {}

	async execute(input: FindUserUseCaseInput): Promise<User> {
		const result = await this.repository.findByCriteria({ id: input.id });
		// TO-DO: Send the UserFound event
		return result;
	}
}
