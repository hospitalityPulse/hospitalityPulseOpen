export default class AsyncCompleted<OnCompletedArgs extends any[]> {
    private onCompleted: (args: OnCompletedArgs) => void;

    public setOnCompleted(onCompleted: (args: OnCompletedArgs) => void): void {
        this.onCompleted = onCompleted;
    }

    protected callOnCompleted(args: OnCompletedArgs): void {
        this.onCompleted(args);
    }
}
