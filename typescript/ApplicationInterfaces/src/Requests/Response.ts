export default class Response {
    protected code: number;
    protected body: object;
    protected error: boolean;

    public constructor() {
        this.error = false;
    }

    public setCode(code: number): void {
        this.code = code;
    }

    public setBody(body: object): void {
        this.body = body;
    }

    public setError(): void {
        this.error = true;
    }

    public getBody(): object {
        return this.body;
    }
}
