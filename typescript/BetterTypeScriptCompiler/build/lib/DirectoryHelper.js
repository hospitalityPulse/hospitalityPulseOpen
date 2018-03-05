"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectoryHelper = /** @class */ (function () {
    function DirectoryHelper() {
    }
    DirectoryHelper.getAllSubdirectories = function (directory) {
        var subDirectories = [];
        var tokens = [directory];
        for (var i = 0; i < tokens.length; i++) {
            var tokenDirectory = tokens[i];
            var tokenSubDirs = this.reader.readDirectoriesFrom(tokenDirectory);
            subDirectories = subDirectories.concat(tokenSubDirs);
            tokens = tokens.concat(tokenSubDirs);
        }
        return subDirectories;
    };
    return DirectoryHelper;
}());
exports.DirectoryHelper = DirectoryHelper;
