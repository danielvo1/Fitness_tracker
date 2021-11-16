const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercise: [ 
        {
        type: {
            type: String, 
            trim: true, 
            required: "Enter a name for the workout"
        },
        name: {
            type: Number, 
            required: "10"
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;