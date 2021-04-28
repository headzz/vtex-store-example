module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
