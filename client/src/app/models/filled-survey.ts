// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: It will store data once user fills a survey and submits it.

import { Answer } from "./answer";
export class FilledSurvey {
  // tslint:disable-next-line: variable-name
  _id: string;
  surveyId: string;
  userName: string;
  answers: Answer[] = new Array();
  surveyCompletionDate: Date;
}
