import axios from 'axios';
import {useState} from 'react';
import './App.css'
function Fake()
{
    let url="https://fakestoreapi.com/products";
    const[empsArray,setEmpsArray]=useState([])

    




    function get_data()
    {
        axios.get(url).then((response)=>{
            let result1=response.data;
            setEmpsArray(result1);
        })
    }
    let result=empsArray.map((item)=>
        <tr className='table-secondary' >
            <td>{item.id}</td>
            <td><img src={item.image} width="100px" height="100px"></img></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.rating.rate}</td>
            <td>{item.rating.count}</td>
        </tr>
    );
    return(
        <>
        <h1 align="center">Getting Fake Api Details</h1>
        <hr/>
    
        <button onClick={get_data} className="btn btn-success">Get</button>
        <br/><br/>
        <table className='table'>
            <thead>
                <tr className='table-primary'>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>RATE</th>
                    <th>COUNT</th>
                </tr>
            </thead>
            <tbody>
                {result};
            </tbody>
         
        </table>
        </>
    )
}
export default Fake;