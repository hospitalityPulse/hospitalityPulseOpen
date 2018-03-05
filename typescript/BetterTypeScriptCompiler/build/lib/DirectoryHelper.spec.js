"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectoryHelper_1 = require("./DirectoryHelper");
describe("the DirectoryHelper", function () {
    it("should return list of subdirectories", function () {
        var mock = new DirectoryReaderMock();
        mock.addDirectoriesFor("/tmp/utbtsc", ["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        mock.addDirectoriesFor("/tmp/utbtsc/l1", ["/tmp/utbtsc/l1/l1s1", "/tmp/utbtsc/l1/l1s2"]);
        mock.addDirectoriesFor("/tmp/utbtsc/l2", ["/tmp/utbtsc/l2/l2s1"]);
        DirectoryHelper_1.DirectoryHelper.reader = mock;
        var subdirectories = DirectoryHelper_1.DirectoryHelper.getAllSubdirectories("/tmp/utbtsc");
        expect(subdirectories).toEqual([
            "/tmp/utbtsc/l1",
            "/tmp/utbtsc/l2",
            "/tmp/utbtsc/l3",
            "/tmp/utbtsc/l1/l1s1",
            "/tmp/utbtsc/l1/l1s2",
            "/tmp/utbtsc/l2/l2s1",
        ]);
    });
});
var DirectoryReaderMock = /** @class */ (function () {
    function DirectoryReaderMock() {
        this.subDirectories = {};
    }
    DirectoryReaderMock.prototype.readDirectoriesFrom = function (directory) {
        if (false === (directory in this.subDirectories)) {
            return [];
        }
        return this.subDirectories[directory];
    };
    DirectoryReaderMock.prototype.addDirectoriesFor = function (directory, subdirectories) {
        this.subDirectories[directory] = subdirectories;
    };
    return DirectoryReaderMock;
}());
