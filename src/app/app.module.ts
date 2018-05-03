import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './ui/tabs/tabs.component';
import { PopulateTabsComponent } from './ui/populate-tabs/populate-tabs.component';

import { AppStateModule } from './state/state.module';
import { TabsService } from './services/tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    PopulateTabsComponent
  ],
  imports: [
    BrowserModule,
    AppStateModule
  ],
  providers: [TabsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
