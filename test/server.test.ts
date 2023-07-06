import { Server } from '../src/server.js';

describe('Server', () => {
	it('Server should be correctly initialised', () => {
		console.log = jest.fn();

		const sut = new Server();

		expect(sut).toBeInstanceOf(Server);
		expect(sut.start).toBeDefined();
	});
});
