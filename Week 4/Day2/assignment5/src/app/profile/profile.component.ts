import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:any="";
  name:string="";
  price:any="";
  cat:string="";
  qty:any="";
  showingdetails:boolean=true;
obj:any[]=[{id:1,name:"Prd1",price:1000,cat:"cat1",qty:1}, {id:2,name:"Prd2",price:2000,cat:"cat2",qty:2},{id:3,name:"Prd3",price:3000,cat:"cat3",qty:3},{id:4,name:"Prd4",price:4000,cat:"cat4",qty:4}];
onf1get()
{ 
  this.showingdetails=false;
}
onf2add()
{
  let obj1:any={id:this.id,name:this.name,price:this.price,cat:this.cat,qty:this.qty};
  this.obj.push(obj1);
}
onf3upd()
{
  var obj2:any=this.obj.find((item)=>item.id==this.id);
  obj2.name=this.name;
  obj2.price=this.price;
  obj2.cat=this.cat;
  obj2.qty=this.qty;

}
onf4res()
{
  var len:number=this.obj.length;
  while(len--)
  {
    this.obj.pop();
  }
}
delete(i:number){
  this.obj.splice(i,1);
}
update(i:number)
{
  let obj2:any=this.obj[i];
  // obj2.id=this.id;
  // obj2.name=this.name;
  // obj2.price=this.price;
  // obj2.cat=this.cat;
  // obj2.qty=this.qty;d
   let name1:any=window.prompt("Product Name");
   let price1:any=window.prompt("Price");
   let cat1:any=window.prompt("Category");
   let qty1:any=window.prompt("Quantity");
   obj2.name=name1;
   obj2.price=price1;
   obj2.cat=cat1;
   obj2.qty=qty1;
}

}
