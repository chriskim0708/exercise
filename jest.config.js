module.exports = {
  moduleFileExtensions: ["js", "json"],
  transform: {
    "^.+\\.(js)?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  testMatch: [
    "<rootDir>/**/*.test.(js)",
    "<rootDir>/(tests/unit/**/*.spec.(js)|**/__tests__/*.(js))"
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
