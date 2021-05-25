import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TourDetailsComponent } from './tours-over-view/tour-details/tour-details.component';
import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';


const routes: Routes = [
  {path: 'tours', component: ToursOverViewComponent, },
  {path: 'tours/add', component: AddTourComponent, },
  {path: 'tours/:id', component: TourDetailsComponent, },
  {path: 'login', component: LoginComponent, },
  {path: 'signup', component: SignUpComponent, },
  {path: '', redirectTo:'tours', pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
