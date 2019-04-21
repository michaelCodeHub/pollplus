// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: It will store the survey.

let mongoose = require("mongoose");

// create a model class
let surveySchema = mongoose.Schema(
  {
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
    },
    surveyFrom: {
      type: Date
    },
    surveyTill: {
      type: Date
    },
    questions: [
      {
        _id: String,
        question: String,
        option1: String,
        option2: String,
        option3: String,
        option4: String
      }
    ]
  },
  {
    collection: "survey"
  }
);

module.exports = mongoose.model("survey", surveySchema);
