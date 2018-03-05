export interface WatchedFolder {
    onFileCreate(fileName: string): void;
    onFolderCreate(folderName: string): void;
    onFileDelete(fileName: string): void;
    onFolderDelete(folderName: string): void;
}

export class WatchedFolderImpl implements WatchedFolder {
    onFileCreate(fileName: string): void {
        throw new Error("Method not implemented.");
    }
    onFolderCreate(folderName: string): void {
        throw new Error("Method not implemented.");
    }
    onFileDelete(fileName: string): void {
        throw new Error("Method not implemented.");
    }
    onFolderDelete(folderName: string): void {
        throw new Error("Method not implemented.");
    }
}
