import closeWithGrace from "close-with-grace";
import { Server } from "./server.js";

// This is generally not a good practice for libraries,
// but since it is for internal use only, it is acceptable.
process.env.NODE_ENV ??= "production";

const port = process.env.PORT ?? 3000;
const server = new Server();
server.start(+port);

closeWithGrace({ delay: 1000 }, async ({ signal, err }) => {
	if (err) {
		console.error({ err }, "Server shutting down due to unhandled error");
	} else {
		console.warn(`Server shutting down due to ${signal}`);
	}
	await server.stop();
});
