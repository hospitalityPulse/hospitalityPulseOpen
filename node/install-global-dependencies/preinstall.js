var exec = require("child_process").exec,
    util = require("util");

var args = process.argv.slice(2),
    cmd_template = "(npm -g ls %s -parseable) || (npm install -g %s)";

(function (_args, _cmd_template) {
    var i = 0,
        ii = _args.length,
        arg = "",
        cmd = "";

    for (i, ii; i < ii; i++) {
        arg = _args[i];

        cmd = util.format(_cmd_template, arg, arg);
        exec(cmd, function (error, stdout, stderr) {
            console.log(stdout);
        });
    }
})(args, cmd_template);
