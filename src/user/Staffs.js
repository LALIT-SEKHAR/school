import React from 'react';
import Base from '../Base';
import './css/Staffs.css';
import TeachersCard from '../common/TeachersCard';

const Staffs = () => {
    return (
        <div>
            <Base>
                <div className="Card-Arranger">
                    <TeachersCard
                        img='SaratKumarBehera.jpg'
                        name='sarat kumar behera'
                        qualification='Bsc.Bed'
                        role='(Asst.Tr)'
                    />
                </div>
            </Base>
        </div>
    );
}

export default Staffs;