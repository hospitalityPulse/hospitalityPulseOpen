"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DirectoryReader = /** @class */ (function () {
    function DirectoryReader() {
    }
    DirectoryReader.prototype.readDirectoriesFrom = function (directory) {
        var files = fs.readdirSync(directory, { encoding: "utf8" });
        var subDirectories = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var absFile = directory + "/" + file;
            var stat = fs.statSync(absFile);
            if (stat.isDirectory()) {
                subDirectories.push(absFile);
            }
        }
        return subDirectories;
    };
    return DirectoryReader;
}());
exports.DirectoryReader = DirectoryReader;
