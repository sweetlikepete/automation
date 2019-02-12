

import program from "commander";

import packageJSON from "../../package.json";


program
.version(packageJSON.version)


program
.command("build")
.option("-s, --setup_mode [mode]", "Which setup mode to use")
.action((options) => {

    console.log(options.setup_mode);

});


program
.command("clean")
.action((command, options) => {

    console.log(command, options);

});


program
.command("deploy")
.action((command, options) => {

    console.log(command, options);

});


program
.command("lint")
.action((command, options) => {

    console.log(command, options);

});


program
.command("local")
.action((command, options) => {

    console.log(command, options);

});


program
.command("optimize")
.action((command, options) => {

    console.log(command, options);

});


program
.command("promote")
.action((command, options) => {

    console.log(command, options);

});

program.parse(process.argv);