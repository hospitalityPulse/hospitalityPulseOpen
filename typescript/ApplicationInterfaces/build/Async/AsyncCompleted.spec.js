(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MockAsyncCompleted.helper.spec"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAsyncCompleted_helper_spec_1 = require("./MockAsyncCompleted.helper.spec");
    describe("an AsyncCompleted", function () {
        it("should allow an asynconous onCompleted call", function (done) {
            var mockAsyncCompleted = new MockAsyncCompleted_helper_spec_1.default();
            mockAsyncCompleted.setOnCompleted(function (_a) {
                var result = _a[0];
                expect("astring").toBe(result);
                done();
            });
            mockAsyncCompleted.fireCompleted("astring");
        });
    });
});
