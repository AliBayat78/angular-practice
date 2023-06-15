import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = 'https://rickandmortyapi.com/api/character/288';

  constructor(private http: HttpClient) {}

  public employees = [
    { name: 'ali', age: 24, id: 1 },
    { name: 'sdsds', age: 23, id: 2 },
    { name: 'asaaaa', age: 22, id: 3 },
    { name: 'alaaai', age: 21, id: 4 },
  ];

  getEmployees(): Observable<Object> {
    return this.http.get(this.url);
  }
}
