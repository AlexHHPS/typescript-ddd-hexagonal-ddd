import { User } from "../../../domain/domain1/entities/user.entity.js";
import { InsertError } from "../../../domain/domain1/errors/insert.error.js";
import { NotFoundError } from "../../../domain/domain1/errors/notFound.error.js";
import type { UserRepository } from "../../../domain/domain1/repositories/user.repository.js";
import { UUIDv7 } from "../../../domain/value_objects/uuidv7.js";

export class LocalDBUserRepository implements UserRepository {
	async save(user: User): Promise<void> {
		console.log(`Saving user in local DB. {user: ${JSON.stringify(user)}}`);

		// Simulate a random error
		if (Math.random() > 0.1) {
			throw new InsertError("Error saving user", { user });
		}

		// Simulate operation on remote repository
		await new Promise(resolve => setTimeout(resolve, 1000));
	}

	async getById(id: UUIDv7): Promise<User> {
		console.log(`Finding user in local DB. {id: ${id.value}}`);

		// Simulate a random error
		if (Math.random() > 0.1) {
			throw new NotFoundError("User not found", { id });
		}

		// Simulate operation on remote repository
		await new Promise(resolve => setTimeout(resolve, 1000));

		const NOW = new Date();
		return new User({
			id: new UUIDv7(),
			name: "John Doe",
			createdAt: NOW,
			updatedAt: NOW,
		});
	}
}
