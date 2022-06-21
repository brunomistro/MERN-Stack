const express = require('express');
const router = express.Router();
const {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout
} = require("../controllers/workoutController")

// GET All
router.get("/", getWorkouts)

// GET Single
router.get("/:id", getWorkout)

// POST a new
router.post('/', createWorkout)

// DELETE
router.delete("/:id", deleteWorkout)

// UPDATE
router.patch("/:id", updateWorkout)

module.exports = router;