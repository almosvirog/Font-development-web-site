import { Injectable } from '@angular/core';
import { MOCK_BOOK } from './mocks/mock-book';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from './models/content';

@Injectable()
export class DataProviderService {

  constructor() { }

  getBook() : Observable<Book> {
    return of(MOCK_BOOK);
  }

}
