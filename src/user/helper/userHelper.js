const { API } = require("../../backend");

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

export const submitDoc = (id, documentname, filename) => {
    console.log(id, documentname, filename)
    const formData = new FormData();
    formData.append('documentname', documentname);
    formData.append('document', filename["0"]);
    return fetch(`${API}/teacher/${id}/doc`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    })
    .then((res) => {
        return res.json()
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getDocuments = (id) => {
    return fetch(`${API}/teacher/${id}/doc`)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((err)=>{
        console.log(err);
    })
}