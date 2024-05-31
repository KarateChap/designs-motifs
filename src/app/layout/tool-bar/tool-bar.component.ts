import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  pages = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Packages',
      url: '/packages',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  router = inject(Router);

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
