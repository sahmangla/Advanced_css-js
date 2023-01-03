var productarr=[{name:"Headphones",category:"electronics",price:2000,avail:true},
{name:"Cricket Bat",category:"Sports",price:4000,avail:true},
{name:"Phone",category:"electronics",price:20000,avail:false},
{name:"Charger",category:"electronics",price:1000,avail:true},
{name:"Bottles",category:"Accessories",price:900,avail:false},
{name:"Duster",category:"Accessories",price:200,avail:true},
{name:"Ball",category:"Sports",price:1000,avail:true},
{name:"Bag",category:"Accessories",price:2000,avail:false}];
exports.productsdetails=function()
{
    let arr=[];
    for(let item of productarr)
    {   
        str=`Product Name ----> ${item.name}, Category ----> ${item.category}, Price ----> ${item.price}, Availability ----> ${item.avail}`;
        arr.push(str);
    }
    return arr;
}
exports.categorywise=function(x){
    let arr=[];
    for(let item of productarr)
    {
        if(item.category==x)
        {
            str=`Product Name ----> ${item.name}, Category ----> ${item.category}, Price ----> ${item.price}, Availability ----> ${item.avail}`;
            arr.push(str);
        }
    }
    return arr;
}
exports.pricerange=function(x=0,y=50000)
{
    let arr=[];
    for(let item of productarr)
    {
        if(item.price>=x && item.price<=y)
        {
            str=`Product Name ----> ${item.name}, Category ----> ${item.category}, Price ----> ${item.price}, Availability ----> ${item.avail}`;
            arr.push(str);
        }
    }
    return arr;
}
exports.stock=function(x)
{
    let arr=[];
    for(let item of productarr)
    {
        if(item.avail==x)
        {
            str=`Product Name ----> ${item.name}, Category ----> ${item.category}, Price ----> ${item.price}, Availability ----> ${item.avail}`;
            arr.push(str);
        }
    }
    return arr;
}
