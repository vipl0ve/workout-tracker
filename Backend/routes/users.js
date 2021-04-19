const router = require('express').Router();
let User = require('../models/user.model');

// Get All Users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Add User
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const age = Number(req.body.age);
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  const newUser = new User({username, gender, age, weight, height});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get User
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete User
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update User
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.gender = req.body.gender;
      user.age = Number(req.body.age);
      user.weight = Number(req.body.weight);
      user.height = Number(req.body.height);

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;