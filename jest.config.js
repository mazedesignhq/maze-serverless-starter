module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(.*\\.test\\.(tsx?|jsx?))$',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
};
