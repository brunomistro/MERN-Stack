const express = require('express');
const router = express.Router();

// GET All
router.get("/", (req, res) => {
	res.json({mssg: "GET all workouts"})
})

// GET Single
router.get("/:id", (req, res) => {
	res.json({mssg: "GET single workouts"})
})

// POST a new
router.post("/", (req,res) => {
	res.json({mssg: "POST a new workouts"})
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