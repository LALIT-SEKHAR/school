import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import { signup } from './helper/authHelper';

const Signup = () => {

    const [value, setvalue] = useState({
        name: '',
        email: '',
        password: '',
        isLoadimg: false,
        dataResived: false,
        datasubmitedSuccessfull:{backgroundColor:'#ffffff'},
    });

    const handalechange = (e) => {
        setvalue({...value, [e.target.name] : e.target.value})
    }

    // const submitStatusSign = {
    //     // border:'3px solid red',
    //     datasubmitedSuccessfull 
    //     ? 
    //     backgroundColor:'#ff6c6c' 
    //     : 
    //     backgroundColor:'#6aff6a'
    // }

    return (
        <div className='authSection'>
            <div className="imgSection">
                <img style={value.datasubmitedSuccessfull} src="favicon.png" alt="Logo"/>
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
                    <span className="authSubmitSection">
                        <Link className="chengAuthLink" to="/signin">
                            already a user?
                        </Link>
                        <button onClick={async(e) => {
                            e.preventDefault();
                            const {name, email, password} = value
                            if ( name !== '' && email !== '' && password !== '' ) {
                                setvalue({...value,dataResived: true})
                                await signup({name,email,password})
                                .then((res)=>{
                                    if (res.error) {
                                        return console.log("ERROR: ",res);
                                    } else {
                                        return setvalue({
                                            name:'',
                                            email:'',
                                            password:'',
                                        })
                                    }
                                })
                                .catch((err)=>{console.log("ERROR in SIGNUP",err)})
                                setvalue({...value,dataResived: false})
                            }
                            // console.log(name); 
                        }} className="authSubmit"
                        >
                            {value.dataResived ? 'submiting..' : 'submit'}
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;