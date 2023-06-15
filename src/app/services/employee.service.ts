import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  public employees = [
    { name: 'ali', age: 24, id: 1 },
    { name: 'sdsds', age: 23, id: 2 },
    { name: 'asaaaa', age: 22, id: 3 },
    { name: 'alaaai', age: 21, id: 4 },
  ];

  getEmployees() {
    return [
      { name: 'ali', age: 24, id: 1 },
      { name: 'sdsds', age: 23, id: 2 },
      { name: 'asaaaa', age: 22, id: 3 },
      { name: 'alaaai', age: 21, id: 4 },
    ];
  }
}
