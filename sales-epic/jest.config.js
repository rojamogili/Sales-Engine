/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {

  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["src/migration"],
  coveragePathIgnorePatterns: [
    "/src/migration", 
    "src/migration", 
    "node_modules",
    "src/commons/common.ts"
  ],
};