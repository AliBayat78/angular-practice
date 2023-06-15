import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-practice';

  public outPostedMessage: string = 'This is a Data From Parent';
  public receivedMessage: string = '';
}
