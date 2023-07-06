import { UserCriteria } from '../../../domain/domain1/user.criteria.js';
import { User } from '../../../domain/domain1/user.entity.js';
import { UserRepository } from '../../../domain/domain1/user.repository.js';

export class LocalDBUserRepository implements UserRepository {
	public async save(user: User): Promise<void> {
		console.log(`Saving user in local DB... {user: ${JSON.stringify(user)}}`);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}

	public async findByCriteria(criteria: UserCriteria): Promise<User> {
		console.log(`Finding user in local DB... {criteria: ${criteria}}`);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return new User('1', 'John Doe', new Date(), new Date());
	}
}
