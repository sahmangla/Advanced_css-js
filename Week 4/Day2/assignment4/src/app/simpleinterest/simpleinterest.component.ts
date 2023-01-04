import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {
  principal:any="";
  rate:any="";
  time:any="";
  result:any="";
  total:number=0;
  x:boolean=true;
  getValue()
  {
    this.result=this.principal*this.rate*this.time;
    this.result=this.result/100;
    this.total=this.result+this.principal;
    this.x=false;
  }
}
