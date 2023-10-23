import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent
  ],
  exports:[
    NavBarComponent, NotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
