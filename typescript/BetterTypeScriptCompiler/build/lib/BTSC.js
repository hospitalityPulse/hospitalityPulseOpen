"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BTSC = /** @class */ (function () {
    function BTSC() {
    }
    BTSC.prototype.setTscWrapper = function (tscWrapper) {
        this.tsc = tscWrapper;
    };
    BTSC.prototype.setFolderWatcher = function (folderWatcher) {
        this.folderWatcher = folderWatcher;
    };
    BTSC.prototype.startFor = function (path) {
        var _this = this;
        this.tsc.start();
        var watcher = this.folderWatcher.watch(path);
        watcher.setOnFileCreatedDeletedOrRenamed(function () {
            _this.restart();
        });
    };
    BTSC.prototype.restart = function () {
        var _this = this;
        this.tsc.stop().onComplete(function () {
            _this.tsc.start();
        });
    };
    return BTSC;
}());
exports.BTSC = BTSC;
