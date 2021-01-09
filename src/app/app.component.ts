import {Component, ElementRef, ViewChild} from '@angular/core';

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

  @ViewChild('modal') modal: ElementRef;

  showModal(): void {
    this.modal.nativeElement.classList.add('show');
    if (window.navigator.userAgent.includes('Firefox')) {
      this.modal.nativeElement.classList.add('background-black');
    }
  }

  hideModal(): void {
    this.modal.nativeElement.classList.remove('show');
  }
}
