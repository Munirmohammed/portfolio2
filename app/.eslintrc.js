module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    // this was compalining on "url:./styles.css" files
    'import/extensions': 'off',
  },
}
