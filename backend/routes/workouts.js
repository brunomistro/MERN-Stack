const express = require('express');
const router = express.Router();
const Workout = require("../models/workoutModel")

// GET All
router.get("/", (req, res) => {
	res.json({mssg: "GET all workouts"})
})

// GET Single
router.get("/:id", (req, res) => {
	res.json({mssg: "GET single workouts"})
})

// POST a new
router.post('/', async (req, res) => {
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// DELETE
router.delete("/:id", (req,res) => {
	res.json({mssg: "DELETE a workouts"})
})

// UPDATE
router.patch("/:id", (req,res) => {
	res.json({mssg: "UPDATE a workouts"})
})

module.exports = router;