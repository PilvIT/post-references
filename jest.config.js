// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
