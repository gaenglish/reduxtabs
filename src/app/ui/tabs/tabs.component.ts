import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tabs } from '../../state/tabs';
import * as TabActions from '../../state/tabs';
import { AppState } from '../../state/state';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: Observable<Tab[]>;
  selectedTab: Observable<Tab>;
  tabsLoaded: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.tabs = this.store.select(t => t.tabs.allTabs);
    this.selectedTab = this.store.select(t => t.tabs.selectedTab);
    this.tabsLoaded = this.store.select(t => t.tabs.tabsLoaded);
  }

  selectTab(tab: Tab) {
    this.store.dispatch(new TabActions.SelectTab(tab));
  }


}
