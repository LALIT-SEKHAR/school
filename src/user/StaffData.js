import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getteacher } from './helper/userHelper';
import Footer from '../common/Footer';
import Header from '../common/Header';
import './css/StaffData.css';
import Loader from '../common/Loader';

function StaffData() {

    let { id } = useParams();

    const [value, setvalue] = useState()

    useEffect(()=>{
        getteacher(id)
        .then((data)=>{
            return setvalue(data)
        })
    },[id]);
    // console.log(value.StaffData[0].name)
console.log(value);
    return (
        <>
            <Header/>
                <div className="teacherDetailSection">
                    {!value
                    ? 
                    <Loader/>
                    : 
                    <>
                        <div className="teacherDetailData">
                            <div className="teacherDetailDataImg">
                                <img src={!value["0"].profilephoto?"SaratKumarBehera.jpg":value["0"].profilephoto} alt="Profile"/>
                            </div>
                            <div className="teacherDetailDataInfoName">
                                <h2>{value["0"].name}</h2>
                                <p>{!value["0"].position?"":value["0"].position}</p>
                            </div>
                            <div className="teacherDetailDataInfo">
                                <h4>Qualification : <span>{!value["0"].qualification?"Bsc,Bed,PGDCA in computer application":value["0"].qualification}</span></h4>
                                <h4>Date of Appointment : <span>{!value["0"].dateofappointment?"*-*-****":value["0"].dateofappointment}</span></h4>
                                <h4>Date of Joining : <span>{!value["0"].dateofjoin?"*-*-****":value["0"].dateofjoin}</span></h4>
                            </div>
                        </div>
                        <div className="teacherDetailDocuments">
                            <span>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                            </span>
                            <span>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                                <div className="documentInputSection">
                                    {/* <input type="file" name="" id=""/> */}
                                </div>
                            </span>
                        </div>
                    </>
                    }
                </div>
            <Footer/>
        </>
    );
}

export default StaffData;