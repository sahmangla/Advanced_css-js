function maxtwonumber(x, y) {
    if (x > y)
        return x;
    return y;
}
function max() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var max = arr[0];
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var item = arr_1[_a];
        max = maxtwonumber(max, item);
    }
    return max;
}
var result = max(12, 45, 23, 98, 76, 45);
console.log("MAXIMUM :  " + result);
