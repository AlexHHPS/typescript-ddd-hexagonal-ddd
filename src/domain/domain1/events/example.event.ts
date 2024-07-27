export class ExampleEvent {
	constructor(
		public readonly message: string,
		public readonly data: Map<string, unknown>,
		public readonly createdAt: Date,
		public readonly receivedAt: Date,
	) {}
}
