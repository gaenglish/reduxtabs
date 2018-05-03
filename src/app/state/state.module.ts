import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { tabsReducer } from './tabs/tabs.reducer'

@NgModule({
  imports: [

    StoreModule.forRoot({
      tabs: tabsReducer
    })
  ],
  providers: [],
})
export class AppStateModule { }
