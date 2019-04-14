import { Answer } from './answer';
export class Question {
  _id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  answers: Answer[];
}
