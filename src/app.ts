import dotenv from 'dotenv';

import { Server } from './server.js';

dotenv.config();

export default function main(): void {
	const port = process.env.PORT ?? 3000;
	const server = new Server();
	server.start(+port);
}
