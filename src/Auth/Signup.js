import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='authSection'>
            <div className="imgSection">
                <img src="favicon.png" alt="Logo"/>
            </div>
            <div className="inputSection">
                <form className="authForm">
                    <h2 className="authheading">SIGN UP</h2>
                    <label className="authInputTextLable" htmlFor="name">name</label><br/>
                    <input placeholder="Enter Name" className="authInput" type="text"/><br/>
                    <label className="authInputTextLable" htmlFor="email">email</label><br/>
                    <input placeholder="Enter Email" className="authInput" type="email"/><br/>
                    <label className="authInputTextLable" htmlFor="password">password</label><br/>
                    <input placeholder="Enter Password" className="authInput" type="password"/><br/>
                    <span className="authSubmitSection"><Link className="chengAuthLink" to="/signin">already a user?</Link><button className="authSubmit">submit</button></span>
                </form>
            </div>
        </div>
    );
};

export default Signup;