import type { User } from "../../../domain/domain1/entities/user.entity.js";

export class CreateUserUseCaseInput {
	constructor(readonly user: User) {}
}
