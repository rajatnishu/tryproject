import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { homepageComponent}  from './homepage/homepage.component';
import { navbarComponent} from './navbar/navbar.component';
import { foodComponent} from './food/food.component';
import { groceriesComponent} from './groceries/groceries.component';


@NgModule({
  declarations: [
    AppComponent,
    homepageComponent,
    navbarComponent,
    foodComponent,
    groceriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
