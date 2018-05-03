import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TabsMock } from './mock/tabs-mock';

import { Tab } from '../models/tab.model';

@Injectable()
export class TabsService {

  constructor() { }

  getTabs(): Observable<Tab[]> {
    return Observable.of(TabsMock);
  }

}
