module.exports = {
    runner: "groups",
    coverageDirectory: "./__coverage__",
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    // This is needed to prevent Jest from hijacking instanceof check with Errors.
    // Check https://github.com/facebook/jest/issues/2549 for a double dose of dispshittery
    testEnvironment: "jest-environment-node-single-context",
};