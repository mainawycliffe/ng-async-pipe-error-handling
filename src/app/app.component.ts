import { Component } from '@angular/core';
import { AsyncServiceService } from './async-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public asyncOps$: Observable<any> = null;

  public errorObject: Object = null;
  private hasError = false;

  constructor(private asyncService: AsyncServiceService) {
    this.asyncOps$ = asyncService.listOfCountries().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  toggleError() {
    if (this.hasError === true) {
      this.hasError = false;
    } else {
      this.hasError = true;
    }

    this.errorObject = null;

    this.asyncOps$ = this.asyncService.listOfCountries(this.hasError).pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
}
