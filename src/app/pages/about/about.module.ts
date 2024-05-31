import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  providers: [],
})
export class AboutModule {}
