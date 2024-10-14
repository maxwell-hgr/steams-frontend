import { api, requestConfig } from "../utils/config";

const profile = async (token) => {
    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(`${api}/users/profile`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const show = async (id) => {
    const config = requestConfig("GET");

    try {
        const res = await fetch(`${api}/users/${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const get = async () => {
    const config = requestConfig("GET");

    try {
        const res = await fetch(`${api}/users`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const put = async (data, token, id) => {
    const config = requestConfig("PUT", data, token);

    try {
        const res = await fetch(`${api}/users/${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const del = async (data = null, token, id) => {
    const config = requestConfig("DELETE", data, token);

    try {
        const res = await fetch(`${api}/users/${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    profile,
    show,
    get,
    put,
    del
};

export default authService;