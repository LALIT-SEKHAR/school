import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from './helper/authHelper';

const Signin = () => {

    const [value, setvalue] = useState({
        email: '',
        password: '',
        isLoadimg: undefined,
        dataResived: false,
        isSuccess: undefined,
        // wrongPassword: false,
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
    //FOR FIELD HIGHLIGHTER

    // const fildFilter = (status) => {
    //     if (status) {
    //         return {borderColor: '#fc7979', outlineColor: '#fc7979'}
    //     } else {
    //         return {borderColor: 'rgb(88, 88, 88)', outlineColor: 'rgb(64, 0, 255)'}
    //     }
    // }

    // const imgbgcolor = value.isSuccess ? {backgroundColor:'#6aff6a'} : !value.isSuccess ? {backgroundColor:'#ff6c6c'} : {backgroundColor:'#ffffff'}

    return (
        <div className='authSection'>
            <div className="imgSection">
                <img style={submitresult(value.isSuccess)} className="authimg" src="favicon.png" alt="Logo"/>
            </div>
            <div className="inputSection">
                <form className="authForm">
                    <h2 className="authheading">SIGN IN</h2>
                    <label className="authInputTextLable" htmlFor="email">email</label><br/>
                    <input 
                        name='email' 
                        placeholder="Enter Email" 
                        className="authInput" 
                        type="email"
                        value={value.email}
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="password">password</label><br/>
                    <input 
                        // style={fildFilter(value.wrongPassword)}
                        name='password'
                        placeholder="Enter Password" 
                        className="authInput" 
                        type="password"
                        value={value.password}
                        onChange={handalechange}
                    /><br/>
                    <span className="authSubmitSection">
                        <Link className="chengAuthLink" to="/signup">
                            not an user?
                        </Link>
                        <button onClick={(e) => {
                            e.preventDefault();
                            const {email, password} = value
                            if ( email !== '' && password !== '' ) {
                                setvalue({...value,dataResived: true})
                                signin({email,password})
                                .then((res)=>{
                                    if (res.ERROR) {
                                        setvalue({...value,isSuccess: false,
                                        password:'',
                                        // wrongPassword: res.ERROR === 'User Password not match' && true,
                                    })
                                    } else {
                                        setvalue({
                                            ...value,
                                            email:'',
                                            password:'',
                                            isSuccess: true
                                        })
                                    }
                                })
                                .catch((err)=>{console.log("ERROR in SIGNIN",err)})
                                setvalue({...value,dataResived: false})
                            }
                        }} className="authSubmit"
                        >
                            {value.dataResived ? 'submiting..' : 'submit'}
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Signin;