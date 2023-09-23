/******************************************/
/* External dependencies */
/******************************************/
const express = require("express");
const fs = require("fs");
const { title } = require("process");
const { v4: uuidv4 } = require("uuid");
/******************************************/
/* Environment Variables and Constants */
/******************************************/
const router = express.Router();
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

/******************************************/
/* Route Definitions */
/******************************************/
// GET Route for /api/notes
router.get("/", (req, res) => {
	let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
	res.json(notes);
});

// POST Route for /api/notes
router.post("/", (req, res) => {
	let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

	// Creating a note object
	const newNote = {
		title: req.body.title,
		text: req.body.text,
		id: uuidv4(),
	};
});
/******************************************/
/* Database Connections */
/******************************************/

/******************************************/
/* Server Initialization */
/******************************************/

/******************************************/
/* Main Logic */
/******************************************/
// Exporting Router
module.exports = router;
