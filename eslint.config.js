import { next } from "@next/eslint-plugin-next";

export default [
  next(),
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
