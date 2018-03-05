"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TSCWrapperImpl = /** @class */ (function () {
    function TSCWrapperImpl() {
    }
    TSCWrapperImpl.prototype.start = function () {
        console.log("Start tsc");
    };
    TSCWrapperImpl.prototype.stop = function () {
        console.log("Stop tsc");
    };
    return TSCWrapperImpl;
}());
exports.TSCWrapperImpl = TSCWrapperImpl;
