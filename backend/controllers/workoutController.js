const Workout = require("../models/workoutModel")
const mongoose = require("mongoose");

// get all list
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({createdAt: -1})

	res.status(200).json(workouts)
}

// get single item
const getWorkout = async (req, res) => {
 const { id } = req.params;

 if(!mongoose.Types.ObjectId.isValid(id)) {
	return res.status(404).json({error: "Invalid ID"})
 }

 const workout = await Workout.findById(id)

 if(!workout) {
	return res.status(404).json({error: "Not Found"})
 }

 res.status(200).json(workout)
}

// create new item
const createWorkout = async (req, res) => {
	const {title, load, reps} = req.body

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete item
const deleteWorkout = async (req, res) => {
	
}

// update item
const updateWorkout = async (req, res) => {
	
}

module.exports = {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout
}