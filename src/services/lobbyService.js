import { api, requestConfig } from "../utils/config";

const create = async (data, token) => {
    const config = requestConfig("POST", data, token);
    console.log(config);
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

const getUserLobbies = async (token, id) => {
    const config = requestConfig("GET", null, token);

    try {
        const url = id ? `${api}/lobbies/user/${id}` : `${api}/lobbies/user`;
        const res = await fetch(url, config)
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

const lobbyService = {
    create,
    show,
    get,
    getUserLobbies,
    put,
    del
};

export default lobbyService;