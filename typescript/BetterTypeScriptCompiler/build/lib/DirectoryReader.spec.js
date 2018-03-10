"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DirectoryReader_1 = require("./DirectoryReader");
var createdDirs = [];
var createdFiles = [];
describe("DirectoryReader", function () {
    it("should return subdirectories", function () {
        createDirectories(["/tmp/utbtsc"]);
        createDirectories(["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        createFile("/tmp/utbtsc/f1.txt");
        var reader = new DirectoryReader_1.DirectoryReader();
        var directories = reader.readDirectoriesFrom("/tmp/utbtsc");
        expect(directories).toEqual(["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        cleanup();
    });
});
function createDirectories(directories) {
    for (var _i = 0, directories_1 = directories; _i < directories_1.length; _i++) {
        var directory = directories_1[_i];
        try {
            fs.mkdirSync(directory, 511);
        }
        catch (e) { }
        createdDirs.push(directory);
    }
}
function createFile(file) {
    try {
        fs.writeFileSync(file, "", { encoding: "utf8" });
    }
    catch (e) { }
    createdFiles.push(file);
}
function cleanup() {
    for (var i = 0; i < createdFiles.length; i++) {
        try {
            fs.unlinkSync(createdFiles[i]);
        }
        catch (e) { }
    }
    for (var i = createdDirs.length - 1; i >= 0; i--) {
        try {
            fs.rmdirSync(createdDirs[i]);
        }
        catch (e) { }
    }
}
