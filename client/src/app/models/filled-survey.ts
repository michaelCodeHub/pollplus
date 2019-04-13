import { Answer } from "./answer";
export class FilledSurvey {
  _id: string;
  surveyTitle: string;
  userName: string;
  answers: Answer[];
  surveyCompletionDate: string;
}
