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
    var Response = /** @class */ (function () {
        function Response() {
            this.error = false;
        }
        Response.prototype.setCode = function (code) {
            this.code = code;
        };
        Response.prototype.setBody = function (body) {
            this.body = body;
        };
        Response.prototype.setError = function () {
            this.error = true;
        };
        Response.prototype.getBody = function () {
            return this.body;
        };
        return Response;
    }());
    exports.default = Response;
});
