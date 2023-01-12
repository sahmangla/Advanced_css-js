import ProductsCrud from "./ProductsCrud";
import {useState} from 'react';


function Products()
{


    const[productArr,setProductArr]=useState([]);
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[category,setCategory]=useState("");
    const[price,setPrice]=useState(0);
    const[rating,setRating]=useState(0);
    const[discount,setDiscount]=useState(0);

    let show=productArr.map(item=>
        <div className="products">
            <p><img src={item.image} width="100px" height="100px"/></p>
            <p>{item.name}</p>
            <span>DISCOUNTED PRICE: {(item.price)*(item.discount)/100}, DISCOUNT: {item.discount}%, REAL PRICE: <span>{item.price}</span></span>
            <p>
                <a href="javascript:void(0)" onClick={()=>selectdata(item.id)}>Select</a> |
                <a href="javascript:void(0)" onClick={()=>deletedata(item.id)}>Delete</a> |
                <a href="javascript:void(0)" onClick={()=>update(item.id)}>Update</a>
         </p>
        </div>
    // <tr>
    //     <td>{item.id}</td>
    //     <td><img src={item.image} width="100px" height="100px"/></td>
    //     <td>{item.name}</td>
    //     <td>{item.category}</td>
    //     <td>{item.price}</td>
    //     <td>{item.rating}</td>
    //     <td>{item.discount}</td>
    //     <td>
    //         <a href="javascript:void(0)" onClick={()=>selectdata(item.id)}>Select</a> |
    //         <a href="javascript:void(0)" onClick={()=>deletedata(item.id)}>Delete</a> |
    //         <a href="javascript:void(0)" onClick={()=>update(item.id)}>Update</a>
    //     </td>
    //     </tr>
        )

    function update(idx)
    {
        let obj={};
        obj.id=idx;
        obj.name=name;
        obj.image=image;
        obj.category=category;
        obj.price=price;
        obj.rating=rating;
        obj.discount=discount;
        ProductsCrud.updated_data(obj).then(response=>{
            alert("DATA UPDATED");
            getdata();
        })
    }
    function updatedata()
    {
        let obj={};
        obj.id=id;
        obj.name=name;
        obj.image=image;
        obj.category=category;
        obj.price=price;
        obj.rating=rating;
        obj.discount=discount;
        ProductsCrud.updated_data(obj).then(response=>
            {
                alert("Data Updated");
                getdata();
            })
    }
    function deletedata(id)
    {
        ProductsCrud.delete_data(id).then(response=>
            {
                alert("Data deleted");
                getdata();
            })
    }

    function selectdata(id)
    {
        ProductsCrud.select_data(id).then(response=>
            {
           
                let x=response.data;
                setId(x.id);
                setName(x.name);
                setImage(x.image);
                setCategory(x.category);
                setPrice(x.price);
                setRating(x.rating);
                setDiscount(x.discount);
            })
    }
    function getdata()
    {
        
        ProductsCrud.get_data().then(response=>
            {
                setProductArr(response.data)
            }
            )
    }
    function adddata()
    {
        let obj={};
        obj.id=id;
        obj.image=image;
        obj.name=name;
        obj.category=category;
        obj.price=price;
        obj.rating=rating;
        obj.discount=discount;
        
        ProductsCrud.add_data(obj).then(response=>
            {
                alert("data added");
                getdata();
            })
    }
    return(
            <body>
            <h1 align="center">CRUD OPERATIONS ON PROJECT</h1>
            <hr/>
            ID:   <input type="number" value={id} onChange={(event)=>setId(event.target.value)}/><br/><br/>
            IMAGE:   <input type="text" value={image} onChange={(event)=>setImage(event.target.value)}/><br/><br/>
            NAME:   <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br/><br/>
            CATEGORY:   <input type="text" value={category} onChange={(event)=>setCategory(event.target.value)}/><br/><br/>
            PRICE:   <input type="number" value={price} onChange={(event)=>setPrice(event.target.value)}/><br/><br/>
            RATING:   <input type="number" value={rating} onChange={(event)=>setRating(event.target.value)}/><br/><br/>
            DISCOUNT:   <input type="number" value={discount} onChange={(event)=>setDiscount(event.target.value)}/><br/><br/>
            <button onClick={getdata}>Get</button>
            <button onClick={adddata}>Add</button>
            <button onClick={updatedata}>Update</button>
            <br/><br/>
            
            {show}
            
           
            </body>
    )
}
export default Products;