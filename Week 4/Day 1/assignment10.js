var Smartphone = /** @class */ (function () {
    function Smartphone(x, y, s, st, p) {
        this.x = x;
        this.y = y;
        this.start = s;
        this.stop = st;
        this.pause = p;
    }
    Smartphone.prototype.getcoordinates = function () {
        console.log("Coordinates X : ".concat(this.x, ", Y : ").concat(this.y));
    };
    Smartphone.prototype.getmode = function () {
        console.log("Start : ".concat(this.start, ", Stop : ").concat(this.stop, ", Pause : ").concat(this.pause));
    };
    return Smartphone;
}());
var obj = new Smartphone(3, 66, true, false, false);
obj.getcoordinates();
obj.getmode();
