import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'

const Header =  () => {

    const [menu, setmenu] = useState(window.innerWidth<=800 ? false : true);

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
                                <li><Link className="links" to='/'>home</Link></li>
                                <li><Link className="links" to='/staffs'>staffs</Link></li>
                                <li><Link className="links" to='/students'>students</Link></li>
                                <li><Link className="links" to='/gallery'>gallery</Link></li>
                                <li><Link className="links" to='/about'>about</Link></li>
                                <li><Link className="links" to='/contact'>contact</Link></li>
                            </ul>
                        </nav>
                    </li>
                </ul>
        </header>
    );
};

export default Header;