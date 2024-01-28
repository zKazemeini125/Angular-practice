import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage: number = 0;
  title = 'testApp';
  boxes = [
    { title: 'motealeghat', color: 'red' },
    { title: 'motealeghat', color: 'blue' },
    { title: 'motealeghat', color: 'gray' },
    { title: 'motealeghat', color: '#802525' },
    { title: 'motealeghat', color: '#ff2525' },
    { title: 'motealeghat', color: '#002599' },
    { title: 'motealeghat', color: '#141518' },
  ];
}
