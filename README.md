# TypeScript | Node.js Bootstrap (template) for DDD/Hexagonal Architecture

This repository is intended to serve as a starting point if you want to bootstrap a more complexTypeScript project.

⚠️ It is meant for larger use cases where you need the extra complexity. However, it still has its shortcomings:
  - No proper DI framework/container/tool (just simple DI via constructor injection)
  - Logging tied to the framework (Fastify)
  - Ready for events, but not yet implemented

If these issues don't matter for your intended use, or you know how to fix them, this will be a fast way to run a quick script or program.
If you're looking for a simpler setup, check out my [TypeScript API Template](https://github.com/BoscoDomingo/typescript-api-skeleton) or my [TypeScript Simple Setup](https://github.com/BoscoDomingo/typescript-skeleton)

It is opinionated, but easily adaptable to your needs and preferences. Check out below for more details.

## Features

- [Pure DI](https://blog.ploeh.dk/2014/06/10/pure-di/). If you prefer using containers, check out:
  - [tsyringe](https://github.com/microsoft/tsyringe)
  - [typescript-ioc](https://www.npmjs.com/package/typescript-ioc)
  - [TypeDI](https://github.com/typestack/typedi)
  - [NestJS](https://nestjs.com/)
  - [InversifyJS](https://inversify.io/)
  - [Awilix](https://github.com/jeffijoe/awilix)
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [TypeScript](https://www.typescriptlang.org/)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
  - [tsx](https://tsx.is/) when running TS files directly
- [pnpm](https://pnpm.io/) for package management
- [Biome](https://biomejs.dev/) for formatting and linting.
- [Node Test Runner](https://nodejs.org/api/test.html) for testing.
- [Fastify](https://www.fastify.dev/) for the server with multiple plugins:
  - [cors](https://github.com/fastify/fastify-cors)
  - [helmet](https://github.com/fastify/fastify-helmet)
  - [rate-limit](https://github.com/fastify/fastify-rate-limit)
  - [sensible](https://github.com/fastify/fastify-sensible)
  - [type-provider-typebox](https://github.com/fastify/fastify-type-provider-typebox)
  - [swagger](https://github.com/fastify/fastify-swagger) - Commented
  - [swagger-ui](https://github.com/fastify/fastify-swagger-ui) - Commented
- [GitHub Action workflows](https://github.com/features/actions) set up to run build, tests and formatting (with an automatic commit) on push.

## Local dev

You'll need to duplicate the `.env.example` file and rename it to `.env` and to `.env.test` first.

| Action               | Command      | Description                                      |
| -------------------- | ------------ | ------------------------------------------------ |
| Install dependencies | `pnpm i`     | Installs the necessary dependencies              |
| Compile              | `pnpm build` | Transpiles TS into JS                            |
| Run                  | `pnpm start` | Runs the compiled JS                             |
| Dev                  | `pnpm dev`   | Runs the TypeScript code and watches for changes |

## Testing (Node Test Runner)

| Action | Command     | Description        |
| ------ | ----------- | ------------------ |
| Test   | `pnpm test` | Runs all the tests |

## Formatting (Biome)
| Action | Command       | Description                             |
| ------ | ------------- | --------------------------------------- |
| Format | `pnpm format` | Ensures code follows style guides       |
| Lint   | `pnpm lint`   | Runs the linter and points out mistakes |
