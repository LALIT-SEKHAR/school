import React from 'react';
import './css/Card.css';

const Card = () => {
    return (
        <div className="card-holder">
            <div className="img-holder">
                <div className="circle-one">
                    <div className="circle-two">
                        <img src="SaratKumarBehera.jpg" alt="teacher"/>
                    </div>
                </div>
            </div>
            <div className="data-holder">
                <div className="data-holder-circle"></div>
                <h2>sarat kumar behera</h2>
                <p>bsc.bed</p>
                <h3>asst.tr(pcm)</h3>
                <a href="facebook"><img src="facebook.png" alt="facebook-logo"/></a>
            </div>
        </div>
    );
}

export default Card;