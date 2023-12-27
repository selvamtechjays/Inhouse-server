const mongoose = require("mongoose");

// Create a new schema for Tracker
const trackerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeCode: {
    type: Number,
    unique: true,
    required: true,
    trim: true, // Added trim: true
  },
  techStack: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  priority: {
    type: String,
  },
});

// Create a model named 'Tracker' using the trackerSchema
const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
