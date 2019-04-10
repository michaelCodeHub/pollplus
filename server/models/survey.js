let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
  _id: String,
  surveyTitle: {
    type: String,
    default: "",
    trim: true,
    required: "Title is required"
  },
  surveyAuthor: String,
  createDateAndTime: { 
    type: Date,
    default: Date.now
  }
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', surveySchema);