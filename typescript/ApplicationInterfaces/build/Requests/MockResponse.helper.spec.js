var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Response_1 = require("./Response");
    var MockResponse = /** @class */ (function (_super) {
        __extends(MockResponse, _super);
        function MockResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MockResponse.prototype.getCode = function () {
            return this.code;
        };
        MockResponse.prototype.getBody = function () {
            return this.body;
        };
        MockResponse.prototype.getError = function () {
            return this.error;
        };
        return MockResponse;
    }(Response_1.default));
    exports.default = MockResponse;
});
