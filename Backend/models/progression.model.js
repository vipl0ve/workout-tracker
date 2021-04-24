const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const progressionSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, trim: true },
  type: { type: String, required: true, trim: true }
}, {
  timestamps: true,
});

const Progression = mongoose.model('Progression', progressionSchema);

module.exports = Progression;