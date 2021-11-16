const router = require("express").Router();
const Workout = require("../models/workout.js");

//post to create a new workout 
router.post("/api/workout", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;