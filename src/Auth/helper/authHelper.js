import { API } from "../../backend";

export const signup = (user) => {
    const {profileimg, name, email, password, position, qualification} = user
    const formData = new FormData();
    // formData.append('body', user);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('position', position);
    formData.append('qualification', qualification);
    formData.append('profileimg', profileimg["0"]);
    console.log(formData);
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    })
    .then((res) => {
        console.log(res);
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
        .then((res)=> console.log("Signout Successfull"))
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