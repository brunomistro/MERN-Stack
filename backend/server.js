require('dotenv').config();
const express = require('express');
const workoutRoutes = require("./routes/workouts");

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

app.listen(port, () => {
	console.log("listening on port", port);
})