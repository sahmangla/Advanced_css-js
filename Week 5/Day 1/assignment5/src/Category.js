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
    {name:"JBL",cat:"headphones"},
    {name:"Airpodes",cat:"headphones"},
    {name:'boat',cat:"headphones"},
    {name:'NewBalance',cat:"sports"},
    {name:'puma',cat:"sports"}
];
   
let x=props.category;
let arr;
if(x=="mobiles" || x=="headphones"||x=="sports")
arr=obj.filter(item=>item.cat==x);
else
arr=obj;




    return(
        <React.Fragment>
            <h1 align="center">Items</h1>
            <hr/>
    <ul style={{border:"1px solid black",margin:"10px",backgroundColor:'whitesmoke',padding:"30px",fontSize:"1.3rem"}}>
  {  arr.map(item=><li>{item.name}---------{item.cat}</li>)}
    </ul>
</React.Fragment>
    
    )
}
export default Category;