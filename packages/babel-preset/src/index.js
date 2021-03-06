

import { declare } from "@babel/helper-plugin-utils";


export default declare((api, options) => {

    // See docs about api at https://babeljs.io/docs/en/config-files#apicache
    api.assertVersion("^7.2.0");

    const {
        addModuleExports = false,
        modules,
        shebang = false,
        targets
    } = options;

    if(typeof modules !== "undefined" && typeof modules !== "boolean" && modules !== "auto"){
        throw new TypeError("@sweetlikepete/babel-preset-node only accepts `true`, `false`, or `\"auto\"` as the value of the \"modules\" option");
    }

    const debug = typeof options.debug === "boolean" ? options.debug : false;
    const development = typeof options.development === "boolean" ? options.development : api.cache.using(() => process.env.NODE_ENV === "development");

    const config = {
        plugins: [
            "@babel/plugin-proposal-class-properties",
            addModuleExports ? "add-module-exports" : null,
            shebang ? [
                "shebang",
                {
                    force: true,
                    replacement: "#!/usr/bin/env node"
                }
            ] : null
        ].filter(Boolean),
        presets: [
            [
                "@babel/preset-env",
                {
                    debug,
                    modules: modules === false ? false : "auto",
                    targets
                }
            ],
            [
                "@babel/preset-react",
                { development }
            ]
        ]
    };

    return config;

});
