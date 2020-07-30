import React, { useEffect, useState } from 'react';
import Base from '../Base';
import StudentsCard from '../common/StudentsCard';
import './css/Staffs.css';
import { API } from '../backend';
import Loader from '../common/Loader';


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
                    <Loader/>
                    : 
                    value.students.map((student)=>{
                        return <StudentsCard 
                        key={student._id}
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