import { Action } from '@ngrx/store';
import { Tabs } from  './tabs.model';
import * as TabActions from './tabs.actions';

const initialState: Tabs = {
  allTabs: [],
  selectedTab: { label: '', body: ''},
  tabsLoaded: false
};

const newState = (state, newState) => {
  return Object.assign({}, state, newState);
};

export function tabsReducer(state: Tabs, action: TabActions.Actions ): Tabs {

  switch(action.type) {

    case TabActions.SELECT_TAB:

      return newState(state, { selectedTab: action.payload });

    case TabActions.POPULATE_TABS:

      return newState(state, { allTabs: action.payload, tabsLoaded: true });

    default:
      return initialState;
  }
}

