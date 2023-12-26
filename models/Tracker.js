
const mongoose = require("mongoose");

//create new schema for Team
const trackers = mongoose.model("TrackerSchema", {
  name: {
    type: String,
    required: true,
  },
  employeeCode: {
    type: String,
    unique: true,
    required:true
    // Removed trim: true,
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
    type: String, // Changed data type to Number
    required: true,
  },
  priority: {
    type: String,
    
    // Constraints unchanged
  },
});

module.exports = { trackers };