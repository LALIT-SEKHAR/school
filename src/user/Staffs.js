import React, { useState, useEffect } from 'react';
import Base from '../Base';
import './css/Staffs.css';
import TeachersCard from '../common/TeachersCard';
// import { getAllteachers } from './helper/userHelper';
import { API } from '../backend';

const Staffs = () => {

    const [value, setvalue] = useState({teachers:undefined,});

    useEffect(()=> {
        fetch(`${API}/teachers`)
        .then((res)=>res.json())
        .then((data)=> {
            setvalue({teachers:data});
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div>
            <Base signin={true}>
                <div className="Card-Arranger">
                    {!value.teachers 
                    ? 
                    <h1>Loading..</h1> 
                    : 
                    value.teachers.map((teacher)=>{
                        return <TeachersCard
                        key={teacher._id}
                        img='SaratKumarBehera.jpg'
                        name={teacher.name}
                        qualification='Bsc.Bed'
                        role='(Asst.Tr)'
                        />
                    })
                    }
                </div>
            </Base>
        </div>
    );
}

export default Staffs;