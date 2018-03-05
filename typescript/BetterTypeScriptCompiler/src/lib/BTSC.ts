import { TSCWrapper } from "./TSCWrapper";
import { FolderWatcher } from "./FolderWatcher";

export class BTSC {
    private tsc: TSCWrapper;
    private folderWatcher: FolderWatcher;

    public initialize() {
        this.initializeFolderWatcher();
    }

    private initializeFolderWatcher() {
        // this.folderWatcher.onFileCreate = (fileName: string) => {
        //     console.log("On File Create", fileName);
        // };
        // this.folderWatcher.onFolderCreate = (folderName: string) => {
        //     console.log("On Folder Create", folderName);
        // };
        // this.folderWatcher.onFileDelete = (fileName: string) => {
        //     console.log("On File Delete", fileName);
        // };
        // this.folderWatcher.onFolderDelete = (folderName: string) => {
        //     console.log("On Folder Delete", folderName);
        //     if (this.folderWatcher.folderIsWatched(folderPath)) {
        //         this.folderWatcher.stopWatchOnFolder(folderName);
        //     }
        // };
    }
}
