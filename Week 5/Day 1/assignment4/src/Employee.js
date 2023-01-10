import React from 'react';
import './Employee.css';
import {AiFillStar} from "react-icons/ai"

function Employee(){
var employee=[{src:"https://th.bing.com/th/id/OIP.7sCultbVor7Kflw_ynzFJAHaGO?w=195&h=164&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Gail Forcewind",depart:"Surgeon",star:4},
{src:"https://th.bing.com/th/id/OIP.Mp0CxvXOMEYjzXBXAXmq_gHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Patey Cruser",depart:"Surgeon",star:2},
{src:"https://th.bing.com/th/id/OIP.bLfFvWYcb8yD-HnOcAuGgwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Mario Speedway",depart:"Surgeon",star:4},
{src:"https://th.bing.com/th/id/OIP.YH4r_IhIa612F_8kgnx-GgHaHY?w=195&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Anna Sthesia",depart:"Surgeon",star:2},
{src:"https://th.bing.com/th/id/OIP.AGjAoKbkcCeP8A009Jlm7QHaHI?w=195&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Paul Meliv",depart:"Surgeon",star:3},
{src:"https://th.bing.com/th/id/OIP.DhD9MKgjWWyfaV2Epk7pMAHaE7?w=195&h=130&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Anna Maul",depart:"Surgeon",star:5},
{src:"https://th.bing.com/th/id/OIP.7sCultbVor7Kflw_ynzFJAHaGO?w=195&h=164&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Paul Meliv",depart:"Surgeon",star:4},
{src:"https://th.bing.com/th/id/OIP.AGjAoKbkcCeP8A009Jlm7QHaHI?w=195&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Paul Meliv",depart:"Surgeon",star:5},
{src:"https://th.bing.com/th/id/OIP.YH4r_IhIa612F_8kgnx-GgHaHY?w=195&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Paul Meliv",depart:"Surgeon",star:2},
{src:"https://th.bing.com/th/id/OIP.Mp0CxvXOMEYjzXBXAXmq_gHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",name:"Paul Meliv",depart:"Surgeon",star:3}

];

let result=employee.map((item)=><div className="box"><img className="picture" src={item.src}></img>
<br/>

<p style={{"text-align":"center",backgroundColor:"white"}}><strong style={{backgroundColor:"white"}}>NAME:  </strong>{item.name}</p>
<p style={{"text-align":"center",backgroundColor:"white"}}><strong style={{backgroundColor:"white"}}>DEPARTMENT:  </strong>{item.depart}</p>
<p style={{"text-align":"center",backgroundColor:"white"}}><strong style={{backgroundColor:"white"}}>RATINGS:  </strong>{[...Array(item.star)].map(x=><AiFillStar style={{backgroundColor:"white",fontSize:"1.4rem",color:item.star>3?"green":"red"}}></AiFillStar>)}</p>
{/* <p style={{"text-align":"center",backgroundColor:"white"}}><strong style={{backgroundColor:"white"}}>RATINGS:  </strong>{new Array(item.star).fill(1).map(item=><AiFillStar style={{backgroundColor:"white"}}></AiFillStar>)}</p> */}
<button>BOOK APPOINTMENT</button>

</div>)


return(
    <div className='flex'>
    {result}
    </div>
);
}
export default Employee;