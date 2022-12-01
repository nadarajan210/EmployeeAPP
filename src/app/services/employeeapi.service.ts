import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeapiService {
  url = "Employee";

  constructor(private http: HttpClient) { }
  employees : Employee[] = [];

  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.baseUrl}/${this.url}`);
  }

  public updateEmployees(employee: Employee) : Observable<Employee[]> {
    return this.http.put<Employee[]>(`${environment.baseUrl}/${this.url}`,employee);
  }

  public createEmployees(employee: Employee) : Observable<Employee[]> {
    return this.http.post<Employee[]>(`${environment.baseUrl}/${this.url}`,employee);
  }

  public getEmployee(id: number) : Observable<Employee>{
    return this.http.get<Employee>(`${environment.baseUrl}/${this.url}/${id}`);
  }

  public deleteEmployee(id: number) : Observable<Employee[]>{
    return this.http.delete<Employee[]>(`${environment.baseUrl}/${this.url}/${id}`);
  }
}
