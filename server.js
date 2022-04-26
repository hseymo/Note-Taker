const express = require('express');
const path = require('path');
const app = express();
// set port
const PORT = process.env.PORT || 3001;
// import notes
const notes = require("./db/db.json");
// set static folder
app.use(express.static("public"));
// FROM VIDEO
// app.use(express.static(path.join(__dirname, 'public')));




// HTML GET /notes return notes.html
app.get('/notes', (req, res) => 
res.json(notes.html));

// HTML GET * return index.html
// app.get('*', (req, res) =>
// )

// API GET /api/notes read db.json file and return all saved notes as json
app.get('/api/notes', (req, res) => res.json(notes));

// API POST /api/notes receive a new note to save on the request body, add it to db.json file, and return new note to clinet. EACH NOTE NEEDS UNIQUE ID

// BONUS DELETE /api/notes/:id receive a query parameter with note id to delete. to delete, read all notes from db.json, remove note with id, and rewrite notes to db.json

app.listen(PORT, () => console.log(`Listening at http:///localhost:${PORT}`));