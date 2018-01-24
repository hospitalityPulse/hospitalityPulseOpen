const DirectoryHelper = require("./DirectoryHelper");

class DirectoryCreator {
    static execute(entry) {
        const directoryCreator = new DirectoryCreator();
        directoryCreator._execute(entry);
    }

    _execute(entry) {
        this.entry = entry;
        this.trimTrailingSlash();
        this.createNestingStructure();
        this.makeDirectories();
    }

    trimTrailingSlash() {
        const len = this.entry.length;
        if (this.entry[len - 1] === "/") {
            this.entry = this.entry.substring(0, len - 1);
        }
    }

    createNestingStructure() {
        const parts = this.entry.split("/");
        const nested = [];
        let constructedDirectory = "";
        parts.forEach((part) => {
            if (this.isSlash(part)) {
                constructedDirectory += "/";
            } else {
                constructedDirectory += part + "/";
            }
            nested.push(constructedDirectory);
        });
        this.nested = nested;
    }

    isSlash(part) {
        return (part === "");
    }

    makeDirectories() {
        this.nested.forEach((dir) => {
            if (!this.exists(dir)) {
                this.makeDirectory(dir);
            }
        });
    }

    exists(dir) {
        return DirectoryHelper.fs.existsSync(dir);
    }

    makeDirectory(dir) {
        DirectoryHelper.fs.mkdirSync(dir);
    }
}

module.exports = DirectoryCreator;
