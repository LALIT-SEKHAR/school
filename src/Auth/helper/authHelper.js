import { API } from "../../backend";

export const signup = (user) => {
    const {
        profileimg,
        name,
        email,
        position,
        qualification,
        dateofappointment,
        dateofjoin,
        classs,
        batch,
        bloodgroup,
        role,
    } = user
    const formData = new FormData();
    // formData.append('body', user);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('position', position);
    formData.append('qualification', qualification);
    formData.append('dateofappointment', dateofappointment);
    formData.append('dateofjoin', dateofjoin);
    formData.append('classs', classs);
    formData.append('batch', batch);
    formData.append('bloodgroup', bloodgroup);
    formData.append('role', role);
    formData.append('profileimg', profileimg["0"]);
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    })
    .then((res) => {
        // console.log(res);
        return res.json()
    })
    .catch((err) => {
        console.log(err);
    })
}

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((res) => {
        return res.json()
    })
    .catch((err) => {
        console.log(err);
    })
}

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

export const signout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt")
        next();
        return fetch(`${API}/signout`)
        .then((res)=> alert("Signout Successfull"))
        .catch((err)=> console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
}

export const submitImage = (user) => {
    const formData = new FormData();
    formData.append('image', user["0"]);
    return fetch(`${API}/galary`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    })
    .then((res) => {
        // console.log(res);
        return res.json()
    })
    .catch((err) => {
        console.log(err);
    })
}