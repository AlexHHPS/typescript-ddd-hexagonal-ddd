import type { User } from "../entities/user.entity.js";
import type { UUIDv7 } from "../value_objects/uuidv7.js";

export interface UserRepository {
	save(user: User): Promise<void>;
	getById(id: UUIDv7): Promise<User>;
	// getByCriteria(criteria: CompositeCriteria): Promise<User>; // TO-DO
}
