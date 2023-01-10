import React from 'react';
import './Student.css';
function Student()
{
    let obj={sid:1245,sname:"Sahil",course:"Front-end",age:28,total:34455};
    return(
        <React.Fragment>
            <h1 align="center">Student Details</h1>
            <hr/>
            <table border="2" cellspacing="0" cellpadding="10">
                <tr>
                    <th>SID</th>
                    <th>NAME</th>
                    <th>COURSE</th>
                    <th>AGE</th>
                    <th>TOTAL</th>
                </tr>
                <tr>
                <td>{obj.sid}</td>
                <td>{obj.sname}</td>
                <td>{obj.course}</td>
                <td>{obj.age}</td>
                <td>{obj.total}</td>
                </tr>

                </table>

        </React.Fragment>
    );
}
export default Student;