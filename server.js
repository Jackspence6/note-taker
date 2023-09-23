/******************************************/
/* External dependencies */
/******************************************/
const express = require("express");
const path = require("path");
const notesRoutes = require("./routes/notes");
/******************************************/
/* Environment Variables and Constants */
/******************************************/
const app = express();
const PORT = process.env.PORT || 3001;
/******************************************/
/* Function Declarations */
/******************************************/

/******************************************/
/* Class Declarations */
/******************************************/

/******************************************/
/* Event Listeners */
/******************************************/

/******************************************/
/* Middleware Definitions */
/******************************************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/notes", notesRoutes);
/******************************************/
/* Route Definitions */
/******************************************/
// GET Route for homepage
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET Route for /notes
app.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// GET Route for wildcard path
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Delete Route for /api/note/:id
app.delete("/api/note/:id", (req, res) => {
	// Read the existing notes from db.json file
	let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

	// Finding the correct note to delete
	const noteId = req.params.id;

	// Filtering out the note with the given id
	const filteredNotes = notes.filter((note) => note.id !== noteId);

	// Write the filtered notes back to the db.json file
	fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), "utf-8");

	// Send back a success response
	res.status(200).send("Note deleted successfully");
});
/******************************************/
/* Database Connections */
/******************************************/

/******************************************/
/* Server Initialization */
/******************************************/
// Listen to PORT for api calls
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
