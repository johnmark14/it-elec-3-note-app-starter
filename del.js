const fs = require('fs')

const del = function(id, oldNote) {
    const newNote = JSON.parse(oldNote).filter(function(n,i) {
        return n.id !== id
    })
    fs.writeFileSync('note.txt', JSON.stringify(newNote))
}

module.exports = del