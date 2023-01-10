import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  public result:any[]=[];
  public name:any="";
  public job:any="";
  public sal:any="";
  public dept:any="";
  public show:boolean=true;

constructor(private httpobj:HttpClient)
{
}
get_data()
{
  let url:string="http://localhost:3400/students/";
  
  this.httpobj.get(url).subscribe((response:any)=>
  {
    
    this.show=false;
    this.result=response;
  })
}
 add_data()
{
  let url:string="http://localhost:3400/students";
  let obj:any={};
  obj.empname=this.name;
  obj.job=this.job;
  obj.deptno=this.dept;
  obj.sal=this.sal;
  this.httpobj.post(url,obj).subscribe(response=>{
    alert("User Data is Updated");
    this.get_data();
  })
}
Delete(id:number)
{
  let url:string="http://localhost:3400/students/";
  this.httpobj.delete(url + id).subscribe(response=>{
    alert("Data is Deleted");
    this.get_data();
  })
}
Select(id:number)
{
  let url:string="http://localhost:3400/students/";
  this.httpobj.get(url+id).subscribe((response:any)=>{
    this.name=response.empname;
    this.job=response.job;
    this.dept=response.deptno;
    this.sal=response.sal;
  })
}
Update(id:number)
{
  let url:string="http://localhost:3400/students/";
  let obj:any={};
  obj.empname=this.name;
  obj.job=this.job;
  obj.deptno=this.dept;
  obj.sal=this.sal;
  this.httpobj.put(url+id,obj).subscribe(response=>{
    alert("Data is Updated");
    this.get_data();
  })

}

}
