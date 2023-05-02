const express= require('express')

const {
    getWorkouts,
    createWorkout,
    deleteWorkout
}= require('../Controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth.js')

const router= express.Router()

router.use(requireAuth)

router.get('/',getWorkouts)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

module.exports= router