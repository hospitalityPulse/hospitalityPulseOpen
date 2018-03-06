import MockAsyncCompleted from "./MockAsyncCompleted.helper.spec";

describe("an AsyncCompleted", () => {
    it("should allow an asynconous onCompleted call", (done) => {
        const mockAsyncCompleted = new MockAsyncCompleted();
        mockAsyncCompleted.setOnCompleted(([result]) => {
            expect("astring").toBe(result);
            done();
        });
        mockAsyncCompleted.fireCompleted("astring");
    });
});
