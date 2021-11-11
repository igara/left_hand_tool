module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-styled-components',
  ],
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        ignoreFiles: ['**/*.css'],
      },
    ],
  ],
  ignoreFiles: ['**/node_modules/**'],
};
