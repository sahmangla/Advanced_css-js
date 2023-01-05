import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  obj:any[]=[{id:1,name:"Scott",grade:1},{id:2,name:"Sahil",grade:4},{id:3,name:"Hemant",grade:1},{id:4,name:"Samridhi",grade:3},{id:5,name:"Kritika",grade:2},{id:6,name:"Ayush",grade:5},{id:7,name:"Raghav",grade:3},{id:8,name:"Kunal",grade:2}];

}
