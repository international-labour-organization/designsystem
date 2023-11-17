// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true, // Clear mocks on each test.
  testMatch: ["**/__tests__/*.js?(x)"], // How to find our tests.
  transform: {
    "^.+\\.js?$": `./jest-preprocess.js`, // Babel transforms.
  },
  setupFilesAfterEnv: [`./setup-test-env.js`], // Additional setup.
};
