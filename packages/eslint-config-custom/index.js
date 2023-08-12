module.exports = {
    extends: ["next", "turbo", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
