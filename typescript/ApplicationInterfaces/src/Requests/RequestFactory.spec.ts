import MockRequest from "./MockRequest.helper.spec";
import MockRequestFactory from "./MockRequestFactory.helper.spec";
import RequestFactory from "./RequestFactory";

describe("a RequestFactory", () => {
    it("should produce a new Request", () => {
        const mockRequestFactory = new MockRequestFactory();
        RequestFactory.setInstance(mockRequestFactory);
        const mockRequest = RequestFactory.create();
        expect(mockRequest.constructor).toBe(MockRequest);
    });
});
