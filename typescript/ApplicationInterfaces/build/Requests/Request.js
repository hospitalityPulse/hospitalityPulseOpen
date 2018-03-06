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
        define(["require", "exports", "../Async/AsyncCompleted"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncCompleted_1 = require("../Async/AsyncCompleted");
    var RequestType;
    (function (RequestType) {
        RequestType[RequestType["GET"] = 0] = "GET";
        RequestType[RequestType["POST"] = 1] = "POST";
    })(RequestType = exports.RequestType || (exports.RequestType = {}));
    var Request = /** @class */ (function (_super) {
        __extends(Request, _super);
        function Request() {
            var _this = _super.call(this) || this;
            _this.type = RequestType.GET;
            _this.url = "";
            _this.params = {};
            _this.payload = {};
            return _this;
        }
        Request.prototype.setType = function (type) {
            this.type = type;
        };
        Request.prototype.addParam = function (key, value) {
            this.params[key] = value;
        };
        Request.prototype.setPayload = function (payload) {
            this.payload = payload;
        };
        Request.prototype.setUrl = function (url) {
            this.url = url;
        };
        return Request;
    }(AsyncCompleted_1.default));
    exports.Request = Request;
});
