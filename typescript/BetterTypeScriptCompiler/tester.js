const jasmine = require("jasmine");
const TSConsoleReporter = require("jasmine-ts-console-reporter");
const jasmineRunner = new jasmine();
jasmineRunner.loadConfig({
    "spec_dir": "./build",
    "spec_files": [
        "**/*.spec.js"
    ],
    "helpers": [],
    "stopSpecOnExpectationFailure": false,
    "random": true
});
jasmineRunner.env.clearReporters();
jasmineRunner.env.addReporter(new TSConsoleReporter());
jasmineRunner.execute();
