import React, { useEffect, useState } from 'react';
import Base from '../Base';
import StudentsCard from '../common/StudentsCard';
import './css/Staffs.css';
import { API } from '../backend';

const Students = () => {
    
    const [value, setvalue] = useState({students:undefined,});

    useEffect(()=> {
        fetch(`${API}/students`)
        .then((res)=>res.json())
        .then((data)=> {
            setvalue({students:data});
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div>
            <Base>
                <div className="Card-Arranger">
                    {!value.students 
                    ? 
                    <h1>Loading..</h1> 
                    : 
                    value.students.map((student)=>{
                        return <StudentsCard 
                        img='img1.png' 
                        name={student.name}
                        class='9th'
                        batch='2019-22'
                        bloodGroup='A+'
                    />
                    })
                    }
                </div>
            </Base>
        </div>
    );
}

export default Students;