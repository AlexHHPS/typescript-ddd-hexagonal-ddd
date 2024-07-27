import type { UUIDv7 } from "../../value_objects/uuidv7.js";
import type { User } from "../entities/user.entity.js";

export interface UserRepository {
	save(user: User): Promise<void>;
	getById(id: UUIDv7): Promise<User>;
}
