/** @type {import('jest').Config} */
const config = {  
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/types"
  ],
  coverageProvider: "v8",
  preset: 'ts-jest',
  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$",
  ],
  moduleNameMapper: {
    '^@/(.*)$': './src/$1'
  },
};

export default config;
