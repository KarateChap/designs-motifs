import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/sample1.jpg',
      thumbImage: 'assets/sample1.jpg',
      alt: 'sample 1',
    },
    {
      image: 'assets/sample2.jpg',
      thumbImage: 'assets/sample2.jpg',
      alt: 'sample 2',
    },
    {
      image: 'assets/sample3.jpg',
      thumbImage: 'assets/sample3.jpg',
      alt: 'sample 3',
    },
    {
      image: 'assets/sample4.jpg',
      thumbImage: 'assets/sample4.jpg',
      alt: 'sample 4',
    },
    {
      image: 'assets/sample5.jpg',
      thumbImage: 'assets/sample5.jpg',
      alt: 'sample 5',
    },
    {
      image: 'assets/sample6.jpg',
      thumbImage: 'assets/sample6.jpg',
      alt: 'sample 6',
    },
    {
      image: 'assets/sample7.jpg',
      thumbImage: 'assets/sample7.jpg',
      alt: 'sample 7',
    },
    {
      image: 'assets/sample8.jpg',
      thumbImage: 'assets/sample8.jpg',
      alt: 'sample 8',
    },
    {
      image: 'assets/sample9.jpg',
      thumbImage: 'assets/sample9.jpg',
      alt: 'sample 9',
    },
    {
      image: 'assets/sample10.jpg',
      thumbImage: 'assets/sample10.jpg',
      alt: 'sample 10',
    },
    {
      image: 'assets/sample11.jpg',
      thumbImage: 'assets/sample11.jpg',
      alt: 'sample 11',
    },
  ];
}
