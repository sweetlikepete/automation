

export default {
    env: {
        browser: true
    },
    extends: [
        "./rules/plugins/array-func",
        "./rules/plugins/compat",
        "./rules/plugins/eslint-comments",
        "./rules/plugins/import",
        "./rules/plugins/no-loops",
        "./rules/plugins/node",
        "./rules/plugins/optimize-regex",
        "./rules/plugins/promise",
        "./rules/plugins/react",
        "./rules/plugins/security",
        "./rules/plugins/unicorn",
        "./rules/best-practices",
        "./rules/errors",
        "./rules/es6",
        "./rules/node",
        "./rules/strict",
        "./rules/style",
        "./rules/variables"
    ].map(require.resolve),
    globals: {
        __dirname: false,
        __filename: false,
        Buffer: false,
        global: false,
        module: false,
        process: false,
        Promise: false,
        require: false,
        System: false
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "array-func",
        "compat",
        "eslint-comments",
        "import",
        "no-loops",
        "node",
        "optimize-regex",
        "promise",
        "react",
        "security",
        "unicorn"
    ],
    settings: {
        react: {
            version: "latest"
        }
    }
};
