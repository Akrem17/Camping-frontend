import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< Updated upstream

=======
import { LoginComponent } from './login/login.component';
>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< Updated upstream
    FooterComponent
=======
    FooterComponent,
    LoginComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
