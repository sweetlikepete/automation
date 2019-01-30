

/*
 * React specific linting rules for ESLint
 *
 * https://github.com/yannickcr/eslint-plugin-react
 */


export default {

    extends: [
        "./base",
        "./jsx"
    ].map(require.resolve)

};
