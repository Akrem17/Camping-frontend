import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream


const routes: Routes = [];
=======
import { LoginComponent } from './login/login.component';
import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';


const routes: Routes = [
  {path: 'tours', component: ToursOverViewComponent, },
  {path: '', redirectTo:'tours', pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
