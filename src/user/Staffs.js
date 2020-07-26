import React from 'react';
import Base from '../Base';
import './css/Staffs.css';
import Card from '../common/Card';

const Staffs = () => {
    return (
        <div>
            <Base>
                <div className="Card-Arranger">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </Base>
        </div>
    );
}

export default Staffs;