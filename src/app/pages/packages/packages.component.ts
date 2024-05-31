import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',

  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})
export class PackagesComponent {
  packages = [
    {
      packageName: 'Package 1',
      inclusions:
        'Thematic Color Balloon Backdrop, Cake Pedestal (1), Backdrop Panel (1), Celebrant Styro Name (7 Letters), Carpet on Buri Mat, Souvenir Rack (1), Single Chair (1), Spotlight (1)',
      packageUrl: '../../../assets/package-image.png',
      price: 3000,
    },
    {
      packageName: 'Package 2',
      inclusions:
        'Thematic Color Balloon Backdrop, Cake/Cupcake Pedestal (4), Backdrop Panel (3), Styro Name (10 Letters), Carpet on Buri Mat (1), Souvenir Rack (1), Bench Chair (1), Spotlight (2), Balloon Table Centerpieces (10)',
      packageUrl: '../../../assets/package-image.png',
      price: 5500,
    },
  ];
}
