import { QueryParams, Request, RequestType } from "./Request";
import Response from "./Response";

export default class MockRequest extends Request {
    public sent: boolean;

    public constructor() {
        super();
        this.sent = false;
    }

    public send(): void {
        this.sent = true;
    }

    public cancel(): void {
        throw new Error("Method not implemented.");
    }

    public getType(): RequestType {
        return this.type;
    }

    public getParams(): QueryParams {
        return this.params;
    }

    public getPayload(): any {
        return this.payload;
    }

    public getUrl(): string {
        return this.url;
    }

    public callOnCompleted(): void {
        super.callOnCompleted([new Response()]);
    }
}
