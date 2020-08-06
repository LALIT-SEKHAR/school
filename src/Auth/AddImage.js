import React, { useState } from 'react';
import './addimage.css';
import {submitImage} from './helper/authHelper';
import { Redirect } from 'react-router-dom';


const AddTeacher = () => {

    const [image, setimage] = useState(undefined);

    const addimage = (e) => {
        const img = e.target.files
        submitImage(img)
        .then((res)=>{
            setimage(true)
        })
        .catch((err)=>{
            setimage(false)
        })
    }

    return (
        <div className="overlayimginputSection">
            <div className="overlayimginputSectionholder" style={image === true ? {color:'green'} : image === false ? {color:'red'} : {color:'white'}}>
                <h3>Add image</h3>
                <input onChange={addimage} name="img" type="file"/>
                {image && <Redirect to="/gallery" />}
            </div>
        </div>
    );
};

export default AddTeacher;