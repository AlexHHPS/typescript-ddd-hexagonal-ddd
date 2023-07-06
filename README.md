# TypeScript | Node.js Bootstrap (template)

This repository is intended to serve as a starting point if you want to bootstrap a quick TypeScript project.

⚠️ It is meant for simple use cases where you don't need the extra complexity, just a barebones, simple Node.js app. This has its shortcomings:
  - No proper DI framework/container/tool
  - No [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) structuring (I strongly suggest a DDD approach)
    - Coupling of infrastructure and application layers unless you separate them yourself

If these issues don't matter for your intended use, or you know how to fix them, this will be a fast way to run a quick script or program. If you're looking for a more scalable strategy, check my TS DDD template (coming soon™) or if you want a simple API, check out my [TypeScript API Template](https://github.com/BoscoDomingo/typescript-api-skeleton)

## Features

- [TypeScript](https://www.typescriptlang.org/) (v5)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Pure DI](https://blog.ploeh.dk/2014/06/10/pure-di/)
  - If you prefer using containers, check out [tsyringe](https://github.com/microsoft/tsyringe), [typescript-ioc](https://www.npmjs.com/package/typescript-ioc), [TypeDI](https://github.com/typestack/typedi), [NestJS](https://nestjs.com/), [InversifyJS](https://inversify.io/) or [Awilix](https://github.com/jeffijoe/awilix)
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to make Prettier and ESLint play nice together.
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) to allow for sorting the imports automatically.
  - [typescript-eslint](https://typescript-eslint.io/) for TS-specific rules
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest) for Jest-specific rules
- [Jest](https://jestjs.io) (can be substituted with [`tap`](https://www.npmjs.com/package/tap))
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and formatting+linting on push

## Local dev

| Action               | Command              | Description                                          |
| -------------------- | -------------------- | ---------------------------------------------------- |
| Install dependencies | `npm i`              | Installs the necessary dependencies                  |
| Compile              | `npm run build`      | Transpiles TS into JS                                |
| Compile (Production) | `npm run build:prod` | Transpiles TS into JS removing unnecessary artifacts |
| Run                  | `npm run start`      | Runs the compiled JS                                 |
| Dev                  | `npm run dev`        | Runs the TypeScript code and watches for changes     |
| Debug                | `npm run dev:debug`  | Same as Dev but also attaches the debugger           |

## Testing

### Jest
| Action | Command        | Description        |
| ------ | -------------- | ------------------ |
| Test   | `npm run test` | Runs all the tests |

## Formatting
| Action | Command          | Description                       |
| ------ | ---------------- | --------------------------------- |
| Format | `npm run format` | Ensures code follows style guides |


## Linting
| Action     | Command            | Description                                    |
| ---------- | ------------------ | ---------------------------------------------- |
| Lint       | `npm run lint`     | Runs the linter and points out mistakes        |
| Lint + Fix | `npm run lint:fix` | Same as above but fixing auto-fixable problems |
