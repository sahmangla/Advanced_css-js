class Customer{
    public sid:number;
    public name:string;
    public city:string;
    constructor(sid:number=4598,name:string="Scott",city:string="Hyd")
    {
        this.sid=sid;
        this.name=name;
        this.city=city;
    }
    public showdetails()
    {
        console.log(`Customer Details:: Id : ${this.sid}, Name : ${this.name}, City : ${this.city}`);
    }
}
var obj1:Customer=new Customer();
var obj2:Customer=new Customer(3455);
var obj3:Customer=new Customer(3435,"Sahil");
var obj4=new Customer(3435,"Sahil","Chandigarh");
obj1.showdetails();
obj2.showdetails();
obj3.showdetails();
obj4.showdetails();
