const notes = require("express").Router();

notes.get("/notes", (req, res)=> {
   store 
   .getNotes()
   .then((notes) => {
    res.json(notes);
   }); 
});

notes.post('/', (req, res) => {
    console.info(`$(req.method) add note`);
})

router.delete("/notes/:id", (req, res) => {
    console.log(`${req.method}`);

})

module.exports = notes;