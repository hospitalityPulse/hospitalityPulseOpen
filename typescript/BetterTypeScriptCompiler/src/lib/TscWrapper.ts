import { spawn, ChildProcess } from "child_process";
import { Logger } from "./Logger";

export class TscWrapper {
    private childTsc: ChildProcess;
    private todoOnClose: () => void;
    private logger: Logger;

    public constructor() {
        this.todoOnClose = () => { };
    }

    public setLogger(logger: Logger) {
        this.logger = logger;
    }

    public start() {
        this.logger.log("-- Tsc Starting --");
        this.childTsc = spawn("tsc", ["-p", "tsconfig.json", "-w"]);
        this.childTsc.stdout.on("data", (data: string) => {
            this.logger.log(data);
        });
        this.childTsc.stderr.on("data", (data: string) => {
            this.logger.log(data);
        });
        this.childTsc.on("close", (code: number) => {
            this.logger.log("-- Tsc Closed --");
            this.todoOnClose();
        });
    }

    public stop() {
        this.logger.log("-- Tsc Stopping --");
        this.childTsc.kill();
        return {
            onComplete: (todoOnClose: () => void) => {
                this.todoOnClose = todoOnClose;
            },
        };
    }
}
