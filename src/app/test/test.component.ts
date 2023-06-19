import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { employeeType } from '../models/models';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor(
    private _employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public employees: any[] = [];
  public errorMessage: string = '';

  public names = ['ali', 'ahmad', 'reza', 'mamad'];
  public inputValue = 'ss';

  inputValueHandler(name: string) {
    this.inputValue = name;
  }

  public childMessage: string = 'This is a Data from Child';

  @Input('parentData') public receivedMessage: string = '';

  @Output() public childEvent = new EventEmitter();
  sendMessage() {
    this.childEvent.emit(this.childMessage);
  }

  ngOnInit() {
    this.sendMessage();

    this._employeeService.getEmployees().subscribe(
      (data) => this.employees.push(data),
      (error) => (this.errorMessage = error)
    );
  }
  goToDetailedComp(employee: employeeType) {
    this.router.navigate(['/test', employee.id]);
  }
  public date = new Date();
}
