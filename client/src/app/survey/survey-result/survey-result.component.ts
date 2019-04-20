import { Component, OnInit } from '@angular/core';
import { Answer } from './../../models/answer';
import { saveAs } from '../../../../node_modules/file-saver';

import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { AuthService } from 'src/app/services/auth.service';
import { Survey } from 'src/app/models/survey';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
import { FilledSurvey } from 'src/app/models/filled-survey';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {

  title: string;
  survey: Survey;
  questions: Question[];
  user: User;
  filledSurvey: FilledSurvey[];
  answers: Answer[];

  option1Count: number[];
  option2Count: number[];
  option3Count: number[];
  option4Count: number[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.option1Count = new Array<number>();
    this.option2Count = new Array<number>();
    this.option3Count = new Array<number>();
    this.option4Count = new Array<number>();

    this.filledSurvey = new Array<FilledSurvey>();
    this.user = new User();
    this.questions = new Array<Question>();
    this.answers = new Array<Answer>();
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    this.getSurvey(this.survey);


  }

  download() {
    this.downloadFile(this.filledSurvey);
  }

  downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    console.log(csvArray);

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "myFile.csv");
  }


  private getSurvey(survey: Survey): void {
    this.surveyService.getSurveyAnswers(survey).subscribe(data => {
      this.survey = data.survey;
      this.filledSurvey = data.answers;
      this.questions = this.survey.questions;

      this.questions.forEach(element => {
        this.option1Count.push(0);
        this.option2Count.push(0);
        this.option3Count.push(0);
        this.option4Count.push(0);
      });

      this.filledSurvey.forEach(element => {
        for (let index = 0; index < element.answers.length; index++) {
          switch (element.answers[index].answer) {

            case '1':
              this.option1Count[index] = this.option1Count[index] + 1;
              break;

            case '2':
              this.option2Count[index] = this.option2Count[index] + 1;
              break;

            case '3':
              this.option3Count[index] = this.option3Count[index] + 1;
              break;

            case '4':
              this.option4Count[index] = this.option4Count[index] + 1;
              break;

            default:
              break;
          }
        }
      });
    });
  }

}
