const router = require("express").Router();
const Workout = require("../models/workout.js");

//get to retrieve workouts 
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get data for stats page 
router.get("api/workouts/stats", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// update and add excercise to the workout 
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    Workout.findByIdAndUpdate(req.params.id,
        { $push: {exercises: req.body}},
        {new: true, runValidators: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//post to create a new workout 
router.post("/api/workouts/", ({body}, res) => {
    console.log(body)
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;