import React, { useState } from 'react';

const AddTeacher = () => {
    const [value, setvalue] = useState({formdata:undefined});

    const formadded = (e) => {
        console.log(e.target.files["0"]);
    }
    return (
        <div>
            <label htmlFor="profileimg">add profile img</label><br/>
            <input onChange={formadded} type="file" name="profileimg" id="formforprofileimg"/>
        </div>
    );
};

export default AddTeacher;