import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/state';
import * as TabActions from '../../state/tabs';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'populate-tabs',
  templateUrl: './populate-tabs.component.html',
  styleUrls: ['./populate-tabs.component.css']
})
export class PopulateTabsComponent implements OnInit {

  constructor(private store: Store<AppState>, private tabsService: TabsService) { }

  ngOnInit() {
  }

  populateTabs() {
    this.tabsService.getTabs().subscribe(tabs => this.store.dispatch(new TabActions.PopulateTabs(tabs)));
  }

}
