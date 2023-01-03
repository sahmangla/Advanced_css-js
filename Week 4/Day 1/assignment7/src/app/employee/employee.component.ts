import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeObj:any={id:546567,name:"Stephen",job:"MANAGER",sal:75000,dep:19};

}
