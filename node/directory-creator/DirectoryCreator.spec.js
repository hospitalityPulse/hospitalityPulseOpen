const DirectoryHelper = require("./DirectoryHelper");
const DirectoryCreator = require("./DirectoryCreator");

describe("a DirectoryCreator", () => {
    const oldFs = DirectoryHelper.fs;
    let fs;
    let existingDirectories;

    beforeEach(() => {
        existingDirectories = ["/"];
        DirectoryHelper.fs = fs = jasmine.createSpyObj("fs", ["existsSync", "mkdirSync"]);
        fs.existsSync.and.callFake(existsFake);
    });

    afterEach(() => {
        DirectoryHelper.fs = oldFs;
    });

    it("should always attempt to check against the root directory", () => {
        DirectoryCreator.execute("/tmp");
        expect(fs.existsSync).toHaveBeenCalledWith("/");
    });

    it("should create a directory", () => {
        DirectoryCreator.execute("/tmp");
        expect(fs.existsSync).toHaveBeenCalledWith("/tmp/");
        expect(fs.mkdirSync).toHaveBeenCalledWith("/tmp/");
    });

    it("should trim trailing slash", () => {
        DirectoryCreator.execute("/tmp/abcd/");
        const expected = [
            ["/tmp/"],
            ["/tmp/abcd/"],
        ];
        expect(expected).toEqual(fs.mkdirSync.calls.allArgs());
    });

    it("should not create an existing directory", () => {
        addExists("/tmp/");
        DirectoryCreator.execute("/tmp");
        expect(fs.mkdirSync).not.toHaveBeenCalled();
    });

    it("should create multiple directories down", () => {
        DirectoryCreator.execute("/tmp/new/test");
        const expected = [
            ["/tmp/"],
            ["/tmp/new/"],
            ["/tmp/new/test/"],
        ];
        expect(expected).toEqual(fs.mkdirSync.calls.allArgs());
    });

    it("should allow creation of relative paths", () => {
        addExists("fortest/");
        DirectoryCreator.execute("fortest/create");
        let expected = [
            ["fortest/"],
            ["fortest/create/"],
        ];
        expect(expected).toEqual(fs.existsSync.calls.allArgs());
        expected = [
            ["fortest/create/"],
        ];
        expect(expected).toEqual(fs.mkdirSync.calls.allArgs());
    });

    function existsFake(part) {
        return (existingDirectories.indexOf(part) >= 0);
    }

    function addExists(part) {
        existingDirectories.push(part);
    }
});
