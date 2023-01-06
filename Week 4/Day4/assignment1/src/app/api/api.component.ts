import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  public result:any[]=[];
  public show:boolean=true;
  constructor(private object:HttpClient)
  {
    let url:string="https://reqres.in/api/users";
    this.object.get(url).subscribe((response:any)=>{

      this.result=response.data;
    })
  }
  show_data()
  {
this.show=false;
  }

}
