import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SurveyGridDataSource } from './survey-grid-datasource';
import { SurveyService } from 'src/app/services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-survey-grid',
  templateUrl: './survey-grid.component.html',
  styleUrls: ['./survey-grid.component.css']
})

export class SurveyGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SurveyGridDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'surveyTitle', 'surveyAuthor', 'surveyFrom', 'surveyTill', 'createDateAndTime'];
  constructor(
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService
  ) { }
  ngOnInit() {
    this.dataSource = new SurveyGridDataSource(this.paginator, this.sort, this.surveyService, this.flashMessage);
  }

}
