import { BTSC } from "./lib/BTSC";
import { TscWrapper } from "./lib/TscWrapper";
import { FolderWatcher } from "./lib/FolderWatcher";
import { DirectoryReader } from "./lib/DirectoryReader";
import { DirectoryHelper } from "./lib/DirectoryHelper";
import { Logger } from "./lib/Logger";

DirectoryHelper.reader = new DirectoryReader();
const btsc = new BTSC();
const tscWrapper = new TscWrapper();
tscWrapper.setLogger(Logger.createWithFile("log.log"));
btsc.setTscWrapper(tscWrapper);
const folderWatcher = new FolderWatcher();
btsc.setFolderWatcher(folderWatcher);
btsc.startFor("./src");
