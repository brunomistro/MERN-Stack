require('dotenv').config();
const express = require('express');
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

// middleware's
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use("/api/workouts", workoutRoutes)

// DB connection
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(port, () => {
			console.log("connected to DB and listening on port", port);
		})
	})
	.catch(err => console.error(err));
