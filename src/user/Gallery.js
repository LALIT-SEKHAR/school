import React, { useState, useEffect } from 'react';
import Base from '../Base';
import Loader from '../common/Loader';
import { getimages } from './helper/userHelper';
import './css/Staffs.css';
const Gallery = () => {

    const [value, setvalue] = useState({
        images:undefined,
        refresh: undefined
    });

    useEffect(()=> {
        getimages()
        .then((data) => {
            return setvalue({...value, images:data})
        })
        .catch((err) => {
            console.log(err)
        })
    },[value]);

    return (
        <div>
            <Base addimage={true}>
                <div className="Card-Arranger">
                        {!value.images 
                        ? 
                        <Loader/>
                        : 
                        value.images.map((image)=>{
                            return <img className="Gallerydisplayimg" key={image._id} src={image.link} alt="BRHS"/>
                        })
                        }
                </div>
            </Base>
        </div>
    );
}

export default Gallery;