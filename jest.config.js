module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
    '!src/assets/**',
    '!src/types/*',
    '!src/store/**',
    '!src/services/**',
    '!src/**/*.service.ts',
    '!src/**/*.routes.ts',
    '!src/main.ts',
    '!src/App.vue',
    '!src/**/*.d.*',
    '!src/tests/**'
  ],
  coverageDirectory: 'coverage',
  testResultsProcessor: 'jest-sonar-reporter'
}
