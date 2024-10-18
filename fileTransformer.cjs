// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

module.exports = {
    process(_, sourcePath) {
        return {
            code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
        }
    },
}