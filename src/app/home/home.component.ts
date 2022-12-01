import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { CurrentEmployeeService } from '../services/current-employee.service';
import { EmployeeapiService } from '../services/employeeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private employeeser:EmployeeapiService, public emp:CurrentEmployeeService, private router: Router) { }

  ngOnInit(): void {
    
    this.employeeser.getEmployees()
    .subscribe((result: Employee[]) => {
      this.emp.employees = result
    });
  }

  goToEdit(employee: Employee){
    this.router.navigate(['/edit',employee.id])
  }

  goToDelete(employee: Employee){
    this.router.navigate(['/delete',employee.id])
  }

}
