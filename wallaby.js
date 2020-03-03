module.exports = {
  files: [
    'src/**/*.js',
    '!src/**/*.test.js',
  ],
  tests: [
    'src/**/*.test.js',
  ],
  env: {
    type: 'node',
  },
  testFramework: 'mocha',
}
