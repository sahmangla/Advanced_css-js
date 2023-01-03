var productObj=require("./ProductModule");
var productDetails=productObj.productsdetails();
var categorywise=productObj.categorywise("Sports");
var range=productObj.pricerange(1000,5000);
var availability=productObj.stock(true);

// console.log(productDetails);
// console.log(categorywise);
// console.log(range);
// console.log(availability);
for(let item of productDetails)
{
   console.log(item);
    
}