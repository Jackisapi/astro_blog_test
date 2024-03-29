module.exports = {
  useTabs: false,
  singleQuote: false,
  semi: true,
  endOfLine: "lf",
  bracketSameLine: false,
  trailingComma: "all",
  printWidth: 100,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
