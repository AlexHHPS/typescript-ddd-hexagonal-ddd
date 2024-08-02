import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { UUIDv7 } from "@src/domain/value_objects/uuidv7.ts";

describe("Unit: UUIDv7", () => {
	it("should throw an error when the id is not 32 characters long", () => {
		assert.throws(
			() => {
				new UUIDv7("123456789012345");
			},
			{ message: "Invalid UUIDv7 format" },
		);
	});

	it("should throw an error if the id is not 32 characters long", () => {
		assert.throws(
			() => {
				new UUIDv7("1234567890123456");
			},
			{ message: "Invalid UUIDv7 format" },
		);
	});
});
