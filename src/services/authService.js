import { api, requestConfig } from "../utils/config";

const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/auth/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/auth/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const validateToken = async (token) => {
  const config = requestConfig("POST", null, token);

  try {
    const res = await fetch(api + "/auth/validate", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  logout,
  login,
  validateToken
};

export default authService;