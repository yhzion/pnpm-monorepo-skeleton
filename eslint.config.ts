import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const tsFiles = {
  files: ["**/*.ts", "**/*.tsx"],
  ignores: [
    "**/dist/**",
    "**/node_modules/**",
    "**/build/**",
    "**/*.config.ts",
    "**/coverage/**",
  ],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: [
        "./tsconfig.json",
        "./packages/*/tsconfig.json",
        "./apps/*/tsconfig.json",
      ],
    },
  },
  plugins: {
    "@typescript-eslint": typescript,
  },
  rules: {
    ...typescript.configs["recommended"].rules,
  },
};

const configFiles = {
  files: ["**/*.config.ts"],
  ignores: ["**/coverage/**"],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
};

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        window: true,
        document: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },
  tsFiles,
  configFiles,
];
