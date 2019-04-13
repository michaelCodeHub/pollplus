
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { AuthService } from 'src/app/services/auth.service';
import { Survey } from 'src/app/models/survey';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {

  title: string;
  survey: Survey;
  questions: Question[];
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.user = new User();
    this.questions = new Array<Question>();
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    this.getSurvey(this.survey);

  }

  private getSurvey(survey: Survey): void {
    this.surveyService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.questions = this.survey.questions;
    });
  }

  onSurveySubmit(): void {
    console.log('sss');

    this.questions.forEach(element => {
      console.log(((document.getElementById(element.question) as HTMLInputElement).value));
    });

  }

}
