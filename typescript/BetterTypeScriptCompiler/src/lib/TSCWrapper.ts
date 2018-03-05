export interface TSCWrapper {
    start(): void;
    stop(): void;
}

export class TSCWrapperImpl implements TSCWrapper {
    start() {
        console.log("Start tsc");
    }

    stop() {
        console.log("Stop tsc");
    }
}
