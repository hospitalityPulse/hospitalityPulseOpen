import Response from "./Response";

export default class MockResponse extends Response {
    public getCode(): number {
        return this.code;
    }

    public getBody(): object {
        return this.body;
    }

    public getError(): boolean {
        return this.error;
    }
}
