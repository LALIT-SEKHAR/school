import React, { useState, useEffect } from 'react';
import Base from '../Base';
import './css/Staffs.css';
import TeachersCard from '../common/TeachersCard';
import { getAllteachers } from './helper/userHelper';
// import { API } from '../backend';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import { isAuthenticated } from '../Auth/helper/authHelper';

const Staffs = () => {

    const [value, setvalue] = useState({teachers:undefined,});

    useEffect(()=> {
        getAllteachers()
        .then((data) => {
            return setvalue({...value, teachers:data})
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
                        return <Link key={teacher._id} to={isAuthenticated()?teacher._id:'staffs'}>
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