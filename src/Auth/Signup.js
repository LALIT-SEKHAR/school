import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import { signup } from './helper/authHelper';

const Signup = () => {

    const [value, setvalue] = useState({
        name: '',
        email: '',
        position: 'teacher',
        password: '',
        isLoadimg: false,
        dataResived: false,
        isSuccess: undefined,
        datasubmitedSuccessfull:{backgroundColor:'#ffffff'},
    });

    const handalechange = (e) => {
        setvalue({...value, [e.target.name] : e.target.value})
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

    return (
        <div className='authSection'>
            <div className="imgSection">
                <img style={submitresult(value.isSuccess)} className="authimg" src="BrandLogo.png" alt="Logo"/>
            </div>
            <div className="inputSection">
                <form className="authForm">
                    <h2 className="authheading">SIGN UP</h2>
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
                    <label className="authInputTextLable" htmlFor="password">password</label><br/>
                    <input 
                        name="password"
                        placeholder="Enter Password" 
                        className="authInput" 
                        type="password"
                        value={value.password}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="type">type</label><br/>
                    <select onChange={handalechange} name="position" className="authInput">
                        <option>teacher</option>
                        <option>student</option>
                    </select><br/>
                    <span className="authSubmitSection">
                        <Link className="chengAuthLink" to="/signin">
                            already a user?
                        </Link>
                        <button className="authSubmit" onClick={(e) => {
                            e.preventDefault();
                            const {name, email, password, position} = value
                            if ( name !== '' && email !== '' && password !== '' ) {
                                setvalue({...value,dataResived: true})
                                signup({name, email, password, position})
                                .then((res)=>{
                                    if (res.error) {
                                        setvalue({
                                            ...value,
                                            password:'',
                                            isSuccess: false,
                                        })
                                    } else {
                                        setvalue({
                                            ...value,
                                            name:'',
                                            email:'',
                                            password:'',
                                            isSuccess: true,
                                        })
                                    }
                                })
                                .catch((err)=>{console.log("ERROR in SIGNUP",err)})
                                setvalue({...value,dataResived: false})
                            }
                        }}>
                            {value.dataResived ? 'submiting..' : 'submit'}
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;