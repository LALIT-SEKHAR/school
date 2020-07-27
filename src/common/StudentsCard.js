import React from 'react';
import './css/StudentsCard.css';

const StudentsCard = (props) => {
    return (
        <div className="Scard-holder">
            <div className="Simg-holder">
                <div className="Scircle-one">
                    <div className="Scircle-two">
                        <img src={props.img} alt="teacher"/>
                    </div>
                </div>
            </div>
            <div className="Sdata-holder">
                <div className="Sdata-holder-circle"></div>
                <h2>{props.name}</h2>
                <h5>Class: <span> {props.class}</span></h5>
                <h5>Batch: <span> {props.batch}</span></h5>
                <h5>Blood group: <span> {props.bloodGroup}</span></h5>
            </div>
        </div>
    );
}

export default StudentsCard;