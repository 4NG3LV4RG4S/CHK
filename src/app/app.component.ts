import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Agregar esta línea
})
export class AppComponent implements OnInit {
  title = 'CaronteCHK';

  randomBackgroundImageUrl: string = "";
  backgroundImageUrls: string[] = [
    '/assets/img1 (1).jpg',
    '/assets/img1 (2).jpg',
    '/assets/img1 (3).jpg',
    '/assets/img1 (4).jpg',
    '/assets/img1 (5).jpg',
    '/assets/img1 (6).jpg',
    '/assets/img1 (7).jpg',
    '/assets/img1 (8).jpg',
    '/assets/img1 (9).jpg',
    '/assets/img1 (10).jpg',
    '/assets/img1 (11).jpg',
  ];

  ngOnInit() {
    // Selecciona aleatoriamente una imagen del arreglo
    this.randomBackgroundImageUrl = this.backgroundImageUrls[
      Math.floor(Math.random() * this.backgroundImageUrls.length)
    ];
  }
}
