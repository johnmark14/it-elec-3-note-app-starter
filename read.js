const fs = require('fs')

const read = function() {
    return fs.readFileSync('note.txt', 'utf8')
}

module.exports = read