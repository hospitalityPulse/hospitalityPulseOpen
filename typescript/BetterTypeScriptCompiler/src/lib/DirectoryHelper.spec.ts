import { DirectoryHelper } from "./DirectoryHelper";
import { DirectoryReader } from "./DirectoryReader";

describe("the DirectoryHelper", () => {
    it("should return list of subdirectories", () => {
        const mock = new DirectoryReaderMock();
        mock.addDirectoriesFor("/tmp/utbtsc", ["/tmp/utbtsc/l1", "/tmp/utbtsc/l2", "/tmp/utbtsc/l3"]);
        mock.addDirectoriesFor("/tmp/utbtsc/l1", ["/tmp/utbtsc/l1/l1s1", "/tmp/utbtsc/l1/l1s2"]);
        mock.addDirectoriesFor("/tmp/utbtsc/l2", ["/tmp/utbtsc/l2/l2s1"]);
        DirectoryHelper.reader = mock;
        const subdirectories = DirectoryHelper.getAllSubdirectories("/tmp/utbtsc");
        expect(subdirectories).toEqual([
            "/tmp/utbtsc/l1",
            "/tmp/utbtsc/l2",
            "/tmp/utbtsc/l3",
            "/tmp/utbtsc/l1/l1s1",
            "/tmp/utbtsc/l1/l1s2",
            "/tmp/utbtsc/l2/l2s1",
        ]);
    });
});

class DirectoryReaderMock implements DirectoryReader {
    private subDirectories: { [key: string]: string[] };

    public constructor() {
        this.subDirectories = {};
    }

    public readDirectoriesFrom(directory: string): string[] {
        if (false === (directory in this.subDirectories)) {
            return [];
        }
        return this.subDirectories[directory];
    }

    public addDirectoriesFor(directory: string, subdirectories: string[]) {
        this.subDirectories[directory] = subdirectories;
    }
}
