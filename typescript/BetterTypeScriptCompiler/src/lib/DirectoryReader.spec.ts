import * as fs from "fs";
import { DirectoryReader } from "./DirectoryReader";

const createdDirs: string[] = [];
const createdFiles: string[] = [];

describe("DirectoryReader", () => {
    it("should return subdirectories", () => {
        createDirectories(["/tmp/utbtsc"]);
        createDirectories(["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        createFile("/tmp/utbtsc/f1.txt");
        const reader = new DirectoryReader();
        const directories = reader.readDirectoriesFrom("/tmp/utbtsc");
        expect(directories).toEqual(["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        cleanup();
    });
});

function createDirectories(directories: string[]) {
    for (const directory of directories) {
        try {
            fs.mkdirSync(directory, 0o777);
        } catch (e) { }
        createdDirs.push(directory);
    }
}

function createFile(file: string) {
    try {
        fs.writeFileSync(file, "", { encoding: "utf8" });
    } catch (e) { }
    createdFiles.push(file);
}

function cleanup() {
    for (let i = 0; i < createdFiles.length; i++) {
        try {
            fs.unlinkSync(createdFiles[i]);
        } catch (e) { }
    }
    for (let i = createdDirs.length - 1; i >= 0; i--) {
        try {
            fs.rmdirSync(createdDirs[i]);
        } catch (e) { }
    }
}
