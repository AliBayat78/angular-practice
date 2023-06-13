import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  name: string = 'ali';

  public firstInputValue: string = 'first Input';
  public secondInputValue: string = 'second Input';
  public isDisabled = false;

  siteUrl: string = window.location.href;
}
