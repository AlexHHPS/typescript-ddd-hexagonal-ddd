import type { User } from "../../domain/entities/user.entity.js";

export class CreateUserUseCaseInput {
	constructor(readonly user: User) {}
}
