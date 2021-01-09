import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amaday';
  navbarItems = [
    {link: 'Music', href: '/music'},
    {link: 'Video', href: '/video'},
  ];

  showModal(): void {
    document.querySelector('.modal').classList.add('show');
  }

  hideModal(): void {
    document.querySelector('.modal').classList.remove('show');
  }
}
