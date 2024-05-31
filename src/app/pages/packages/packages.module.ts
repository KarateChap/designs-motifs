import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';

const routes: Routes = [{ path: '', component: PackagesComponent }];

@NgModule({
  declarations: [PackagesComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  providers: [],
})
export class PackagesModule {}
