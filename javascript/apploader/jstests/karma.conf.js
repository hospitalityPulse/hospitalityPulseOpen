module.exports = function (config) {
    config.set({
        autoWatch: true,
        basePath: "../",
        browsers: ["PhantomJS"],
        colors: true,
        files: [
            {pattern: "src-reference.js", watched: false, included: false, served: true, nocache: false},
            "apploader.js",
            "jstests/unit/**/*.spec.js"
        ],
        frameworks: ["jasmine"],
        reporters: ["dots"]
    });
};
