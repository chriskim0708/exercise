module.exports = {
  moduleFileExtensions: ["js", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js"
  },
  testMatch: [
    "<rootDir>/**/*.test.(js)",
    "<rootDir>/(tests/unit/**/*.spec.(js)|**/__tests__/*.(js))"
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
