const router = require('express').Router();
let Routine = require('../models/routine.model');

router.route('/').get((req, res) => {
    Routine.find()
    .then(routines => res.json(routines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const routinename = req.body.routinename;
  const routinedetail = req.body.routinedetail;
  const routinetype = req.body.routinetype;

  const newRoutine = new Routine({
    routinename,
    routinedetail,
    routinetype
  });

  newRoutine.save()
  .then(() => res.json('Routine added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;