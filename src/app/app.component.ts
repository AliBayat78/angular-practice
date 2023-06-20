import {
  AfterViewInit,
  Component,
  ComponentRef,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges, DoCheck {
  title = 'Angular-practice';

  public inputValue: string = 'default';

  // get inputValue(): string {
  //   return this._inputValue;
  // }

  // set inputValue(value: string) {
  //   this._inputValue = value;
  //   if (value === 'alert') {
  //     alert('alert');
  //   }
  // }

  @ViewChild('inputReference', { static: false })
  inputReference: ElementRef<HTMLInputElement> = {} as ElementRef;

  @ViewChild('childComponent', { static: false })
  childReference!: ElementRef<TestComponent>;

  ngAfterViewInit(): void {
    console.log(this.inputReference.nativeElement);

    if (this.childReference) {
      console.log(this.childReference.nativeElement.employees);
    }
  }

  ngOnInit() {
    console.log(this.inputReference.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['inputValue']);
    console.log(changes);
  }

  ngDoCheck(): void {
    if (this.inputValue === 'new') {
      console.log('data is changed');
    }
  }

  constructor(private router: Router) {}

  public outPostedMessage: string = 'This is a Data From Parent';
  public receivedMessage: string = '';

  isTestRoute() {
    return this.router.url === 'test';
  }
}
