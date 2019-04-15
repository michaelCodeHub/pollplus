import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/models/survey';

// TODO: Replace this with your own data model type

/**
 * Data source for the SurveyGrid view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SurveyGridDataSource extends DataSource<Survey> {
  data: Survey[] =  this.displaySurveyList(); // new Array<Survey>(); // = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort,
              private surveyService: SurveyService,
              private flashMessage: FlashMessagesService) {
    super();


  }
  displaySurveyList(): Survey[] {
    let d: any;
    this.surveyService.getList().subscribe(data => {
      if (data.success) {
        console.log('call dis');
        d = data.surveyList;

      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }

    });
    return d;
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Survey[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Survey[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Survey[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'surveyFrom': return compare(a.surveyFrom, b.surveyFrom, isAsc);
        case 'surveyTill': return compare(a.surveyTill, b.surveyTill, isAsc);
        case 'surveyAuthor': return compare(a.surveyAuthor, b.surveyAuthor, isAsc);
        case 'createDateAndTime': return compare(a.createDateAndTime, b.createDateAndTime, isAsc);
        case 'surveyTitle': return compare(a.surveyTitle, b.surveyTitle, isAsc);
        case '_id': return compare(+a._id, +b._id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
