import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';
import { TourCardComponent } from './tours-over-view/tour-card/tour-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ToursOverViewComponent,
    TourCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
