import React from 'react';
import {useState} from 'react';
function ReactComponent()
{
    const [n,setN]=useState("");
    const [p,setP]=useState("");
    const [q,setQ]=useState("");
    const [result,setResult]=useState("");
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
        let re=n*p*q;
        setResult(re);
    }
    return(
        <React.Fragment>
            <input type="text" onChange={productName}/><br></br>
            <input type="text" onChange={productPrice}/><br></br>
            <input type="text" onChange={productQuantity}/><br></br>
            <br></br>
            <input type="button" value="Get Data" onClick={getData}/>
            <h1>{result}</h1>
            <p>{n}-{p}-{q}={result}</p>
        </React.Fragment>

    )
}
export default ReactComponent;