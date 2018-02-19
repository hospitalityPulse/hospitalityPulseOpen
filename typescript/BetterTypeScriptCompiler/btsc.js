
// Run as expected.
// If any files IN SOURCE are created -- restart tsc.
// If any files IN SOURCE are deleted -- stop tsc -- delete mapped output file -- start tsc.

// 1) Get SOURCe directory.
// 2) Add watch to SOURCE directory -- recursively.

const fs = require("fs");
const { exec } = require("child_process");

const globDir = "./frontend/**/*.ts";
exec("find . -wholename '" + globDir + "'", (e, stdout, stderr) => {
    const lines = stdout.split("\n");
});
