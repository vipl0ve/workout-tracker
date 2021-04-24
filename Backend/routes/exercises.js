const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Get All Exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Exercise
router.route('/add').post((req, res) => {
  const exercisename = req.body.exercisename;
  const progname = req.body.progname;
  const progrank = Number(req.body.progrank);
  const discription = req.body.discription;
  const type = req.body.type;

  const newExercise = new Exercise({
    exercisename,
    progname,
    progrank,
    discription,
    type
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get Exercise
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Exercise
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update Exercise
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.progname = req.body.progname;
      exercise.exercisename = req.body.exercisename;
      exercise.progrank = Number(req.body.progrank);
      exercise.discription = req.body.discription;
      exercise.type = req.body.type;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;