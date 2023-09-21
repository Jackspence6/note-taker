/******************************************/
/* External dependencies */
/******************************************/
const express = require("express");
const path = require("path");
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
// Express middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static content for the app from the “public” directory
app.use(express.static("public"));
/******************************************/
/* Route Definitions */
/******************************************/
// GET Route for homepage
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
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
// Listening to PORT
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
