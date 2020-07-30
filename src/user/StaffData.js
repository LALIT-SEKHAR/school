import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { getteacher } from './helper/userHelper';
import { API } from '../backend';
import Footer from '../common/Footer';
import Header from '../common/Header';
import './css/StaffData.css';
import Loader from '../common/Loader';

function StaffData() {

    let { id } = useParams();

    const [value, setvalue] = useState({StaffData: undefined})

    useEffect(()=>{
        fetch(`${API}/teacher/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            setvalue({StaffData:data});
        })
        .catch((err)=>{
            console.log(err);
        })
    },[id]);
    // console.log(value.StaffData[0].name)

    return (
        <>
            <Header/>
                <div className="teacherDetailSection">
                    {!value.StaffData
                    ? 
                    <Loader/>
                    : 
                    <>
                        <div className="teacherDetailData">
                            <div className="teacherDetailDataImg">
                                <img src="SaratKumarBehera.jpg" alt="Profile"/>
                            </div>
                            <div className="teacherDetailDataInfoName">
                                <h2>{value.StaffData[0].name}</h2>
                                <p>(asst.tr)</p>
                            </div>
                            <div className="teacherDetailDataInfo">
                                <h4>Qualification : <span>Bsc,Bed,PGDCA in computer application</span></h4>
                                <h4>Date of Appointment : <span>2-8-1993</span></h4>
                                <h4>Date of Joining : <span>3-8-1993</span></h4>
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