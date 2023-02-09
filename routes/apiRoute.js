const notes = require("express").Router();

notes.get("/notes", (req, res)=> {
   store 
   .getNotes()
   .then((notes) => {
    res.json(notes);
   }); 
});