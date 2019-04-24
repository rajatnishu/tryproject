import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { navbarComponent } from './navbar/navbar.component';
import { homepageComponent } from './homepage/homepage.component';
import { foodComponent } from './food/food.component';
import { groceriesComponent } from './groceries/groceries.component';
import { from } from 'rxjs';




const routes: Routes = [
  { path : '', redirectTo:'homepage',pathMatch:'full'},
  { path :  'homepage', component:homepageComponent },
  { path :  'navbar', component:navbarComponent },
  { path :  'food', component:foodComponent },
  { path :  'groceries', component:groceriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
