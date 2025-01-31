import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            semi: ["warn", "always"]
        },
        files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.vue"],
        ignores: ["node_modules", "dist", "build"]
    }
];
