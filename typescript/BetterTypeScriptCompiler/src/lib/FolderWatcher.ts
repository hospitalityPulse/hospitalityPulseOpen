import * as fs from "fs";

export interface FolderWatcher {
    placeWatchOnFolderAndSubfolders(folderPath: string): void;
    removeWatchOnFolderAndSubfolders(folderPath: string): void;
    folderIsWatched(folderPath: string): void;
}

export class FolderWatcherImpl implements FolderWatcher {
    private watches: { [key: string]: fs.FSWatcher };
    // private folderToSubfolders: { [key: string]: string[] };

    public constructor() {
        this.watches = {};
    }

    public placeWatchOnFolderAndSubfolders(folderPath: string): void {
        const subfolders = this.getSubfoldersFromPath(folderPath);
        subfolders.forEach((folderPath: string) => {
            this.placeWatchOnFolder(folderPath);
        });
    }

    private getSubfoldersFromPath(folderPath: string): string[] {
        return [];
    }

    private placeWatchOnFolder(folderPath: string) {
        // const watcher = fs.watch(folderPath, {}, (event: string, filename: string) => {
        //     if (event === "create") {
        //         this.onFileCreate(filename);
        //     }
        //     if (event === "delete") {
        //         this.onFileDelete(filename);
        //     }
        // });
        // this.watches[folderPath] = watcher;
        // this.placeWatchOnFolderAndSubfolders(folderPath);
    }

    public removeWatchOnFolderAndSubfolders(folderPath: string): void {
        const subfolders = this.getWatchedSubfoldersFromPath(folderPath);
        subfolders.forEach((subPath: string) => {
            this.removeWatchOnFolder(subPath);
        });
        this.removeWatchOnFolder(folderPath);
    }

    private getWatchedSubfoldersFromPath(folderPath: string): string[] {
        // return this.folderToSubfolders[folderPath];
        return [];
    }

    private removeWatchOnFolder(folderPath: string) {
        this.watches[folderPath].close();
    }

    public folderIsWatched(folderPath: string): boolean {
        return (folderPath in this.watches);
    }
}
