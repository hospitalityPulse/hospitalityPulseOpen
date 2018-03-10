import * as fs from "fs";
import { DirectoryHelper } from "./DirectoryHelper";

export class FolderWatcher {
    public watch(folderPath: string): RunningWatcher {
        const subfolders = DirectoryHelper.getAllSubdirectories(folderPath);
        const folders = [folderPath].concat(subfolders);
        return RunningWatcher.startForFolders(folders);
    }
}

export class RunningWatcher {
    private onFileCreatedDeletedOrRenamed: () => void;
    private folders: string[];

    public static startForFolders(folders: string[]): RunningWatcher {
        const watcher = new RunningWatcher();
        watcher.setFolders(folders);
        watcher.start();
        return watcher;
    }

    private constructor() {
        this.onFileCreatedDeletedOrRenamed = () => { };
    }

    private setFolders(folders: string[]) {
        this.folders = folders;
    }

    private start() {
        this.folders.forEach((folder: string) => {
            fs.watch(folder, { encoding: "utf8" }, (event: string, filename: string) => {
                this.onWatchFired(event);
            });
        });
    }

    private onWatchFired(event: string) {
        if (this.isCreatedDeletedOrRenamed(event)) {
            this.onFileCreatedDeletedOrRenamed();
        }
    }

    private isCreatedDeletedOrRenamed(event: string) {
        if (event === "rename") {
            return true;
        }
        return false;
    }

    public setOnFileCreatedDeletedOrRenamed(onFileCreated: () => void) {
        this.onFileCreatedDeletedOrRenamed = onFileCreated;
    }
}
