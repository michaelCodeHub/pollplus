// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: When a user created a new survey all the data will be stored in the Survey table.

import { Question } from "./question";
export class Survey {
  // tslint:disable-next-line: variable-name
  _id: string;
  surveyTitle: string;
  surveyAuthor: string;
  surveyFrom: Date;
  surveyTill: Date;
  createDateAndTime: Date;
  questions: Question[];
}
