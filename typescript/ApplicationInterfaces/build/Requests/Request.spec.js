(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MockRequest.helper.spec", "./Request"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockRequest_helper_spec_1 = require("./MockRequest.helper.spec");
    var Request_1 = require("./Request");
    describe("a Request", function () {
        it("should set a type", function () {
            expectTypeAllowed(Request_1.RequestType.GET);
            expectTypeAllowed(Request_1.RequestType.POST);
        });
        it("should add params", function () {
            var mockRequest = new MockRequest_helper_spec_1.default();
            mockRequest.addParam("a", "b");
            mockRequest.addParam("c", "d");
            var expected = { a: "b", c: "d" };
            expect(expected).toEqual(mockRequest.getParams());
        });
        it("should set payload", function () {
            var mockRequest = new MockRequest_helper_spec_1.default();
            mockRequest.setPayload("New Payload");
            expect("New Payload").toBe(mockRequest.getPayload());
        });
        it("should set url", function () {
            var mockRequest = new MockRequest_helper_spec_1.default();
            mockRequest.setUrl("New Url");
            expect("New Url").toBe(mockRequest.getUrl());
        });
        it("should handle on completed", function (done) {
            var mockRequest = new MockRequest_helper_spec_1.default();
            mockRequest.setOnCompleted(function (_a) {
                var response = _a[0];
                done();
            });
            mockRequest.callOnCompleted();
        });
        function expectTypeAllowed(type) {
            var mockRequest = new MockRequest_helper_spec_1.default();
            mockRequest.setType(type);
            expect(type).toBe(mockRequest.getType());
        }
    });
});
