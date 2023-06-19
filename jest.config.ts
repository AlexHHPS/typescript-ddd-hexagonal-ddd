import type { JestConfigWithTsJest } from 'ts-jest';

// Source: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default jestConfig;
