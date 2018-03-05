"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WatchedFolderImpl = /** @class */ (function () {
    function WatchedFolderImpl() {
    }
    WatchedFolderImpl.prototype.onFileCreate = function (fileName) {
        throw new Error("Method not implemented.");
    };
    WatchedFolderImpl.prototype.onFolderCreate = function (folderName) {
        throw new Error("Method not implemented.");
    };
    WatchedFolderImpl.prototype.onFileDelete = function (fileName) {
        throw new Error("Method not implemented.");
    };
    WatchedFolderImpl.prototype.onFolderDelete = function (folderName) {
        throw new Error("Method not implemented.");
    };
    return WatchedFolderImpl;
}());
exports.WatchedFolderImpl = WatchedFolderImpl;
