import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-practice';

  public inputValue: string = 'default';

  alertHandler(updatedValue: string) {
    this.inputValue = updatedValue;
    if (updatedValue === 'alert') {
      alert('this is an alert');
    }
  }

  constructor(private router: Router) {}

  public outPostedMessage: string = 'This is a Data From Parent';
  public receivedMessage: string = '';

  isTestRoute() {
    return this.router.url === 'test';
  }
}
