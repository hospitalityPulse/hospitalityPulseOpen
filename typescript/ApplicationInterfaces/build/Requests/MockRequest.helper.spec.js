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
        define(["require", "exports", "./Request", "./Response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Request_1 = require("./Request");
    var Response_1 = require("./Response");
    var MockRequest = /** @class */ (function (_super) {
        __extends(MockRequest, _super);
        function MockRequest() {
            var _this = _super.call(this) || this;
            _this.sent = false;
            return _this;
        }
        MockRequest.prototype.send = function () {
            this.sent = true;
        };
        MockRequest.prototype.cancel = function () {
            throw new Error("Method not implemented.");
        };
        MockRequest.prototype.getType = function () {
            return this.type;
        };
        MockRequest.prototype.getParams = function () {
            return this.params;
        };
        MockRequest.prototype.getPayload = function () {
            return this.payload;
        };
        MockRequest.prototype.getUrl = function () {
            return this.url;
        };
        MockRequest.prototype.callOnCompleted = function () {
            _super.prototype.callOnCompleted.call(this, [new Response_1.default()]);
        };
        return MockRequest;
    }(Request_1.Request));
    exports.default = MockRequest;
});
