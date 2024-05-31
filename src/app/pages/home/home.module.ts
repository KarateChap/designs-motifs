import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgImageSliderModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class HomeModule {}
