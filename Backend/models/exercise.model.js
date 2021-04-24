const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  progname: { type: String, required: true, trim: true },
  exercisename: { type: String, required: true, trim: true },
  progrank: { type: Number },
  discription: { type: String, trim: true },
  type: { type: String, required: true, trim: true }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;