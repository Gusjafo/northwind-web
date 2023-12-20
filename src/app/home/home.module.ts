import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { HomeBComponent } from './home-b/home-b.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HomeComponent, HomeContainerComponent, HomeBComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
