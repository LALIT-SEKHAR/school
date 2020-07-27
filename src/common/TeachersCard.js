import React from 'react';
import './css/TeachersCard.css';

const TeachersCard = (props) => {
    return (
        <div className="Tcard-holderT">
            <div className="Timg-holder">
                <div className="Tcircle-one">
                    <div className="Tcircle-two">
                        <img src={props.img} alt="teacher"/>
                    </div>
                </div>
            </div>
            <div className="Tdata-holder">
                <div className="Tdata-holder-circle"></div>
                <h2>{props.name}</h2>
                <p>{props.qualification}</p>
                <h3>{props.role}</h3>
                <a href="facebook"><img src="facebook.png" alt="facebook-logo"/></a>
            </div>
        </div>
    );
}

export default TeachersCard;