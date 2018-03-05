"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FolderWatcherImpl = /** @class */ (function () {
    // private folderToSubfolders: { [key: string]: string[] };
    function FolderWatcherImpl() {
        this.watches = {};
    }
    FolderWatcherImpl.prototype.placeWatchOnFolderAndSubfolders = function (folderPath) {
        var _this = this;
        var subfolders = this.getSubfoldersFromPath(folderPath);
        subfolders.forEach(function (folderPath) {
            _this.placeWatchOnFolder(folderPath);
        });
    };
    FolderWatcherImpl.prototype.getSubfoldersFromPath = function (folderPath) {
        return [];
    };
    FolderWatcherImpl.prototype.placeWatchOnFolder = function (folderPath) {
        // const watcher = fs.watch(folderPath, {}, (event: string, filename: string) => {
        //     if (event === "create") {
        //         this.onFileCreate(filename);
        //     }
        //     if (event === "delete") {
        //         this.onFileDelete(filename);
        //     }
        // });
        // this.watches[folderPath] = watcher;
        // this.placeWatchOnFolderAndSubfolders(folderPath);
    };
    FolderWatcherImpl.prototype.removeWatchOnFolderAndSubfolders = function (folderPath) {
        var _this = this;
        var subfolders = this.getWatchedSubfoldersFromPath(folderPath);
        subfolders.forEach(function (subPath) {
            _this.removeWatchOnFolder(subPath);
        });
        this.removeWatchOnFolder(folderPath);
    };
    FolderWatcherImpl.prototype.getWatchedSubfoldersFromPath = function (folderPath) {
        // return this.folderToSubfolders[folderPath];
        return [];
    };
    FolderWatcherImpl.prototype.removeWatchOnFolder = function (folderPath) {
        this.watches[folderPath].close();
    };
    FolderWatcherImpl.prototype.folderIsWatched = function (folderPath) {
        return (folderPath in this.watches);
    };
    return FolderWatcherImpl;
}());
exports.FolderWatcherImpl = FolderWatcherImpl;
