import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getteacher, submitDoc } from './helper/userHelper';
import Footer from '../common/Footer';
import Header from '../common/Header';
import './css/StaffData.css';
import Loader from '../common/Loader';

function StaffData() {

    let { id } = useParams();
    const [value, setvalue] = useState({
        Staffdatas: undefined, 
        StaffDocuments: undefined,
        documentname: undefined, 
        filename: undefined, 
        adharbg:undefined,
    })

    useEffect(()=>{
        getteacher(id)
        .then((data)=>{
            return setvalue({...value,Staffdatas:data})
        })
        .catch((err)=> console.log(err))
    },[id,value]);
    // console.log(value.StaffData[0].name)
    // const getthedates = () => {
    //     const date = new Date()
    //     const year = date.getFullYear() 
    //     const month = date.getMonth()
    //     const day = date.
    //     return `${0}/${0}/${year-}`
    // }

    const gosubmitDoc = (e) => {
        const documentname = e.target.name
        const filename = e.target.files
        submitDoc( id, documentname, filename )
        .then((res)=>{
            setvalue({...value, adharbg:res.link})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <Header/>
                <div className="teacherDetailSection">
                    {!value.Staffdatas && !value.StaffDocuments
                    ? 
                    <Loader/>
                    : 
                    <>
                        <div className="teacherDetailData">
                            <div className="teacherDetailDataImg">
                                <img src={!value.Staffdatas.teacherData["0"].profilephoto?"SaratKumarBehera.jpg":value.Staffdatas.teacherData["0"].profilephoto} alt="Profile"/>
                            </div>
                            <div className="teacherDetailDataInfoName">
                                <h2>{value.Staffdatas.teacherData["0"].name}</h2>
                                <p>{!value.Staffdatas.teacherData["0"].position?"":value.Staffdatas.teacherData["0"].position}</p>
                            </div>
                            <div className="teacherDetailDataInfo">
                                <h4>Qualification : <span>{!value.Staffdatas.teacherData["0"].qualification?"Bsc,Bed,PGDCA in computer application":value.Staffdatas.teacherData["0"].qualification}</span></h4>
                                <h4>Date of Appointment : <span>{!value.Staffdatas.teacherData["0"].dateofappointment?"*-*-****":value.Staffdatas.teacherData["0"].dateofappointment}</span></h4>
                                <h4>Date of Joining : <span>{!value.Staffdatas.teacherData["0"].dateofjoin?"*-*-****":value.Staffdatas.teacherData["0"].dateofjoin}</span></h4>
                                {/* <h4>Superannuation : <span>{getthedates()}</span></h4> */}
                            </div>
                        </div>
                        <div className="teacherDetailDocuments">
                            <span>
                                <div className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["0"]
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["0"].link} alt="Document-1"/>
                                        <p>{value.Staffdatas.teacherDoc["0"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-1" className="brhsinputsection"/>
                                    }
                                </div>
                                <div className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["1"]
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["1"].link} alt="Document-2"/>
                                        <p>{value.Staffdatas.teacherDoc["1"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-2" className="brhsinputsection"/>
                                    }
                                </div>
                                <div onClick={()=> console.log(value)} className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["2"]
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["2"].link} alt="Document-3"/>
                                        <p>{value.Staffdatas.teacherDoc["2"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-3" className="brhsinputsection"/>
                                    }
                                </div>
                            </span>
                            <span>
                                <div className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["3"]
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["3"].link} alt="Document-4"/>
                                        <p>{value.Staffdatas.teacherDoc["3"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-4" className="brhsinputsection"/>
                                    }
                                </div>
                                <div className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["4"] 
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["4"].link} alt="Document-5"/>
                                        <p>{value.Staffdatas.teacherDoc["4"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-5" className="brhsinputsection"/>
                                    }
                                </div>
                                <div className="documentInputSection">
                                    {
                                        value.Staffdatas.teacherDoc["5"]
                                        ?
                                        <>
                                        <img src={value.Staffdatas.teacherDoc["5"].link} alt="Document-6"/>
                                        <p>{value.Staffdatas.teacherDoc["5"].name}</p>
                                        </>
                                        :
                                        <input onChange={gosubmitDoc} type="file" name="Document-6" className="brhsinputsection"/>
                                    }
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