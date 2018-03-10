"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DirectoryHelper_1 = require("./DirectoryHelper");
var FolderWatcher = /** @class */ (function () {
    function FolderWatcher() {
    }
    FolderWatcher.prototype.watch = function (folderPath) {
        var subfolders = DirectoryHelper_1.DirectoryHelper.getAllSubdirectories(folderPath);
        var folders = [folderPath].concat(subfolders);
        return RunningWatcher.startForFolders(folders);
    };
    return FolderWatcher;
}());
exports.FolderWatcher = FolderWatcher;
var RunningWatcher = /** @class */ (function () {
    function RunningWatcher() {
        this.onFileCreatedDeletedOrRenamed = function () { };
    }
    RunningWatcher.startForFolders = function (folders) {
        var watcher = new RunningWatcher();
        watcher.setFolders(folders);
        watcher.start();
        return watcher;
    };
    RunningWatcher.prototype.setFolders = function (folders) {
        this.folders = folders;
    };
    RunningWatcher.prototype.start = function () {
        var _this = this;
        this.folders.forEach(function (folder) {
            fs.watch(folder, { encoding: "utf8" }, function (event, filename) {
                _this.onWatchFired(event);
            });
        });
    };
    RunningWatcher.prototype.onWatchFired = function (event) {
        if (this.isCreatedDeletedOrRenamed(event)) {
            this.onFileCreatedDeletedOrRenamed();
        }
    };
    RunningWatcher.prototype.isCreatedDeletedOrRenamed = function (event) {
        if (event === "rename") {
            return true;
        }
        return false;
    };
    RunningWatcher.prototype.setOnFileCreatedDeletedOrRenamed = function (onFileCreated) {
        this.onFileCreatedDeletedOrRenamed = onFileCreated;
    };
    return RunningWatcher;
}());
exports.RunningWatcher = RunningWatcher;
