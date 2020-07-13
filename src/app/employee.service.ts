import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id" : 1, "name":"Andrew", "age" : 30},
      {"id" : 2, "name":"Brendan", "age" : 28},
      {"id" : 3, "name":"Collin", "age" : 32},
      {"id" : 4, "name":"Steve", "age" : 22},
    ];
  }

}