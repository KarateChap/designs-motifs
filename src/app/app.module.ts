import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { ToolBarComponent } from './layout/tool-bar/tool-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule, BrowserModule],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    DatePipe,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
})
export class AppModule {}
