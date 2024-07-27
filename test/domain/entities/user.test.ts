import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { User } from "@src/domain/domain1/entities/user.entity.ts";
import { UUIDv7 } from "@src/domain/value_objects/uuidv7.ts";

describe("Unit: User", () => {
	it("should throw an error when the id is not 32 characters long", () => {
		assert.throws(
			() => {
				new User({
					id: new UUIDv7("123456789012345"),
					name: "John Doe",
					createdAt: new Date(),
					updatedAt: new Date(),
				});
			},
			{ message: "Invalid UUIDv7 format" },
		);
	});

	it("should throw an error if the createdAt date is in the future", () => {
		assert.throws(
			() => {
				new User({
					id: new UUIDv7(),
					name: "John Doe",
					createdAt: new Date(Date.now() + 1000),
					updatedAt: new Date(),
				});
			},
			{ message: "Invalid createdAt date" },
		);
	});

	it("should throw an error if the updatedAt date is in the future", () => {
		assert.throws(
			() => {
				new User({
					id: new UUIDv7(),
					name: "John Doe",
					createdAt: new Date(),
					updatedAt: new Date(Date.now() + 1000),
				});
			},
			{ message: "Invalid updatedAt date" },
		);
	});
});
