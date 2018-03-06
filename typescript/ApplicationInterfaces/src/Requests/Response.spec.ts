import MockResponse from "./MockResponse.helper.spec";

describe("a Response", () => {
    it("should set a code", () => {
        const response = new MockResponse();
        response.setCode(404);
        expect(404).toBe(response.getCode());
    });

    it("should set a body", () => {
        const response = new MockResponse();
        response.setBody({ New: "Body" });
        expect({ New: "Body" } as object).toEqual(response.getBody());
    });

    it("should set if response is error", () => {
        const response = new MockResponse();
        expect(false).toBe(response.getError());
        response.setError();
        expect(true).toBe(response.getError());
    });
});
