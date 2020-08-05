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
    },[]);

    return (
        <div>
            <Base signin={true} addteacher={true}>
                <div className="Card-Arranger">
                    {!value.teachers 
                    ? 
                    <Loader/>
                    : 
                    value.teachers.map((teacher)=>{
                        return <Link key={teacher._id} to={isAuthenticated()?teacher._id:'staffs'}>
                        <TeachersCard
                        img={!teacher.profilephoto?"SaratKumarBehera.jpg":teacher.profilephoto}
                        name={teacher.name}
                        qualification={!teacher.qualification?"Bsc.Bed":teacher.qualification}
                        position={!teacher.position?"(Asst.Tr)":teacher.position}
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