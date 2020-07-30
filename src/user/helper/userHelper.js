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
export const getteacher = (id) => {
    fetch(`${API}/teacher/${id}`)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}