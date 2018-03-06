import AsyncCompleted from "../Async/AsyncCompleted";
import Response from "./Response";

export enum RequestType {
    GET, POST,
}

export interface QueryParams {
    [key: string]: string;
}

export abstract class Request extends AsyncCompleted<[Response]> {
    protected type: RequestType;
    protected params: QueryParams;
    protected payload: {};
    protected url: string;

    public constructor() {
        super();
        this.type = RequestType.GET;
        this.url = "";
        this.params = {};
        this.payload = {};
    }

    public setType(type: RequestType): void {
        this.type = type;
    }

    public addParam(key: string, value: string): void {
        this.params[key] = value;
    }

    public setPayload(payload: {}): void {
        this.payload = payload;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

    public abstract send(): void;
}
