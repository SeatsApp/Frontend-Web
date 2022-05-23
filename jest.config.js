// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js"

        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
    ],
    setupFilesAfterEnv: ['./jest/jest.setup.js'],
    testResultsProcessor: "jest-sonar-reporter",
    moduleFileExtensions: [
        "js",
        "ts",
        "tsx"
    ],
    transformIgnorePatterns: [
        'node_modules/(?!@react-native|react-native|expo-secure-store|expo-modules-core|@react-navigation|expo-web-browser|expo-barcode-scanner)'
    ],
    coverageReporters: [
        "json-summary",
        "text",
        "lcov"
    ]
};