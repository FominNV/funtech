import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { Linter } from "eslint";
import { ESLintRules } from "eslint/rules";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig: Linter.Config<ESLintRules>[] = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "next"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2023,
    },
    plugins: ["svg-jsx", "@typescript-eslint"],
    rules: {
      "svg-jsx/camel-case-dash": "warn",
      "svg-jsx/camel-case-colon": "warn",
      "svg-jsx/no-style-string": "warn",
    },
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "ignore",
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "error",
      semi: ["warn", "always"],
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;

