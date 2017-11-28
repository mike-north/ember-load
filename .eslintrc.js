module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember-suave/no-direct-property-access': 'off',
    'no-extra-boolean-cast': 0,
    'no-useless-escape': 0
  }
};
