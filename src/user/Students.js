import React, { useEffect, useState } from 'react';
import Base from '../Base';
import StudentsCard from '../common/StudentsCard';
import './css/Staffs.css';
import Loader from '../common/Loader';
import { getAllstudents } from './helper/userHelper';


const Students = () => {
    
    const [value, setvalue] = useState();

    useEffect(()=> {
        getAllstudents()
        .then((data)=> {
            return setvalue(data)
        })
    },[value]);

    return (
        <div>
            <Base addstudent={true}>
                <div className="Card-Arranger">
                    {!value 
                    ? 
                    <Loader/>
                    : 
                    value.map((student)=>{
                        return <StudentsCard 
                        key={student._id}
                        img={student.profilephoto?student.profilephoto:'img1.png'}
                        name={student.name?student.name:'unNamed'}
                        class={student.class?student.class:'9th'}
                        batch={student.batch?student.batch:'2019-22'}
                        bloodGroup={student.bloodgroup?student.bloodgroup:'A+'}
                    />
                    })
                    }
                </div>
            </Base>
        </div>
    );
}

export default Students;