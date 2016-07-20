var config = getconfig();

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");

    grunt.initConfig(config);

    grunt.registerTask("test", ["karma"]);
};
module.exports.cfg = config;

function getconfig() {
    var config = {
        karma: {
            "default": {
                configFile: "./jstests/karma.conf.js"
            }
        },
        uglify: {
            options: {
                sourceMap: false,
                sourceMapIncludeSources: false
            },
            "default": {
                "files": {
                    "apploader.min.js": [
                        "apploader.js"
                    ]
                }
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            "default": {
                "files": [
                    "Gruntfile.js",
                    "apploader.js"
                ],
                "tasks": [
                    "uglify:default"
                ]
            }
        }
    };

    return config;
}
