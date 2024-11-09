import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Server } from "../src/infrastructure/server.js";

// Skipped since the localDB repo can error randomly (on purpose)
// so these tests are flaky
describe("Acceptance: Server", () => {
	const server = new Server();

	it("should return 200 OK when the home page is requested", async () => {
		const response = await server.app.inject({
			method: "GET",
			url: "/",
		});

		assert.strictEqual(response.statusCode, 200);
	});

	it("should return 201 CREATED when a POST request is made to create a user", async () => {
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
		assert.doesNotThrow(() => JSON.parse(response.body));
	});
});
