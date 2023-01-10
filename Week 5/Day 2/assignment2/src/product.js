import React from 'react';
import {useState} from 'react';
function Product()
{
    const [n,setN]=useState("");
    const [p,setP]=useState(0);
    const [q,setQ]=useState(0);
    const [result,setResult]=useState("");
    const [show,setShow]=useState(true);
    function productName(event)
    {
        setN(event.target.value);
    }
    function productPrice(event)
    {
        setP(event.target.value);
    }
    function productQuantity(event)
    {
        setQ(event.target.value);
    }
    function getData()
    {   
        let re=p*q;
        setShow(false);
        setResult(re);
    }
    return(
    
            <div style={{padding :"10px"}}>
            <h1 align="center">GET PRODUCT BILL DETAILS</h1>
            <hr/>
            Product Name :  <input type="text" onChange={productName}/>
            {/* <input type="text" onChange={e=>{setN(e.target.value)}} */}
            <br/><br/>
            Product Price :  <input type="text" onChange={productPrice}/>
            {/* <input type="text" onChange={e=>{setP(e.target.value)}} */}
            <br/><br/>

            Product Quantity :  <input type="text" onChange={productQuantity}/>
            {/* <input type="text" onChange={e=>{setQ(e.target.value)}} */}
            <br/><br/>
            
            <input type="button" value="Get Data" onClick={getData}/>
        
            <h1 hidden={show}>TOTAL AMOUNT : {result}</h1>
            <p hidden={show} style={{border:"1px solid black",width:"40%",padding:"10px",backgroundColor:"black",color:"white"}}>Product Name : {n} <br/>Price : {p}<br/>Quantity : {q}</p>
            </div>
    

    )
}
export default Product;
