import React, { useState } from 'react';
import './Auth.css';
import { Link, Redirect } from 'react-router-dom';
import { signup } from './helper/authHelper';
import { isAuthenticated } from './helper/authHelper';

const Signup = (props) => {

    const [value, setvalue] = useState({
        profileimg: undefined,
        name: '',
        email: '',
        password: undefined,
        position: '',
        qualification: '',
        dateofappointment:'',
        dateofjoin:'',
        classs:'',
        batch:'',
        bloodgroup:'',
        role: props.formfor === 'student' ? 0 : 'teacher' ? 1 : -1 ,
        isLoadimg: false,
        isdataloading: false,
        isSuccess: undefined,
        datasubmitedSuccessfull:{backgroundColor:'#ffffff'},
    });

    const handalechange = (e) => {
        setvalue({...value, [e.target.name] : e.target.value})
    }
    const formadded = (e) => {
        setvalue({...value, [e.target.name] : e.target.files})
    }

    const submitresult = (status) => {
        if (status) {
            return {backgroundColor:'#7eff85'}
        } else if(status === false) {
            return {backgroundColor:'#fc7979'}
        } else {
            return {backgroundColor:''}
        }
    }
    const SubmitForm = (e) => {
        setvalue({...value,isdataloading: true})
        e.preventDefault();
        const 
            {
            profileimg,
            name,
            email,
            password,
            position,
            qualification,
            dateofappointment,
            dateofjoin,
            classs,
            batch,
            bloodgroup,
            role,
        } = value
        if ( name !== '' && email !== '') {
            setvalue({...value,isdataloading: true})
            signup({
                profileimg,
                name,
                email,
                password,
                position,
                qualification,
                dateofappointment,
                dateofjoin,
                classs,
                batch,
                bloodgroup,
                role,
            })
            .then((res)=>{
                if (res.error) {
                    setvalue({
                        ...value,
                        isSuccess: false,
                    })
                } else {
                    setvalue({
                        ...value,
                        name:'',
                        email:'',
                        password:'',
                        qualification:'',
                        isSuccess: true,
                    })
                }
            })
            .catch((err)=>{console.log("ERROR in SIGNUP",err)})
            setvalue({...value,isdataloading: false})
        }
    }
    
    return (
        <div className='authSection'>
            <div className="imgSection">
                <img style={submitresult(value.isSuccess)} className="authimg" src="BrandLogo.png" alt="Logo"/>
            </div>
            <div className="inputSection">
                <form className="authForm">
                    <h2 className="authheading">{`Add ${props.formfor}`}</h2>
                    <label className="authInputTextLable" htmlFor="name">name</label><br/>
                    <input 
                        name="name"
                        placeholder="Enter Name" 
                        className="authInput" 
                        type="text"
                        value={value.name}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="email">email</label><br/>
                    <input 
                        name="email"
                        placeholder="Enter Email" 
                        className="authInput" 
                        type="email"
                        value={value.email}
                        onChange={handalechange}
                    /><br/>
                    {
                    props.formfor === 'student' 
                    ? 
                    <>
                    <label className="authInputTextLable" htmlFor="class">class</label><br/>
                    <input 
                        name="class"
                        placeholder="Enter Class" 
                        className="authInput" 
                        type="text"
                        value={value.class}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="batch">batch</label><br/>
                    <input 
                        name="batch"
                        placeholder="Enter Batch" 
                        className="authInput" 
                        type="text"
                        value={value.batch}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="bloodgroup">bloodgroup</label><br/>
                    <input 
                        name="bloodgroup"
                        placeholder="Enter Blood Group" 
                        className="authInput" 
                        type="text"
                        value={value.bloodgroup}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="profileimg">add profile image</label><br/><br/>
                    <input 
                        name="profileimg"
                        // className="authInput" 
                        type="file"
                        // value={value.password}
                        onChange={formadded}
                    /><br/>
                    </>   
                    : 
                    props.formfor === 'teacher' 
                    && 
                    <>
                    <label className="authInputTextLable" htmlFor="position">position</label><br/>
                    <input 
                        name="position"
                        placeholder="Enter position" 
                        className="authInput" 
                        type="text"
                        value={value.position}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="qualification">qualification</label><br/>
                    <input 
                        name="qualification"
                        placeholder="Enter qualification" 
                        className="authInput" 
                        type="text"
                        value={value.qualification}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="dateofappointment">date of appointment</label><br/>
                    <input 
                        name="dateofappointment"
                        placeholder="Enter date of appointment" 
                        className="authInput" 
                        type="text"
                        value={value.dateofappointment}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="dateofdateofjoinappointment">date of join</label><br/>
                    <input 
                        name="dateofjoin"
                        placeholder="Enter date of join" 
                        className="authInput" 
                        type="text"
                        value={value.dateofjoin}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="profileimg">add profile image</label><br/><br/>
                    <input 
                        name="profileimg"
                        // className="authInput" 
                        type="file"
                        // value={value.password}
                        onChange={formadded}
                    /><br/><br/>
                    </>
                    }
                    {
                        props.formfor === 'signup'
                        &&
                        <>
                        <label className="authInputTextLable" htmlFor="password">password</label><br/>
                        <input 
                            name="password"
                            placeholder="Enter password" 
                            className="authInput" 
                            type="password"
                            value={value.email}
                            onChange={handalechange}
                        /><br/>
                        </>
                    }
                    <span className="authSubmitSection">
                        <Link className="chengAuthLink" to={props.formfor==='student'?'/addteacher':'/addstudent'}>
                            {props.formfor==='student'?'add teacher ?':'add student ?'}
                        </Link>
                        <button className="authSubmit" onClick={SubmitForm}>
                            {value.isdataloading ? 'submiting..' : 'submit'}
                            {props.formfor === 'student' 
                            ? 
                            isAuthenticated() && <Redirect to="/students" />
                            : 
                            'teacher' 
                            ? 
                            isAuthenticated() && <Redirect to="/staffs" />
                            : 
                            isAuthenticated() && <Redirect to="/staffs" />
                            }
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;