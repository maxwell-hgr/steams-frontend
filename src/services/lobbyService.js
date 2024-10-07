import { api, requestConfig } from "../utils/config";

const create = async (data, token) => {
    const config = requestConfig("POST", data, token);

    try {
        const res = fetch(`${api}/lobbies`, config)
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
        const res = await fetch(`${api}/lobbies/${id}`, config)
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
        const res = await fetch(`${api}/lobbies`, config)
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
        const res = await fetch(`${api}/lobbies/${id}`, config)
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
        const res = await fetch(`${api}/lobbies/${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    create,
    show,
    get,
    put,
    del
};

export default authService;