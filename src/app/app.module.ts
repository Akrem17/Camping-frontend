import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';
import { TourCardComponent } from './tours-over-view/tour-card/tour-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthInterceptor } from 'src/shared/services/auth-interceptors';
import { TourDetailsComponent } from './tours-over-view/tour-details/tour-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ToursOverViewComponent,
    TourCardComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    TourDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
