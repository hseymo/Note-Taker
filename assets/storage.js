// arm = in db folder
//util and fs and uuid/v1

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// class Storage {
//     read() {
//         return readFile('db/db.json', 'utf8')
//     }
//     write()

//     getNotes()

//     addNote()
// }

// module.exports = new Storage();

// ARM IN API------------------

// const storage = require('../db/storage');

// router.get('notes', (req,res) => {
//     storage.getNotes().then((notes) => {
//         return res.json(notes);
//     }).catch((err) => res.status(500).json(err))
// })