import React, { useState } from 'react';
import { Link , withRouter} from 'react-router-dom';
import './css/Header.css'
import { isAuthenticated, signout } from '../Auth/helper/authHelper';

const Header =  ({history, signin, addteacher, addstudent}) => {
    
    const [menu, setmenu] = useState(window.innerWidth<=800 ? false : true);
    
    const currentTab = (history, path) => {
        if (history.location.pathname === path) {
            return {color: '#4000FF'}
        } else {
            return {color: '#707070'}
        }
    }

    const DoSignout = () => {
        signout(()=>{
            console.log("Sign Out Successfully!");
        });
    }

    return (
        <header>
                <ul className="formobile">
                    <li className='formobilemenubar'>
                        <ul className='menubar'>
                            <li><Link to='/'><img className="logo" src="favicon.png" alt="LOGO"/></Link></li>
                            <li className="menuIcon"><img onClick={() => setmenu(!menu)} className='menuIconimg' src="menuIcon.png" alt="MenuIcon"/></li>
                        </ul>
                    </li>
                    <li>
                        <nav className='menubaritem' style={menu ? {display: 'contents'} : {display: 'none'}}>
                            <ul className='menubaritems'>
                                <li><Link style={currentTab(history, '/')} className="links" to='/'>home</Link></li>
                                <li><Link style={currentTab(history, '/staffs')} className="links" to='/staffs'>staffs</Link></li>
                                <li><Link style={currentTab(history, '/students')} className="links" to='/students'>students</Link></li>
                                <li><Link style={currentTab(history, '/gallery')} className="links" to='/gallery'>gallery</Link></li>
                                <li><Link style={currentTab(history, '/about')} className="links" to='/about'>about</Link></li>
                                <li><Link style={currentTab(history, '/contact')} className="links" to='/contact'>contact</Link></li>
                                {signin && !isAuthenticated() && <li><Link style={currentTab(history, '/signin')} className="links" to='/signin'>sign in</Link></li>}
                                {addteacher && isAuthenticated() && <li><Link style={currentTab(history, '/addteacher')} className="links" to='/addteacher'>add teacher</Link></li>}
                                {addstudent && isAuthenticated() && <li><Link style={currentTab(history, '/addstudent')} className="links" to='/addstudent'>add student</Link></li>}
                                {isAuthenticated() && <li style={{color:'orange'}} className="links linkSignout" onClick={DoSignout}>Sign out</li>}
                            </ul>
                        </nav>
                    </li>
                </ul>
        </header>
    );
};

export default withRouter(Header);