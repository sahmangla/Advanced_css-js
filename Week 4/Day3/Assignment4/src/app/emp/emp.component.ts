import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
obj:any[]=[{id:1,name:"Sahil",job:"Manager",sal:34455},
{id:2,name:"Hemant",job:"Senior Manager",sal:100000},
{id:3,name:"Samridhi",job:"Analyst",sal:50000},
{id:4,name:"Kritika",job:"Senior Manager",sal:30000},
{id:5,name:"Ayush",job:"Consulting",sal:104000},
{id:6,name:"Kunal",job:"Analyst",sal:75000},
{id:7,name:"Raghav",job:"Consulting",sal:54000},
{id:8,name:"Harsh",job:"Manager",sal:30000},
{id:9,name:"Puneet",job:"Analyst",sal:123000},
{id:10,name:"Arsh",job:"Senior Manager",sal:200000},
{id:11,name:"Jasjot",job:"Manager",sal:23000}];
low:any="";
high:any="";
}
