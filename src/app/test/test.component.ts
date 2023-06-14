import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  public names = ['ali', 'ahmad', 'reza', 'mamad'];
  public inputValue = 'ss';

  inputValueHandler(name: string) {
    this.inputValue = name;
  }

  public childMessage: string = '';
  @Output() public childEvent = new EventEmitter();
  childMessageHandler() {
    this.childEvent.emit(this.childMessage);
  }

  @Input('parentData') public messageFromParent: string = '';
}
