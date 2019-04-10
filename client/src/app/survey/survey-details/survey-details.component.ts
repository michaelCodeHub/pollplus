import { Survey } from './../../models/survey';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    if (this.title === 'Edit Contact') {
      this.getSurvey(this.survey);
    }
  }

  private getSurvey(survey: Survey): void {
    this.surveyService.getContact(survey).subscribe(data => {
      this.survey = data.contact;
    });
  }

   onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Survey':
      this.surveyService.addSurvey(this.survey).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/survey/survey-list']);
        } else {
          this.flashMessage.show('Add Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/survey/survey-list']);
        }
      });
      break;

      case 'Edit Survey':
      this.surveyService.editSurvey(this.survey).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/survey-list']);
        } else {
          this.flashMessage.show('Edit Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/survey-list']);
        }
      });
      break;
    }
  }

}
