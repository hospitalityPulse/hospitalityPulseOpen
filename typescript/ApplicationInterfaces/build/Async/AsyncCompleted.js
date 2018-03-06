(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncCompleted = /** @class */ (function () {
        function AsyncCompleted() {
        }
        AsyncCompleted.prototype.setOnCompleted = function (onCompleted) {
            this.onCompleted = onCompleted;
        };
        AsyncCompleted.prototype.callOnCompleted = function (args) {
            this.onCompleted(args);
        };
        return AsyncCompleted;
    }());
    exports.default = AsyncCompleted;
});
