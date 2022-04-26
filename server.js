const { application } = require('express');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// import notes
const notes = require("./db/db.json");

// set static folder
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);
// or res.redirect('/') and define homepage

// API GET /api/notes read db.json file and return all saved notes as json
app.get('/api/notes', (req, res) => res.json(notes));

app.get('/api/notes/:id', (req, res) => {
    // for (let i = 0; i < notes.length; i++) {
    //     if (notes[i].id == req.params.id) {
    //         return res.json(notes[i])
    //     }; 
    // }
    const exist = notes.some(note => note.id == req.params.id);
    if (exist) {
    res.json(notes.filter(note => note.id == req.params.id));
    } else {
        res.status(400).json(`No note with the id of ${req.params.id}`)
    }
});

// API POST /api/notes receive a new note to save on the request body, add it to db.json file, and return new note to clinet. EACH NOTE NEEDS UNIQUE ID
app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    res.json(notes);
}) 

// BONUS DELETE /api/notes/:id receive a query parameter with note id to delete. to delete, read all notes from db.json, remove note with id, and rewrite notes to db.json
app.delete('/api/notes/:id', (req, res) => {
    const remaining = notes.filter((item) => item.id != req.params.id);
    notes = remaining;
    res.json(notes);
})

app.listen(PORT, () => console.log(`Listening at http:///localhost:${PORT}`));