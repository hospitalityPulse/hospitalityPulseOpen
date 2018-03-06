(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MockRequest.helper.spec", "./MockRequestFactory.helper.spec", "./RequestFactory"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockRequest_helper_spec_1 = require("./MockRequest.helper.spec");
    var MockRequestFactory_helper_spec_1 = require("./MockRequestFactory.helper.spec");
    var RequestFactory_1 = require("./RequestFactory");
    describe("a RequestFactory", function () {
        it("should produce a new Request", function () {
            var mockRequestFactory = new MockRequestFactory_helper_spec_1.default();
            RequestFactory_1.default.setInstance(mockRequestFactory);
            var mockRequest = RequestFactory_1.default.create();
            expect(mockRequest.constructor).toBe(MockRequest_helper_spec_1.default);
        });
    });
});
