import MockRequest from "./MockRequest.helper.spec";
import RequestFactory from "./RequestFactory";

export default class MockRequestFactory extends RequestFactory {
    public requests: MockRequest[];

    public constructor() {
        super();
        this.requests = [];
    }

    protected _create(): MockRequest {
        const mockRequest = new MockRequest();
        this.requests.push(mockRequest);
        return mockRequest;
    }

    public getLastRequest(): MockRequest {
        return this.requests[this.requests.length - 1];
    }
}
