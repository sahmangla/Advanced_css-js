import React, { useState } from "react";

function Student()
{
    const [empArray,setEmpArray]=useState([]);
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [course,setCourse]=useState("");
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState("");


let arr=[{sid:1,sname:"Sahil",course:"electrical",age:"21",email:"sahmangla@deloitte.com"},
{sid:2,sname:"Samridhi",course:"civil",age:"21",email:"samjindal@deloitte.com"},
{sid:3,sname:"Hemant",course:"electronics",age:"22",email:"hemasoni@deloitte.com"},
{sid:4,sname:"Kritika",course:"communication",age:"21",email:"kritikagupta3@deloitte.com"}]

let result=empArray.map(item=><tr><td>{item.sid}</td>
<td>{item.sname}</td>
<td>{item.course}</td>
<td>{item.age}</td>
<td>{item.email}</td>
<td>
    <a style={{textDecoration:"none"}} href="javascript:void(0)" onClick={()=>delete_data(item.sid)}>Delete</a> |<a style={{textDecoration:"none"}}  href="javascript:void(0)" onClick={()=>select(item.sid)}>Select</a> | 
    <a  style={{textDecoration:"none"}}  href="javascript:void(0)" onClick={()=>update(item.sid)}>Update</a>
</td>
</tr>)

function get_data()
{
    setEmpArray(...[arr]);
}
function add_data()
{
  let obj={};
  obj.sid=id;
  obj.sname=name;
  obj.course=course;
  obj.age=age;
  obj.email=email;
    let add=false;
  let tempsarr=[...empArray];
  tempsarr.map(item=>{
    if(item.sid==obj.sid)
        add=true;    
    })
    if(!add)
    tempsarr.push(obj);
    else
    alert("Need to be Unique Id")
  setEmpArray(tempsarr);
}
function delete_data(x)
{
    let tempsarr=[...empArray];
    let index=tempsarr.findIndex(item=>item.sid==x);
    tempsarr.splice(index,1);
    setEmpArray(tempsarr);
}
function select(x)
{
    
    let obj=empArray.find(item=>item.sid==x)
    setId(obj.sid);
    setName(obj.sname);
    setCourse(obj.course);
    setAge(obj.age);
    setEmail(obj.email);
}
function update(x)
{
    let tempsarr=[...empArray];
    let obj=tempsarr.find(item=>item.sid==x);
    obj.sname=name;
    obj.course=course;
    obj.age=age;
    obj.email=email;
    setEmpArray(tempsarr);

}
function update_data()
{
   let tempsarr=[...empArray];
    let obj=tempsarr.find(item=>item.sid==id);
    obj.sname=name;
    obj.course=course;
    obj.age=age;
    obj.email=email;
    setEmpArray(tempsarr);
}
return(
    <React.Fragment>
        <h1 align="center">Details of the Students</h1>
        <hr/>
        <div style={{padding:"10px",fontSize:"1.1rem"}}>
        <div style={{backgroundColor:"whitesmoke",width:"50%",margin:"auto",padding:"20px"}}>
        SID :  <input type="number" value={id} onChange={(event)=>{setId(event.target.value)}}/><br/><br/>
        NAME :  <input type="text"  value={name} onChange={(event)=>{setName(event.target.value)}}/><br/><br/>
        COURSE :  <input type="text" value={course} onChange={(event)=>{setCourse(event.target.value)}}/><br/><br/>
        AGE :  <input type="number" value={age} onChange={(event)=>{setAge(event.target.value)}}/><br/><br/>
        EMAIL :  <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br/><br/>
        <input type="submit" value="GET" onClick={get_data} style={{margin:"5px"}}/> 
        <input type="submit" value="ADD"onClick={add_data} style={{margin:"5px"}}/>
        <input type="submit" value="UPDATE" onClick={update_data} style={{margin:"5px"}}/>
       
        </div>

        </div>
        
        <br></br><br></br>
        <table border="2" cellspacing="0" cellpadding="10" width="60%" style={{margin:"auto"}}>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COURSE</th>
            <th>AGE</th>
            <th>EMAIL</th>
            </tr>
        {result}
        </table>
       
    </React.Fragment>
)

}
export default Student;