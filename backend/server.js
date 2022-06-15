require('dotenv').config()
const express = require('express');

const app = express();
const port = process.env.PORT

// middleware
// app.use()

app.get("/", (req, res) => {
	res.json({mssg: "Welcome, Maguila"});
})

app.listen(port, () => {
	console.log("listening on port", port);
})