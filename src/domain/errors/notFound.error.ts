export class NotFoundError extends Error {
	constructor(message: string, data: Record<string, unknown>) {
		super(`${message}: ${JSON.stringify(data)}`);
	}
}
