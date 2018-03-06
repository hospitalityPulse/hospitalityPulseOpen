import { Request } from "./Request";

export default abstract class RequestFactory {
    private static instance: RequestFactory;

    public static setInstance(requestFactory: RequestFactory) {
        this.instance = requestFactory;
    }

    public static create(): Request {
        return this.instance._create();
    }

    protected abstract _create(): Request;
}
