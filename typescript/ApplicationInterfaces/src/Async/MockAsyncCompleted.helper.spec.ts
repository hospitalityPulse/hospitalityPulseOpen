import AsyncCompleted from "./AsyncCompleted";

type OnCompletedArgs = [string];

export default class MockAsyncCompleted extends AsyncCompleted<OnCompletedArgs> {
    public fireCompleted(result: string) {
        this.callOnCompleted([result]);
    }
}
