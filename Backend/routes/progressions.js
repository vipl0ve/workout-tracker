const router = require('express').Router();
let Progression = require('../models/progression.model');

// Get All Progressions
router.route('/').get((req, res) => {
    Progression.find()
    .then(progressions => res.json(progressions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Progression
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const discription = req.body.discription;
  const type = req.body.type;

  const newProgression = new Progression({
    title,
    discription,
    type
  });

  newProgression.save()
  .then(() => res.json('Progression added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get Progression
router.route('/:id').get((req, res) => {
    Progression.findById(req.params.id)
    .then(progression => res.json(progression))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Progression
router.route('/:id').delete((req, res) => {
    Progression.findByIdAndDelete(req.params.id)
    .then(() => res.json('Progression deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update Progression
router.route('/update/:id').post((req, res) => {
    Progression.findById(req.params.id)
    .then(progression => {
      progression.title = req.body.title;
      progression.discription = req.body.discription;
      progression.type = req.body.type;

      progression.save()
        .then(() => res.json('Progression updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;