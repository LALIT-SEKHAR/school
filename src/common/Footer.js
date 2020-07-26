import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>social media</li>
                <li>
                    <ul>
                        <li><a href="facebook"><img src="facebook.png" alt="facebook"/></a></li>
                        <li><a href="telegram"><img src="telegram.png" alt="telegram"/></a></li>
                        <li><a href="instagram"><img src="instagram.png" alt="instagram"/></a></li>
                    </ul>
                </li>
                <li>@2020<span>Lalit Sekhar Behera</span>.All Rights are Reserved.</li>
            </ul>
        </footer>
    );
}

export default Footer;