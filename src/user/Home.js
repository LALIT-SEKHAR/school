import React from 'react';
import Base from '../Base';
import './css/Home.css';

const Home = () => {
    return (
        <div>
            <Base>
                <section className='section-A'>
                        <p>A CALTURE OF <br/>
                            ACHIEVEMENT IN A RESPECTFULL<br/>
                            AND RIGOROUS LEARNING<br/>
                            ENVIRIMENT</p>
                        <img src="img1.png" alt="section-A"/>
                </section>
                <section className='section-B'>
                    <p>
                    THE BUDHARAJA HIGH SCHOOL<br/>
                    NANDAGAON KALAHANDI IS A<br/>
                    CO-EDUCATIONAL INSTITUTION<br/>
                    IN NANDAGAON GRAMPANCAYAT<br/>
                    </p>
                    <img src="img2.png" alt="section-B"/>
                </section>
                <section className='section-C'>
                    <aside className="section-CA">
                        <p>
                        INSTITUTION PERMISSION BY DSE ODISHA AND RECOGNISATION BY BOARD OF SECONDARY EDUCATION ODISHA
                        </p>
                        <img src="img3.png" alt="section-C"/>
                    </aside>
                    <aside className="section-CB">
                        <p>
                        INSTITUTION WAS FOUNDED BY Late-- SRI GOVIND CHANDRA NAIK AND CO-FOUNDER -SRI SRIDHAR BANIA , HARIHAR BAG
                        </p>
                        <img src="founder.png" alt="founder"/>
                    </aside>
                </section>
            </Base>
        </div>
    );
}

export default Home;