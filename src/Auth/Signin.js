import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from './helper/authHelper';

const Signin = () => {

    const [value, setvalue] = useState({
        email: '',
        password: '',
        isLoadimg: undefined,
        dataResived: false,
    });

    const handalechange = (e) => {
        setvalue({...value, [e.target.name] : e.target.value})
    }

    // const imgbgcolor = value.isSuccess ? {backgroundColor:'#6aff6a'} : !value.isSuccess ? {backgroundColor:'#ff6c6c'} : {backgroundColor:'#ffffff'}

    return (
        <div className='authSection'>
            <div className="imgSection">
                <img className="authimg" src="favicon.png" alt="Logo"/>
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
                        onChange={handalechange}
                    /><br/>
                    <label className="authInputTextLable" htmlFor="password">password</label><br/>
                    <input 
                        name='password'
                        placeholder="Enter Password" 
                        className="authInput" 
                        type="password"
                        onChange={handalechange}
                    /><br/>
                    <span className="authSubmitSection">
                        <Link className="chengAuthLink" to="/signup">
                            not an user?
                        </Link>
                        <button onClick={async(e) => {
                            e.preventDefault();
                            const {email, password} = value
                            if ( email !== '' && password !== '' ) {
                                setvalue({...value,dataResived: true})
                                await signin({email,password})
                                .then((res)=>{
                                    if (res.error) {
                                        setvalue({...value, isSuccess: false})
                                        return console.log("ERROR: ",res);
                                    } else {
                                        setvalue({...value, isSuccess: true})
                                        return setvalue({
                                            email:'',
                                            password:'',
                                        })
                                    }
                                })
                                .catch((err)=>{console.log("ERROR in SIGNIN",err)})
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
}

export default Signin;