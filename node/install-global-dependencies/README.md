This script will install global npm dependencies.

Add the preinstall key to your package.json file.
Run the preinstall.js script as a node command.
Pass in arguments for required global packages.

"preinstall": "node preinstall.js <space separated list of global packages>"

Example
=======
package.json
{
    ...
    "scripts": {
        "preinstall": "node preinstall.js grunt-cli bower"
    },
    ...
}
