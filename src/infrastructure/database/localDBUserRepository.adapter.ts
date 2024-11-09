import { User } from "../../domain/entities/user.entity.js";
import { InsertError } from "../../domain/errors/insert.error.js";
import { NotFoundError } from "../../domain/errors/notFound.error.js";
import type { UserRepository } from "../../domain/repositories/user.repository.js";
import { UUIDv7 } from "../../domain/value_objects/uuidv7.js";

export class LocalDBUserRepository implements UserRepository {
	async save(user: User): Promise<void> {
		try {
			// Simulate a random error. Makes tests flaky
			// if (Math.random() > 0.1) {
			// 	throw new InsertError("Error saving user", { user });
			// }
			// Simulate operation on remote repository
			await new Promise(resolve => setTimeout(resolve, 1000));
		} catch (error) {
			throw new InsertError("Error saving user", { user });
		}
	}

	async getById(id: UUIDv7): Promise<User> {
		try {
			// Simulate a random error. Makes tests flaky
			// if (Math.random() > 0.1) {
			// 	throw new NotFoundError("User not found", { id });
			// }

			// Simulate operation on remote repository
			await new Promise(resolve => setTimeout(resolve, 1000));

			const NOW = new Date();
			return new User({
				id: new UUIDv7(),
				name: "John Doe",
				createdAt: NOW,
				updatedAt: NOW,
			});
		} catch (error) {
			throw new NotFoundError("User not found", { id });
		}
	}
}
