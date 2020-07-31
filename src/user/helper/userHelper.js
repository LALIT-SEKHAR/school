const { API } = require("../../backend");

export const getAllteachers = () => {
    return fetch(`${API}/teachers`)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}
export const getteacher = (id) => {
    return fetch(`${API}/teacher/${id}`)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}
export const getAllstudents = () => {
    return fetch(`${API}/students`)
    .then((res)=>res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}
