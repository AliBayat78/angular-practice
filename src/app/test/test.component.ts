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

  public hasError = false;
  public isSpecial = true;
  
  public messageClasses = {
    'text-red': this.hasError,
    'text-blue': !this.hasError,
    'text-special': this.isSpecial
  }

  siteUrl: string = window.location.href;
}
