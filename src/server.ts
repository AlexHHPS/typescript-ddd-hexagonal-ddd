import express, { Express, json, urlencoded } from 'express';

import { ExampleController } from './infrastructure/incoming/controller/example.controller.js';

export class Server {
	private readonly app: Express;
	constructor() {
		this.app = express();
		this.app.use(json());
		this.app.use(urlencoded({ extended: true }));

		// DI (Composition Root)
		const controller = new ExampleController();

		this.app.route('/').get(controller.findUser);
	}

	start(port = 3000): void {
		this.app.listen(port, () => {
			console.log(`Server started at http://localhost:${port}`);
		});
	}
}
