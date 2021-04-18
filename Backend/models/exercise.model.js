const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercisename: { type: String, required: true, trim: true },
  progname: { type: String, trim: true },
  progrank: { type: Number },
  discription: { type: String, trim: true },
  type: { type: String, required: true, trim: true }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;