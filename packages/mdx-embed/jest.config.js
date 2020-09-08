module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/file-mock.js',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts', '!src/**/*.stories.tsx'],
};
