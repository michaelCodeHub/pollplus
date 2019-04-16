
// import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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
