module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Чтобы называть интерфейсы с префиксом I
    "@typescript-eslint/interface-name-prefix": "off",
    // Чтобы с бека получать access_token и подобное не в camelcase
    "@typescript-eslint/camelcase": "off",
    // Чтобы использовать тип any
    "@typescript-eslint/no-explicit-any": "off"
  }
};
