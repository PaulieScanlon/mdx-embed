module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  ignorePatterns: ['slides/'],
  rules: {
    // Next imports React into pages automatically
    'react/react-in-jsx-scope': 'off',
    // Next includes packages like MDX using their bundle
    'import/no-extraneous-dependencies': 'off',
    // Turn off const conversion
    'prefer-const': 'off',
  },
  env: {
    browser: true,
  },
}
