import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SurveyService } from 'src/app/services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-grid',
  templateUrl: './survey-grid.component.html',
  styleUrls: ['./survey-grid.component.css']
})

export class SurveyGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Survey>;
  searchKey: string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['surveyTitle', 'surveyAuthor', 'surveyFrom', 'surveyTill', 'createDateAndTime', 'actions'];
  constructor(
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService
  ) { }
  ngOnInit() {
    this.surveyService.getList().subscribe(
      data => {
        let array: Survey[];
        if (data.success) {
        // console.log('call dis' + data.surveyList);
        array = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
        this.dataSource = new MatTableDataSource(array);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
