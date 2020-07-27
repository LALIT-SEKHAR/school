import React from 'react';
import Base from '../Base';
import StudentsCard from '../common/StudentsCard';
import './css/Staffs.css';

const Students = () => {
    return (
        <div>
            <Base>
                <div className="Card-Arranger">
                    <StudentsCard 
                        img='img1.png' 
                        name='lalit sekhar behera'
                        class='9th'
                        batch='2019-22'
                        bloodGroup='A+'
                    />
                </div>
            </Base>
        </div>
    );
}

export default Students;