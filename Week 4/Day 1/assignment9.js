var Customer = /** @class */ (function () {
    function Customer(sid, name, city) {
        if (sid === void 0) { sid = 4598; }
        if (name === void 0) { name = "Scott"; }
        if (city === void 0) { city = "Hyd"; }
        this.sid = sid;
        this.name = name;
        this.city = city;
    }
    Customer.prototype.showdetails = function () {
        console.log("Customer Details:: Id : ".concat(this.sid, ", Name : ").concat(this.name, ", City : ").concat(this.city));
    };
    return Customer;
}());
var obj1 = new Customer();
var obj2 = new Customer(3455);
var obj3 = new Customer(3435, "Sahil");
var obj4 = new Customer(3435, "Sahil", "Chandigarh");
obj1.showdetails();
obj2.showdetails();
obj3.showdetails();
obj4.showdetails();
