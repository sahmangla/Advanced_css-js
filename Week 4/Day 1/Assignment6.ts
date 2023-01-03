function maxtwonumber(x:number,y:number):number
{
    if(x>y)
        return x;
        return y;
    
}

function max(...arr:number[]):number{
    let max:number=arr[0];
    for(let item of arr)
    {
        max=maxtwonumber(max,item);
    }
    return max;
}
var result:number=max(12,45,23,98,76,45);
console.log("MAXIMUM :  "+result);