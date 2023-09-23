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
