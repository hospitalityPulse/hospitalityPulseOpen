import MockRequest from "./MockRequest.helper.spec";
import { QueryParams, Request, RequestType } from "./Request";
import Response from "./Response";

describe("a Request", () => {
    it("should set a type", () => {
        expectTypeAllowed(RequestType.GET);
        expectTypeAllowed(RequestType.POST);
    });

    it("should add params", () => {
        const mockRequest = new MockRequest();
        mockRequest.addParam("a", "b");
        mockRequest.addParam("c", "d");
        const expected: QueryParams = { a: "b", c: "d" };
        expect(expected).toEqual(mockRequest.getParams());
    });

    it("should set payload", () => {
        const mockRequest = new MockRequest();
        mockRequest.setPayload("New Payload");
        expect("New Payload").toBe(mockRequest.getPayload());
    });

    it("should set url", () => {
        const mockRequest = new MockRequest();
        mockRequest.setUrl("New Url");
        expect("New Url").toBe(mockRequest.getUrl());
    });

    it("should handle on completed", (done) => {
        const mockRequest = new MockRequest();
        mockRequest.setOnCompleted(([response]) => {
            done();
        });
        mockRequest.callOnCompleted();
    });

    function expectTypeAllowed(type: RequestType) {
        const mockRequest = new MockRequest();
        mockRequest.setType(type);
        expect(type).toBe(mockRequest.getType());
    }
});
