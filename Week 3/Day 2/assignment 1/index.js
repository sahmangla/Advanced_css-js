const { v4: uuidv4 } = require('uuid');
const jsConvert = require('js-convert-case');
var arr=[{"uname":"sahil","email":"SahIlMangla@gmail.COm"},{"uname":"samridhi","email":"SaMRidHIjinDal@gmail.COm"},{"uname":"Kritika","email":"KRItikaGuPta@gmail.COm"},{"uname":"HEMANT","email":"HEmantSOni@gmail.COm"}];
for(let i=0;i<arr.length;i++)
{
    arr[i].cardId=uuidv4(); 
}
for(let i=0;i<arr.length;i++)
{
    console.log("User Id = " + jsConvert.toHeaderCase(arr[i].uname) + ", Email = " + jsConvert.toLowerCase(arr[i].email) + ", cardID = " + jsConvert.toUpperCase(arr[i].cardId));
    // arr[i].uname=jsConvert.toHeaderCase(arr[i].uname);
    // arr[i].email=jsConvert.toLowerCase(arr[i].email);
    // arr[i].cardId=jsConvert.toUpperCase(arr[i].cardId);
    
}
// console.log(arr);
