import { TscWrapper } from "./TscWrapper";
import { FolderWatcher, RunningWatcher } from "./FolderWatcher";

export class BTSC {
    private tsc: TscWrapper;
    private folderWatcher: FolderWatcher;

    public setTscWrapper(tscWrapper: TscWrapper) {
        this.tsc = tscWrapper;
    }

    public setFolderWatcher(folderWatcher: FolderWatcher) {
        this.folderWatcher = folderWatcher;
    }

    public startFor(path: string) {
        this.tsc.start();
        const watcher: RunningWatcher = this.folderWatcher.watch(path);
        watcher.setOnFileCreatedDeletedOrRenamed(() => {
            this.restart();
        });
    }

    private restart() {
        this.tsc.stop().onComplete(() => {
            this.tsc.start();
        });
    }
}
