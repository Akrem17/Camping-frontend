import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';


const routes: Routes = [
  {path: 'tours', component: ToursOverViewComponent, },
  {path: 'login', component: LoginComponent, },
  {path: 'signup', component: SignUpComponent, },
  {path: '', redirectTo:'tours', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
