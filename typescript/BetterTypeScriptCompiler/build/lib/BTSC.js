"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BTSC = /** @class */ (function () {
    function BTSC() {
    }
    BTSC.prototype.initialize = function () {
        this.initializeFolderWatcher();
    };
    BTSC.prototype.initializeFolderWatcher = function () {
        // this.folderWatcher.onFileCreate = (fileName: string) => {
        //     console.log("On File Create", fileName);
        // };
        // this.folderWatcher.onFolderCreate = (folderName: string) => {
        //     console.log("On Folder Create", folderName);
        // };
        // this.folderWatcher.onFileDelete = (fileName: string) => {
        //     console.log("On File Delete", fileName);
        // };
        // this.folderWatcher.onFolderDelete = (folderName: string) => {
        //     console.log("On Folder Delete", folderName);
        //     if (this.folderWatcher.folderIsWatched(folderPath)) {
        //         this.folderWatcher.stopWatchOnFolder(folderName);
        //     }
        // };
    };
    return BTSC;
}());
exports.BTSC = BTSC;
