import { UUIDv7 } from "../../value_objects/uuidv7.js";

export class User {
	readonly id: UUIDv7 = new UUIDv7();
	name: string;
	readonly createdAt: Date;
	updatedAt: Date;

	constructor(input: {
		readonly id?: UUIDv7;
		readonly name: string;
		readonly createdAt: Date;
		readonly updatedAt: Date;
	}) {
		const { id, name, createdAt, updatedAt } = input;

		// These are just example validations, you should add your own
		if (createdAt > new Date()) {
			throw new Error("Invalid createdAt date");
		}

		if (updatedAt > new Date()) {
			throw new Error("Invalid updatedAt date");
		}

		this.id = id ?? new UUIDv7();
		this.name = name;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
