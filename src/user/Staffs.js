import React, { useState, useEffect } from 'react';
import Base from '../Base';
import './css/Staffs.css';
import TeachersCard from '../common/TeachersCard';
// import { getAllteachers } from './helper/userHelper';
import { API } from '../backend';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';

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
    },[value]);

    return (
        <div>
            <Base signin={true}>
                <div className="Card-Arranger">
                    {!value.teachers 
                    ? 
                    <Loader/>
                    : 
                    value.teachers.map((teacher)=>{
                        return <Link key={teacher._id} to={teacher._id}>
                        <TeachersCard
                        img='SaratKumarBehera.jpg'
                        name={teacher.name}
                        qualification='Bsc.Bed'
                        role='(Asst.Tr)'
                        />
                        </Link>
                    })
                    }
                </div>
            </Base>
        </div>
    );
}

export default Staffs;