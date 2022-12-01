import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { CurrentEmployeeService } from '../services/current-employee.service';
import { EmployeeapiService } from '../services/employeeapi.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private employeeser:EmployeeapiService, private router:Router, public emp:CurrentEmployeeService) { }

  public employees : any;
  public id:any;

  ngOnInit(): void {
    let val = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(val !==  null ? val:"");
    this.employeeser.getEmployee(this.id).subscribe((result: Employee) =>{
      this.employees = result
    })
  }

  DeleteEmployee(employee: Employee){
    this.employeeser.deleteEmployee(employee.id).subscribe((employees: Employee[]) => {
      this.emp.employees = employees
    });
    this.router.navigate(['']);
  }

}
