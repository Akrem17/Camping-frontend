import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursOverViewComponent } from './tours-over-view/tours-over-view.component';


const routes: Routes = [
  {path: 'tours', component: ToursOverViewComponent, },
  {path: '', redirectTo:'tours', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
