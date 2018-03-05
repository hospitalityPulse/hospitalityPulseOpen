import { DirectoryReader } from "./DirectoryReader";

export class DirectoryHelper {
    public static reader: DirectoryReader;

    public static getAllSubdirectories(directory: string): string[] {
        let subDirectories: string[] = [];
        let tokens: string[] = [directory];
        for (let i = 0; i < tokens.length; i++) {
            const tokenDirectory = tokens[i];
            const tokenSubDirs = this.reader.readDirectoriesFrom(tokenDirectory);
            subDirectories = subDirectories.concat(tokenSubDirs);
            tokens = tokens.concat(tokenSubDirs);
        }
        return subDirectories;
    }
}
