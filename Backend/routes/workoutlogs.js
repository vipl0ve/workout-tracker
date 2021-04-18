const router = require('express').Router();
let Workoutlog = require('../models/workoutlog.model');

router.route('/').get((req, res) => {
  Workoutlog.find()
    .then(workoutlogs => res.json(workoutlogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const workoutdate = Date.parse(req.body.workoutdate);
  const routinename = req.body.routinename;
  const duration = Number(req.body.duration);
  const username = req.body.username;

  const newWorkoutlog = new Workoutlog({
    workoutdate,
    routinename,
    duration,
    username
  });

  newWorkoutlog.save()
  .then(() => res.json('Workout Log added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;