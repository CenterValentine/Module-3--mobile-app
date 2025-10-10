/* eslint-env node - One lint config with per-app env tweaks.*/
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier"
  ],
  settings: {
    react: { version: "detect" }
  },
  env: { node: true, es2022: true },
  ignorePatterns: ["dist", "build"],
  overrides: [
    {
      files: ["apps/web/**/*.{ts,tsx}"],
      env: { browser: true }
    },
    {
      files: ["apps/mobile/**/*.{ts,tsx}"],
      env: { "react-native/react-native": true }
    }
  ]
};