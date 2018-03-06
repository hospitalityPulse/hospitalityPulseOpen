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
        define(["require", "exports", "./MockRequest.helper.spec", "./RequestFactory"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockRequest_helper_spec_1 = require("./MockRequest.helper.spec");
    var RequestFactory_1 = require("./RequestFactory");
    var MockRequestFactory = /** @class */ (function (_super) {
        __extends(MockRequestFactory, _super);
        function MockRequestFactory() {
            var _this = _super.call(this) || this;
            _this.requests = [];
            return _this;
        }
        MockRequestFactory.prototype._create = function () {
            var mockRequest = new MockRequest_helper_spec_1.default();
            this.requests.push(mockRequest);
            return mockRequest;
        };
        MockRequestFactory.prototype.getLastRequest = function () {
            return this.requests[this.requests.length - 1];
        };
        return MockRequestFactory;
    }(RequestFactory_1.default));
    exports.default = MockRequestFactory;
});
