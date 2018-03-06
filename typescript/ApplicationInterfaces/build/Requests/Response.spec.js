(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MockResponse.helper.spec"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockResponse_helper_spec_1 = require("./MockResponse.helper.spec");
    describe("a Response", function () {
        it("should set a code", function () {
            var response = new MockResponse_helper_spec_1.default();
            response.setCode(404);
            expect(404).toBe(response.getCode());
        });
        it("should set a body", function () {
            var response = new MockResponse_helper_spec_1.default();
            response.setBody({ New: "Body" });
            expect({ New: "Body" }).toEqual(response.getBody());
        });
        it("should set if response is error", function () {
            var response = new MockResponse_helper_spec_1.default();
            expect(false).toBe(response.getError());
            response.setError();
            expect(true).toBe(response.getError());
        });
    });
});
