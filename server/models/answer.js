// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: It will store the answers for each questions filled by a user in the survey.

let mongoose = require("mongoose");

// create a model class
let answerSchema = mongoose.Schema(
  {
    surveyId: {
      type: String
    },
    username: String,
    surveyCompletionDate: {
      type: Date,
      default: Date.now
    },
    answers: [
      {
        _id: String,
        question: String,
        answer: String
      }
    ]
  },
  {
    collection: "answer"
  }
);

module.exports = mongoose.model("answer", answerSchema);
