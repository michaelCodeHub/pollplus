import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[];
  username: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();

    this.activatedRoute.params.subscribe(params => {
      this.username = params.username;
    });

    if (this.username != null){

      this.displayMySurveyList(this.username);
    } else {

    this.displaySurveyList();
    }
  }
  displaySurveyList(): void {
    this.surveyService.getList().subscribe(data => {
      if (data.success) {
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  displayMySurveyList(username: string): void {
    this.surveyService.getMySurvey(username).subscribe(data => {
      if (data.success) {
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if (!confirm('Are You Sure?')) {
      this.router.navigate(['/survey/list']);
    }
  }



}
