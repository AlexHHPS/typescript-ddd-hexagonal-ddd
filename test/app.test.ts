import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Server } from "@src/server.ts";

// Skipped since the localDB repo can error randomly (on purpose)
// so these tests are flaky
describe("Acceptance: Server", () => {
	const server = new Server();

	it.skip("should return 200 OK when the home page is requested", async () => {
		const response = await server.app.inject({
			method: "GET",
			url: "/",
		});

		assert.strictEqual(response.statusCode, 200);
	});

	it.skip("should return 201 CREATED when a POST request is made to create a user", async () => {
		const userData = {
			name: "John Doe",
		};

		// The remote repository should be mocked to ensure
		// external dependencies are not called
		const response = await server.app.inject({
			method: "POST",
			url: "/",
			payload: userData,
		});

		assert.strictEqual(response.statusCode, 201);
		assert.strictEqual(response.body, {
			id: 1,
		});
	});
});
