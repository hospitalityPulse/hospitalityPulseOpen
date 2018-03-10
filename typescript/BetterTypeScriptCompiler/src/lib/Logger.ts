import * as fs from "fs";

interface Log {
    line: string;
    requested: Date;
}

export class Logger {
    private queue: Log[];
    private fd: number;
    private queueFlushable: boolean;

    public static createWithFile(file: string) {
        const logger = new Logger();
        logger.useFile(file);
        return logger;
    }

    private constructor() { }

    private useFile(file: string) {
        this.queue = [];
        this.queueFlushable = false;
        fs.open(file, "a+", 0o666, (err, fd: number) => {
            this.fd = fd;
            this.queueFlushable = true;
            this.writeQueue();
        });
    }

    private writeQueue() {
        if (this.queue.length > 0) {
            this.writeNextFromQueue();
        }
    }

    public log(line: string) {
        this.queue.push({
            line: line,
            requested: new Date(),
        });
        this.writeQueueIfFlushable();
    }

    private writeQueueIfFlushable() {
        if (this.queueFlushable) {
            this.writeQueue();
        }
    }

    private writeNextFromQueue() {
        this.queueFlushable = false;
        const log = this.queue.shift();
        const message = "[" + log.requested.toUTCString() + "] " + log.line + "\n";
        fs.write(this.fd, message, null, "utf8", (err, written, string) => {
            this.queueFlushable = true;
            this.writeQueue();
        });
    }
}
