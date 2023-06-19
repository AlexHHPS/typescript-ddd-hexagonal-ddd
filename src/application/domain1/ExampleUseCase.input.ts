import { User } from '../../domain/domain1/user.entity.js';

export class CreateUserUseCaseInput {
	constructor(readonly user: User) {}
}
