module.exports = {
    collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
    transform: {
        "\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/src/Tip-Calculator/__mocks__/styleMock.js',
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};