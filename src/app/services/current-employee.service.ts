import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class CurrentEmployeeService {

  constructor() { }

  employees : Employee[] = [];
}
