const { API } = require("../../backend");

export const getAllteachers = () => {
    fetch(`${API}/teachers`)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}