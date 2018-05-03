import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tab } from  '../../models/tab.model';

export const SELECT_TAB = '[TAB] Select';
export const POPULATE_TABS = '[TABS] Populate';

export class SelectTab implements Action {

  readonly type = SELECT_TAB;

  constructor(public payload: Tab) {}

}

export class PopulateTabs implements Action {

  readonly type = POPULATE_TABS;

  constructor(public payload: Tab[]) {}

}

export type Actions = SelectTab | PopulateTabs;
