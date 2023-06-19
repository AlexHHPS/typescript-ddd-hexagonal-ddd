import { UserCriteria } from './user.criteria.js';
import { User } from './user.entity.js';

export abstract class UserRepository {
	public abstract save(user: User): Promise<void>;
	public abstract findByCriteria(criteria: UserCriteria): Promise<User[]>;
}
