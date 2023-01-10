import React from 'react'
function Category(props){
   let obj=[
    {name:"Vivo",cat:"mobiles"},
    {name:"Oppo",cat:"mobiles"},
    {name:"Mi",cat:"mobiles"},
    {name:"One Plus",cat:"mobiles"},
    {name:"Apple",cat:"mobiles"},
    {name:"Samsung",cat:"mobiles"},
    {name:"Sony",cat:"headphones"},
    {name:"JBL",cat:"headphones"}
];
   
let x=props.category;
let arr;
if(x=="mobiles" || x=="headphones")
arr=obj.filter(item=>item.cat==x);
else
arr=obj;




    return(
        <React.Fragment>
            <h1>Item Name:</h1>
    <ol>
  {  arr.map(item=><li>{item.name}</li>)}
    </ol>
</React.Fragment>
    
    )
}
export default Category;