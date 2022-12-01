import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeapiService } from '../services/employeeapi.service';
import { Router } from '@angular/router';
import { CurrentEmployeeService } from '../services/current-employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() employeesUpdated = new EventEmitter<Employee[]>();
  employee : Employee = new Employee();
  constructor(private employeeser:EmployeeapiService, public emp:CurrentEmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  createEmployee(employee: Employee){
    this.employeeser.createEmployees(employee).subscribe((employees: Employee[]) => {
      this.emp.employees = employees
    });
    this.router.navigate(['']);
  }

}
