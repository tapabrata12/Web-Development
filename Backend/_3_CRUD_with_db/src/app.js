const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

/* CRUD operations for notes:
GET: /notes
POST: /notes
PATCH: /notes/:id
DELETE: /notes/:id

*/
// Get all notes
app.use(express.json());

app.get("/notes", async (req, res) => {
  notes = await noteModel.find();
  res.status(200).send({
    message: "Notes retrieved successfully",
    notes: notes,
  });
});

// Create a new note
app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).send({
    message: "Note created successfully",
  });
});

// Update a note by ID

app.patch("/notes/:id", async (req, res) => {
  const noteID = req.params.id;
  const newData = req.body;

  await noteModel.findByIdAndUpdate(
    {
      _id: noteID,
    },

    {
      title: newData.title,
      description: newData.description,
    },
  );

  res.status(200).send({
    message: "Note updated successfully",
  });
});

// Delete a note by ID

app.delete("/notes/:id", async (req, res) => {
  const noteID = req.params.id;
  await noteModel.findByIdAndDelete({
    _id: noteID,
  });

  res.status(200).send({
    message: "Note deleted successfully",
  });
});
module.exports = app;
